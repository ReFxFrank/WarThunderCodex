import type { Vehicle, BattleRatings } from "@/lib/schema";

/** The BR to show by default (RB), falling back to AB then SB. */
export function primaryBR(br: BattleRatings): number | null {
  return br.realistic ?? br.arcade ?? br.simulator ?? null;
}

/** Class display label. */
export function classLabel(cls: Vehicle["class"]): string {
  return cls === "aviation" ? "Aviation" : cls === "ground" ? "Ground" : "Naval";
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
