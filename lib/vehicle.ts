import type { Vehicle, BattleRatings } from "@/lib/schema";

/** The BR to show by default (RB), falling back to AB then SB. */
export function primaryBR(br: BattleRatings): number | null {
  return br.realistic ?? br.arcade ?? br.simulator ?? null;
}

/** Class display label. */
export function classLabel(cls: Vehicle["class"]): string {
  return cls === "aviation" ? "Aviation" : cls === "ground" ? "Ground" : "Naval";
}

/**
 * Helicopters are stored as `class: "aviation"` (subclass "Attack helicopter"),
 * but we surface them as their own browser/section. This is the single source of
 * truth for that split.
 */
export function isHelicopter(v: Vehicle): boolean {
  return v.class === "aviation" && /helicopter/i.test(v.subclass);
}

/** The class-browser path a vehicle belongs to (helicopters get their own). */
export function browsePath(v: Vehicle): string {
  return isHelicopter(v) ? "/helicopters" : `/${v.class}`;
}

/** The class-browser label for a vehicle (helicopters get their own). */
export function browseLabel(v: Vehicle): string {
  return isHelicopter(v) ? "Helicopters" : classLabel(v.class);
}

/** Format a numeric stat for an instrument readout, or null → em dash. */
export function fmt(value: number | null | undefined, opts?: { digits?: number; suffix?: string }): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return "—";
  const digits = opts?.digits;
  const n = digits === undefined ? (Number.isInteger(value) ? String(value) : value.toFixed(1)) : value.toFixed(digits);
  const withThousands = Math.abs(value) >= 1000 ? Number(n).toLocaleString("en-US") : n;
  return opts?.suffix ? `${withThousands} ${opts.suffix}` : withThousands;
}

export function isUnverified(v: Vehicle, field: string): boolean {
  return v.unverified.includes(field);
}
