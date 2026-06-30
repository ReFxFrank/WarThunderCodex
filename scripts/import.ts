/**
 * Import scaffold — emits a schema-valid STUB for a new content record so a new
 * entry always starts valid and gets filled in by research (never guessed).
 *
 *   npm run import -- --kind vehicle --class ground --id is-2 --name "IS-2" \
 *     --nation ussr --subclass "Heavy tank" --rank IV
 *   npm run import -- --kind weapon --id d-25t-122mm --name "122 mm D-25T" --type cannon
 *   npm run import -- --kind ammo   --id br-471 --name "BR-471 (APHE)" --type APHE
 *   npm run import -- --kind missile --id r-60 --name "R-60" --kindOf air-to-air --guidance IR
 *
 * Prints the record to stdout (redirect into the right content/data file, or
 * copy the object into its array). Every stat starts null and is listed in
 * unverified[]; the source is a TODO placeholder you must replace with the
 * vehicle's real Tier-1 wiki page before the entry counts as verified.
 */
import {
  vehicleSchema,
  weaponSchema,
  ammoSchema,
  missileSchema,
} from "@/lib/schema";
import type { z } from "zod";

const args = process.argv.slice(2);
function flag(name: string, fallback = ""): string {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
}

const TODAY = new Date().toISOString().slice(0, 10);
const TODO_SOURCE = {
  label: "TODO — replace with this entry's official wiki page",
  url: "https://wiki.warthunder.com/",
  tier: 1 as const,
  retrievedAt: TODAY,
};
const STAMP = { lastVerified: TODAY, gameVersion: "TODO — current update name" };

function die(msg: string): never {
  console.error(`error: ${msg}`);
  process.exit(1);
}

const kind = flag("kind") || die("--kind vehicle|weapon|ammo|missile is required");
const id = flag("id") || die("--id <slug> is required");
const name = flag("name") || die("--name <display name> is required");

function vehicleStub() {
  const cls = flag("class") || die("--class ground|aviation|naval is required for vehicles");
  const base = {
    id,
    name,
    nation: flag("nation", "usa"),
    subclass: flag("subclass", "TODO subclass"),
    rank: flag("rank", "I"),
    battleRatings: { arcade: null, realistic: null, simulator: null },
    acquisition: ["tech-tree"],
    summary: "TODO — original 1-3 sentence summary.",
    prosCons: { pros: [], cons: [] },
    playstyle: "TODO — original tactics prose.",
    media: [],
    sources: [TODO_SOURCE],
    unverified: [] as string[],
    ...STAMP,
  };
  if (cls === "ground") {
    return {
      ...base,
      class: "ground",
      unverified: ["maxFwdKph", "maxRevKph", "enginePowerHp", "weightTons", "powerToWeight", "reverseGears", "neutralSteering", "reloadBaseSec", "reloadAcedSec", "turretTraverseDegSec", "ammoCapacity", "hullMm", "turretMm", "crewCount"],
      mobility: { maxFwdKph: null, maxRevKph: null, enginePowerHp: null, weightTons: null, powerToWeight: null, reverseGears: null, neutralSteering: null },
      firepower: { mainGunId: null, reloadBaseSec: null, reloadAcedSec: null, turretTraverseDegSec: null, ammoCapacity: null, ammoTypeIds: [] },
      armor: { crewCount: null, era: false, composite: false },
    };
  }
  if (cls === "aviation") {
    return {
      ...base,
      class: "aviation",
      unverified: ["maxSpeedKph", "maxSpeedAltM", "climbMps", "turnTimeSec", "structuralLimitKph", "ceilingM", "engineCount"],
      flight: { maxSpeedKph: null, maxSpeedAltM: null, climbMps: null, turnTimeSec: null, structuralLimitKph: null, ceilingM: null, engineCount: null },
      armament: { fixed: [] },
    };
  }
  if (cls === "naval") {
    return {
      ...base,
      class: "naval",
      unverified: ["displacementTons", "lengthM", "crew", "maxKnots"],
      hull: { displacementTons: null, lengthM: null, crew: null },
      propulsion: { maxKnots: null },
      armament: {},
      survivability: "TODO — original survivability note.",
    };
  }
  return die(`unknown --class "${cls}"`);
}

function weaponStub() {
  return {
    id,
    name,
    type: flag("type", "cannon"),
    caliberMm: null,
    fireRateRpm: null,
    muzzleVelocityMps: null,
    ammoTypeIds: [],
    usedBy: [],
    notes: "TODO — original note on the gun's in-game character.",
    sources: [TODO_SOURCE],
    unverified: ["caliberMm", "fireRateRpm", "muzzleVelocityMps"],
    ...STAMP,
  };
}

function ammoStub() {
  return {
    id,
    name,
    type: flag("type", "AP"),
    penetration: [],
    velocityMps: null,
    explosiveMassTntEqG: null,
    normalizationDeg: null,
    fuseSensitivityMm: null,
    fuseDelayM: null,
    mechanics: "TODO — original post-penetration mechanics.",
    sources: [TODO_SOURCE],
    unverified: ["penetration", "velocityMps", "explosiveMassTntEqG", "normalizationDeg", "fuseSensitivityMm", "fuseDelayM"],
    ...STAMP,
  };
}

function missileStub() {
  return {
    id,
    name,
    kind: flag("kindOf", "air-to-air"),
    guidance: flag("guidance", "IR"),
    maxRangeM: null,
    minRangeM: null,
    maxMach: null,
    overloadG: null,
    seekerFovDeg: null,
    notes: "TODO — original note.",
    sources: [TODO_SOURCE],
    unverified: ["maxRangeM", "minRangeM", "maxMach", "overloadG", "seekerFovDeg"],
    ...STAMP,
  };
}

const schemas: Record<string, z.ZodTypeAny> = {
  vehicle: vehicleSchema,
  weapon: weaponSchema,
  ammo: ammoSchema,
  missile: missileSchema,
};

const builders: Record<string, () => unknown> = {
  vehicle: vehicleStub,
  weapon: weaponStub,
  ammo: ammoStub,
  missile: missileStub,
};

const build = builders[kind] || die(`unknown --kind "${kind}"`);
const schema = schemas[kind];
const stub = build();

// Guarantee the stub is schema-valid before emitting it.
const result = schema.safeParse(stub);
if (!result.success) {
  console.error("internal error: generated stub failed schema validation:");
  for (const issue of result.error.issues) console.error(`  ${issue.path.join(".")}: ${issue.message}`);
  process.exit(1);
}

console.error(`// ✓ schema-valid ${kind} stub for "${id}" — fill the TODOs, replace the source, move values out of unverified[] as you confirm them.`);
console.log(JSON.stringify(stub, null, 2) + ",");
