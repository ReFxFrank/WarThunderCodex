// Turns the Phase 4 workflow output into typed content data:
//   - content/data/ammo/index.ts
//   - content/data/missiles/index.ts
//
// Usage: node scripts/gen-ammo-from-workflow.mjs <workflow-output.json>
import { promises as fs } from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("usage: node scripts/gen-ammo-from-workflow.mjs <workflow-output.json>");
  process.exit(1);
}

function unwrap(parsed) {
  if (parsed && Array.isArray(parsed.ammo)) return parsed;
  for (const k of ["result", "output", "return", "value", "data"]) {
    if (parsed?.[k] && Array.isArray(parsed[k].ammo)) return parsed[k];
  }
  throw new Error("could not find { ammo, missiles } in workflow output");
}

const data = unwrap(JSON.parse(await fs.readFile(inputPath, "utf8")));

function cleanAmmo(entry) {
  const a = entry.final ?? entry;
  const out = {
    id: a.id, name: a.name, type: a.type,
    penetration: Array.isArray(a.penetration) ? a.penetration : [],
    velocityMps: a.velocityMps ?? null,
    explosiveMassTntEqG: a.explosiveMassTntEqG ?? null,
    normalizationDeg: a.normalizationDeg ?? null,
    fuseSensitivityMm: a.fuseSensitivityMm ?? null,
    fuseDelayM: a.fuseDelayM ?? null,
    mechanics: a.mechanics ?? "",
    sources: a.sources, unverified: a.unverified ?? [], lastVerified: a.lastVerified, gameVersion: a.gameVersion,
  };
  // ricochetAnglesDeg is optional and must be an object when present (no null).
  if (a.ricochetAnglesDeg && typeof a.ricochetAnglesDeg === "object") out.ricochetAnglesDeg = a.ricochetAnglesDeg;
  return out;
}

function cleanMissile(entry) {
  const m = entry.final ?? entry;
  const out = {
    id: m.id, name: m.name, kind: m.kind, guidance: m.guidance,
    maxRangeM: m.maxRangeM ?? null, minRangeM: m.minRangeM ?? null,
    maxMach: m.maxMach ?? null, overloadG: m.overloadG ?? null, seekerFovDeg: m.seekerFovDeg ?? null,
    notes: m.notes ?? "",
    sources: m.sources, unverified: m.unverified ?? [], lastVerified: m.lastVerified, gameVersion: m.gameVersion,
  };
  if (typeof m.allAspect === "boolean") out.allAspect = m.allAspect;
  if (typeof m.irccm === "boolean") out.irccm = m.irccm;
  if (m.flareResistanceNote) out.flareResistanceNote = m.flareResistanceNote;
  return out;
}

const ammo = data.ammo.map(cleanAmmo);
const missiles = (data.missiles ?? []).map(cleanMissile);

await fs.writeFile(
  path.join("content", "data", "ammo", "index.ts"),
  `import type { Ammo } from "@/lib/schema";\n\n// Seeded ammunition — generated from the Phase 4 research/verify workflow.\n// Penetration tables sourced; unverifiable figures are null and listed in unverified[].\nexport const ammo: Ammo[] = ${JSON.stringify(ammo, null, 2)};\n`,
  "utf8",
);
await fs.writeFile(
  path.join("content", "data", "missiles", "index.ts"),
  `import type { Missile } from "@/lib/schema";\n\n// Seeded missiles — generated from the Phase 4 research/verify workflow.\nexport const missiles: Missile[] = ${JSON.stringify(missiles, null, 2)};\n`,
  "utf8",
);

console.log(`wrote ${ammo.length} ammo and ${missiles.length} missile(s)`);
