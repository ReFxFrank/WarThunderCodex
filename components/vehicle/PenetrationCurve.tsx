import { cn } from "@/lib/cn";

export interface PenSeries {
  name: string;
  /** Points at a fixed angle (typically 0°), sorted by range. */
  points: { rangeM: number; penMm: number }[];
}

const LINE_COLORS = ["var(--accent)", "var(--ok)", "var(--caution)", "#8fb7ff"];

/**
 * Penetration-vs-range curve for kinetic rounds. One line per shell. Used on the
 * vehicle detail page and ammo pages; renders nothing if no series have data.
 */
export function PenetrationCurve({ series, className }: { series: PenSeries[]; className?: string }) {
  const usable = series.filter((s) => s.points.length > 1);
  if (usable.length === 0) return null;

  const W = 520;
  const H = 240;
  const pad = { l: 44, r: 12, t: 12, b: 32 };
  const maxRange = Math.max(...usable.flatMap((s) => s.points.map((p) => p.rangeM)));
  const maxPen = Math.max(...usable.flatMap((s) => s.points.map((p) => p.penMm)));
  const rTicks = niceTicks(maxRange, 4);
  const pTicks = niceTicks(maxPen, 4);
  const rMax = rTicks[rTicks.length - 1];
  const pMax = pTicks[pTicks.length - 1];

  const x = (r: number) => pad.l + (r / rMax) * (W - pad.l - pad.r);
  const y = (p: number) => H - pad.b - (p / pMax) * (H - pad.t - pad.b);

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">Penetration vs range</span>
        <span className="font-data text-[0.65rem] text-faint">0° impact</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Penetration versus range curve">
        {pTicks.map((t) => (
          <g key={`p${t}`}>
            <line x1={pad.l} y1={y(t)} x2={W - pad.r} y2={y(t)} stroke="var(--hairline)" strokeWidth="1" />
            <text x={pad.l - 6} y={y(t) + 3} textAnchor="end" className="font-data" fill="var(--muted)" fontSize="9">{t}</text>
          </g>
        ))}
        {rTicks.map((t) => (
          <text key={`r${t}`} x={x(t)} y={H - pad.b + 14} textAnchor="middle" className="font-data" fill="var(--muted)" fontSize="9">{t}</text>
        ))}
        <text x={pad.l} y={10} className="label-tag" fill="var(--muted)" fontSize="8">mm</text>
        <text x={W - pad.r} y={H - 4} textAnchor="end" className="label-tag" fill="var(--muted)" fontSize="8">metres</text>
        {usable.map((s, i) => {
          const color = LINE_COLORS[i % LINE_COLORS.length];
          const d = [...s.points]
            .sort((a, b) => a.rangeM - b.rangeM)
            .map((p, j) => `${j === 0 ? "M" : "L"} ${x(p.rangeM)} ${y(p.penMm)}`)
            .join(" ");
          return <path key={s.name} d={d} fill="none" stroke={color} strokeWidth="2" />;
        })}
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {usable.map((s, i) => (
          <span key={s.name} className="inline-flex items-center gap-1.5 text-xs text-muted">
            <span className="inline-block h-2 w-3 rounded-sm" style={{ background: LINE_COLORS[i % LINE_COLORS.length] }} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function niceTicks(max: number, count: number): number[] {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? 10 * mag;
  const ticks: number[] = [];
  for (let t = 0; t <= max + step; t += step) ticks.push(Math.round(t));
  return ticks;
}
