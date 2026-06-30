// Turns the Phase 3 vehicle workflow output (flat per-class records) into the
// nested, typed content data:
//   - content/data/vehicles/index.ts
//   - content/data/weapons/index.ts
//
// Usage: node scripts/gen-vehicles-from-workflow.mjs <workflow-output.json>
import { promises as fs } from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("usage: node scripts/gen-vehicles-from-workflow.mjs <workflow-output.json>");
  process.exit(1);
}

function unwrap(parsed) {
  if (parsed && Array.isArray(parsed.vehicles)) return parsed;
  for (const k of ["result", "output", "return", "value", "data"]) {
    if (parsed?.[k] && Array.isArray(parsed[k].vehicles)) return parsed[k];
  }
  throw new Error("could not find { vehicles, weapons } in workflow output");
}

const data = unwrap(JSON.parse(await fs.readFile(inputPath, "utf8")));

const dropUndef = (o) => JSON.parse(JSON.stringify(o)); // strips undefined keys
const triple = (f, s, r) => {
  const o = {};
  // Armour fields are strings in the schema (e.g. "80 + 20 ERA"); coerce in case
  // a research agent emitted bare numbers.
  if (f != null) o.front = String(f);
  if (s != null) o.side = String(s);
  if (r != null) o.rear = String(r);
  return Object.keys(o).length ? o : undefined;
};
const br = (a) => ({ arcade: a.brArcade ?? null, realistic: a.brRealistic ?? null, simulator: a.brSimulator ?? null });
const baseOf = (a) => ({
  id: a.id, name: a.name, nation: a.nation, class: a.class, subclass: a.subclass, rank: a.rank,
  battleRatings: br(a), acquisition: a.acquisition, releaseUpdate: a.releaseUpdate || undefined,
  summary: a.summary, prosCons: { pros: a.pros ?? [], cons: a.cons ?? [] }, playstyle: a.playstyle,
  history: a.history || undefined, media: [],
  sources: a.sources, unverified: a.unverified ?? [], lastVerified: a.lastVerified, gameVersion: a.gameVersion,
});

function toVehicle(entry) {
  const a = entry.final ?? entry;
  if (a.class === "ground") {
    return dropUndef({
      ...baseOf(a),
      mobility: {
        maxFwdKph: a.maxFwdKph ?? null, maxRevKph: a.maxRevKph ?? null, enginePowerHp: a.enginePowerHp ?? null,
        weightTons: a.weightTons ?? null, powerToWeight: a.powerToWeight ?? null,
        reverseGears: a.reverseGears ?? null, neutralSteering: a.neutralSteering ?? null,
      },
      firepower: {
        mainGunId: a.mainGunId ?? null, reloadBaseSec: a.reloadBaseSec ?? null, reloadAcedSec: a.reloadAcedSec ?? null,
        vertGuidanceDeg: a.depressionDeg != null && a.elevationDeg != null ? [a.depressionDeg, a.elevationDeg] : undefined,
        turretTraverseDegSec: a.turretTraverseDegSec ?? null, ammoCapacity: a.ammoCapacity ?? null,
        ammoTypeIds: a.ammoTypeIds ?? [],
      },
      armor: {
        hullMm: triple(a.hullFront, a.hullSide, a.hullRear),
        turretMm: triple(a.turretFront, a.turretSide, a.turretRear),
        crewCount: a.crewCount ?? null, era: !!a.era, composite: !!a.composite,
        aps: a.apsModel || false,
      },
    });
  }
  if (a.class === "aviation") {
    return dropUndef({
      ...baseOf(a),
      flight: {
        maxSpeedKph: a.maxSpeedKph ?? null, maxSpeedAltM: a.maxSpeedAltM ?? null, climbMps: a.climbMps ?? null,
        turnTimeSec: a.turnTimeSec ?? null, structuralLimitKph: a.structuralLimitKph ?? null,
        ceilingM: a.ceilingM ?? null, engineCount: a.engineCount ?? null,
      },
      armament: { fixed: a.fixedArmament ?? [], suspended: a.suspended && a.suspended.length ? a.suspended : undefined },
      protection: a.protectionSteelMm != null || a.protectionGlassMm != null || a.protectionNotes
        ? { steelMm: a.protectionSteelMm ?? null, glassMm: a.protectionGlassMm ?? null, notes: a.protectionNotes || undefined }
        : undefined,
    });
  }
  // naval
  return dropUndef({
    ...baseOf(a),
    hull: { displacementTons: a.displacementTons ?? null, lengthM: a.lengthM ?? null, crew: a.crew ?? null },
    propulsion: { maxKnots: a.maxKnots ?? null },
    armament: {
      mainBattery: a.mainBattery || undefined, secondary: a.secondary || undefined,
      aa: a.aa || undefined, torpedoes: a.torpedoes || undefined,
      depthCharges: typeof a.depthCharges === "boolean" ? a.depthCharges : undefined,
    },
    armor: triple(a.beltMm, a.deckMm, a.citadel) ? { beltMm: a.beltMm || undefined, deckMm: a.deckMm || undefined, citadel: a.citadel || undefined } : undefined,
    survivability: a.survivability || undefined,
  });
}

