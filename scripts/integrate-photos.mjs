// Downloads the license-verified real-world photos (from the photo-sourcing
// agents' manifests) into /public/vehicles, and patches each vehicle's media[]
// with a credited image entry. Real photos only — PD or CC-BY/CC-BY-SA.
//
// Usage: node scripts/integrate-photos.mjs <manifest-dir>
import { promises as fs } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const manifestDir = process.argv[2];
if (!manifestDir) {
  console.error("usage: node scripts/integrate-photos.mjs <manifest-dir>");
  process.exit(1);
}

// Gather manifests.
const files = (await fs.readdir(manifestDir)).filter((f) => f.endsWith(".json"));
const entries = [];
for (const f of files) {
  const arr = JSON.parse(await fs.readFile(path.join(manifestDir, f), "utf8"));
  for (const e of arr) if (e && e.found && e.file) entries.push(e);
}

const outDir = path.join("public", "vehicles");
await fs.mkdir(outDir, { recursive: true });

function isImage(buf) {
  if (buf.length < 4) return false;
  if (buf[0] === 0xff && buf[1] === 0xd8) return "jpg"; // JPEG
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return "png";
  return false;
}

const media = {}; // id -> media entry
for (const e of entries) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e.file)}?width=960`;
  const tmp = path.join(outDir, `${e.id}.download`);
  try {
    execFileSync("curl", ["-sS", "-L", "--max-time", "90", "-o", tmp, url], { stdio: "ignore" });
    const buf = await fs.readFile(tmp);
    const kind = isImage(buf);
    if (!kind) {
      console.warn(`! ${e.id}: download was not an image, skipping`);
      await fs.rm(tmp, { force: true });
      continue;
    }
    const finalName = `${e.id}.${kind}`;
    await fs.rename(tmp, path.join(outDir, finalName));
    media[e.id] = {
      src: `/vehicles/${finalName}`,
      alt: e.caption || `${e.realName} (real-world example)`,
      credit: `${e.author || "Unknown"} · ${e.license} · Wikimedia Commons`,
      type: "image",
    };
    console.log(`✓ ${e.id} (${(buf.length / 1024).toFixed(0)} KB, ${e.license})`);
  } catch (err) {
    console.warn(`! ${e.id}: download failed — ${err.message}`);
    await fs.rm(tmp, { force: true });
  }
}

// Patch vehicles/index.ts media[].
const vehPath = path.join("content", "data", "vehicles", "index.ts");
const raw = await fs.readFile(vehPath, "utf8");
const eq = raw.indexOf("=");
const s = raw.indexOf("[", eq);
const eIdx = raw.lastIndexOf("]");
const vehicles = JSON.parse(raw.slice(s, eIdx + 1));
let patched = 0;
for (const v of vehicles) {
  if (media[v.id]) {
    v.media = [media[v.id]];
    patched++;
  }
}
const file =
  `import type { Vehicle } from "@/lib/schema";\n\n` +
  `// Seeded vehicle records — generated from the research/verify workflow.\n` +
  `// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].\n` +
  `// media[] holds license-verified real-world photos (PD/CC) with credit.\n` +
  `export const vehicles: Vehicle[] = ${JSON.stringify(vehicles, null, 2)};\n`;
await fs.writeFile(vehPath, file, "utf8");

console.log(`\ndownloaded ${Object.keys(media).length} image(s); patched ${patched} vehicle record(s)`);
