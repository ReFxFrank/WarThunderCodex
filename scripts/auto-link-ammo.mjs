// Propagate already-sourced shells to every vehicle that mounts the SAME gun.
// Builds mainGunId -> set(ammoIds) from vehicles that already have ammoTypeIds,
// then fills any same-gun vehicle whose ammoTypeIds is empty. No research needed:
// it just reuses shells we've already verified for that exact gun.
//
// Usage: node scripts/auto-link-ammo.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const p = path.join("content", "data", "vehicles", "index.ts");
const t = await fs.readFile(p, "utf8");
const s = t.indexOf("[", t.indexOf("="));
const e = t.lastIndexOf("]");
const vehicles = JSON.parse(t.slice(s, e + 1));

const gunToAmmo = new Map();
for (const v of vehicles) {
  const gun = v.firepower?.mainGunId;
  const ammo = v.firepower?.ammoTypeIds;
  if (!gun || !ammo || ammo.length === 0) continue;
  if (!gunToAmmo.has(gun)) gunToAmmo.set(gun, new Set());
  for (const a of ammo) gunToAmmo.get(gun).add(a);
}

let filled = 0;
const touched = [];
for (const v of vehicles) {
  const gun = v.firepower?.mainGunId;
  if (!gun) continue;
  const ammo = v.firepower.ammoTypeIds ?? [];
  if (ammo.length > 0) continue;
  const shared = gunToAmmo.get(gun);
  if (!shared) continue;
  v.firepower.ammoTypeIds = [...shared];
  filled++;
  touched.push(`${v.id} (${gun})`);
}

if (filled > 0) {
  await fs.writeFile(
    p,
    `import type { Vehicle } from "@/lib/schema";\n\n// Seeded vehicle records — generated from the Phase 3 research/verify workflow.\n// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].\nexport const vehicles: Vehicle[] = ${JSON.stringify(vehicles, null, 2)};\n`,
    "utf8",
  );
}
console.log(`auto-linked shared-gun ammo to ${filled} vehicle(s)`);
if (touched.length) console.log(touched.join("\n"));