function toWeapon(entry) {
  const a = entry.final ?? entry;
  return dropUndef({
    id: a.id, name: a.name, type: a.type, caliberMm: a.caliberMm ?? null,
    fireRateRpm: a.fireRateRpm ?? null, muzzleVelocityMps: a.muzzleVelocityMps ?? null,
    ammoTypeIds: a.ammoTypeIds ?? [], usedBy: a.usedBy ?? [], notes: a.notes ?? "",
    sources: a.sources, unverified: a.unverified ?? [], lastVerified: a.lastVerified, gameVersion: a.gameVersion,
  });
}

// Merge with any already-seeded data so expansion batches don't clobber prior
// entries (and preserve manual link edits). Files are machine-generated JSON, so
// we can slice the array out and parse it.
async function readExistingArray(file) {
  try {
    const t = await fs.readFile(file, "utf8");
    // Start at the array literal after the `=` (NOT the `[` in the `Vehicle[]` type).
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

const vehPath = path.join("content", "data", "vehicles", "index.ts");
const wpnPath = path.join("content", "data", "weapons", "index.ts");
const vehicles = mergeById(await readExistingArray(vehPath), data.vehicles.map(toVehicle));
const weapons = mergeById(await readExistingArray(wpnPath), (data.weapons ?? []).map(toWeapon));

// Reconcile weapon.usedBy from actual vehicle references (ground mainGunId +
// aviation fixedArmament). This makes reusing an existing gun id auto-extend its
// usedBy — no manual patching when a new vehicle shares a gun.
const refs = new Map(); // weaponId -> Set(vehicleId)
for (const v of vehicles) {
  const ids = [];
  if (v.firepower?.mainGunId) ids.push(v.firepower.mainGunId);
  for (const f of v.armament?.fixed ?? []) if (f?.weaponId) ids.push(f.weaponId);
  for (const wid of ids) {
    if (!refs.has(wid)) refs.set(wid, new Set());
    refs.get(wid).add(v.id);
  }
}
for (const w of weapons) {
  const referencing = refs.get(w.id);
  if (referencing) w.usedBy = [...new Set([...(w.usedBy ?? []), ...referencing])];
}

const vehFile =
  `import type { Vehicle } from "@/lib/schema";\n\n` +
  `// Seeded vehicle records — generated from the Phase 3 research/verify workflow.\n` +
  `// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].\n` +
  `export const vehicles: Vehicle[] = ${JSON.stringify(vehicles, null, 2)};\n`;
await fs.writeFile(path.join("content", "data", "vehicles", "index.ts"), vehFile, "utf8");

const wpnFile =
  `import type { Weapon } from "@/lib/schema";\n\n` +
  `// Seeded weapon records — generated from the Phase 3 research/verify workflow.\n` +
  `export const weapons: Weapon[] = ${JSON.stringify(weapons, null, 2)};\n`;
await fs.writeFile(path.join("content", "data", "weapons", "index.ts"), wpnFile, "utf8");

console.log(`wrote ${vehicles.length} vehicle(s) and ${weapons.length} weapon(s)`);
