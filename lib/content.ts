import { runValidation, type ValidationReport } from "@/lib/validate-content";
import type { Nation } from "@/lib/nations";
import type { Vehicle, VehicleClass } from "@/lib/schema";

/**
 * Typed content access. Validation runs once at module load; if any record is
 * malformed or a cross-reference is dangling, this throws — which fails the
 * build, since pages import these getters. This is the guardrail that keeps the
 * data honest (§4 of the build brief).
 */

const report: ValidationReport = runValidation();

if (!report.ok) {
  const lines = report.issues
    .map((i) => `  • [${i.collection}${i.id ? ` ${i.id}` : ""}] ${i.message}`)
    .join("\n");
  throw new Error(
    `War Thunder Codex content validation failed (${report.issues.length} issue(s)):\n${lines}\n` +
      `Fix the content or run \`npm run validate\` for the full report.`,
  );
}

const { vehicles, weapons, ammo, missiles, glossary } = report.data;

// --- vehicles -------------------------------------------------------------
export function getAllVehicles(): Vehicle[] {
  return vehicles;
}
export function getVehicle(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}
export function getVehiclesByClass(cls: VehicleClass): Vehicle[] {
  return vehicles.filter((v) => v.class === cls);
}
export function getVehiclesByNation(nation: Nation): Vehicle[] {
  return vehicles.filter((v) => v.nation === nation);
}

// --- weapons / ammo / missiles -------------------------------------------
export function getAllWeapons() {
  return weapons;
}
export function getWeapon(id: string) {
  return weapons.find((w) => w.id === id);
}
export function getAllAmmo() {
  return ammo;
}
export function getAmmo(id: string) {
  return ammo.find((a) => a.id === id);
}
export function getAllMissiles() {
  return missiles;
}
export function getMissile(id: string) {
  return missiles.find((m) => m.id === id);
}

// --- glossary -------------------------------------------------------------
export function getGlossary() {
  return [...glossary].sort((a, b) => a.term.localeCompare(b.term));
}
export function getGlossaryTerm(term: string) {
  return glossary.find((g) => g.term.toLowerCase() === term.toLowerCase());
}

// --- coverage snapshot (feeds the data-status surface) --------------------
export function getContentCounts() {
  return report.counts;
}
