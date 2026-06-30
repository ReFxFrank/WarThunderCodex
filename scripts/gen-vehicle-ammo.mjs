// Merges a dedicated ammunition pass into the dataset:
//   - adds/updates Ammo records in content/data/ammo/index.ts (merge by id; the
//     existing gen-ammo OVERWRITES, so this one is used for incremental passes)
//   - links each vehicle's firepower.ammoTypeIds to the shells it can load
//
// Input JSON shape: { ammo: Ammo[], links: [{ vehicleId, ammoIds: string[] }] }
// Usage: node scripts/gen-vehicle-ammo.mjs <pass-output.json>
import { promises as fs } from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("usage: node scripts/gen-vehicle-ammo.mjs <pass-output.json>");
  process.exit(1);
}
const data = JSON.parse(await fs.readFile(inputPath, "utf8"));
const incomingAmmo = Array.isArray(data.ammo) ? data.ammo : [];
const links = Array.isArray(data.links) ? data.links : [];

function cleanAmmo(entry) {
  const a = entry.final ?? entry;
  const out = {
    id: a.id,
    name: a.name,
    type: a.type,
    penetration: Array.isArray(a.penetration) ? a.penetration : [],
    velocityMps: a.velocityMps ?? null,
    explosiveMassTntEqG: a.explosiveMassTntEqG ?? null,
    normalizationDeg: a.normalizationDeg ?? null,
    fuseSensitivityMm: a.fuseSensitivityMm ?? null,
    fuseDelayM: a.fuseDelayM ?? null,
    mechanics: a.mechanics ?? "",
    sources: a.sources,
    unverified: a.unverified ?? [],
    lastVerified: a.lastVerified,
    gameVersion: a.gameVersion,
  };
  if (a.ricochetAnglesDeg && typeof a.ricochetAnglesDeg === "object") out.ricochetAnglesDeg = a.ricochetAnglesDeg;
  return out;
}

async function readArray(file) {
  try {
    const t = await fs.readFile(file, "utf8");
    const eq = t.indexOf("=");
    const s = eq < 0 ? -1 : t.indexOf("[", eq);
    const e = t.lastIndexOf("]");
    if (s < 0 || e < 0) return [];
    return JSON.parse(t.slice(s, e + 1));
  } catch {
    return [];
  }
}
function mergeById(existing, incoming) {
  const m = new Map(existing.map((x) => [x.id, x]));
  for (const x of incoming) m.set(x.id, x);
  return [...m.values()];
}

// 1) Merge ammo records.
const ammoPath = path.join("content", "data", "ammo", "index.ts");
const ammo = mergeById(await readArray(ammoPath), incomingAmmo.map(cleanAmmo));
const validIds = new Set(ammo.map((a) => a.id));

// 2) Patch vehicle ammoTypeIds from the links (union with any existing).
const vehPath = path.join("content", "data", "vehicles", "index.ts");
const vehicles = await readArray(vehPath);
const byId = new Map(vehicles.map((v) => [v.id, v]));
let linked = 0;
let skipped = 0;
for (const { vehicleId, ammoIds } of links) {
  const v = byId.get(vehicleId);
  if (!v || !v.firepower) {
    skipped++;
    continue;
  }
  const ids = (ammoIds || []).filter((id) => validIds.has(id));
  v.firepower.ammoTypeIds = [...new Set([...(v.firepower.ammoTypeIds ?? []), ...ids])];
  linked++;
}

await fs.writeFile(
  ammoPath,
  `import type { Ammo } from "@/lib/schema";\n\n// Seeded ammunition — generated from the research/verify workflow.\n// Penetration tables sourced; unverifiable figures are null and listed in unverified[].\nexport const ammo: Ammo[] = ${JSON.stringify(ammo, null, 2)};\n`,
  "utf8",
);
await fs.writeFile(
  vehPath,
  `import type { Vehicle } from "@/lib/schema";\n\n// Seeded vehicle records — generated from the Phase 3 research/verify workflow.\n// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].\nexport const vehicles: Vehicle[] = ${JSON.stringify(vehicles, null, 2)};\n`,
  "utf8",
);

console.log(`ammo now ${ammo.length}; linked ${linked} vehicle(s)${skipped ? `, skipped ${skipped} unknown` : ""}`);
