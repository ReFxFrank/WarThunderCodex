import { cn } from "@/lib/cn";

interface GaugeProps {
  label: string;
  /** The measured value; null renders as an unverified readout. */
  value: number | null;
  unit?: string;
  min?: number;
  max?: number;
  /** Color of the active arc; defaults to tracer amber. */
  color?: string;
  size?: number;
  /** When true, plays the power-on settle on load (caller controls reduced-motion via CSS). */
  animate?: boolean;
  className?: string;
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function arc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const large = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

/**
 * A backlit gauge readout: a 240° arc with the value filled in, a monospace
 * numeral underneath. An unverified value reads as a dim "—" rather than a
 * fabricated number — a visible gap is the honest default here.
 */
export function Gauge({
  label,
  value,
  unit,
  min = 0,
  max = 100,
  color = "var(--accent)",
  size = 132,
  animate = false,
  className,
}: GaugeProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 12;
  const START = -120;
  const END = 120;
  const verified = value !== null && Number.isFinite(value);
  const pct = verified ? Math.min(1, Math.max(0, (value! - min) / (max - min))) : 0;
  const valueDeg = START + pct * (END - START);

  return (
    <div className={cn("flex flex-col items-center", animate && "power-on", className)}>
      <svg width={size} height={size * 0.78} viewBox={`0 0 ${size} ${size * 0.78}`} role="img" aria-label={`${label}: ${verified ? `${value} ${unit ?? ""}`.trim() : "unverified"}`}>
        {/* track */}
        <path d={arc(cx, cy, r, START, END)} fill="none" stroke="var(--hairline-strong)" strokeWidth={6} strokeLinecap="round" />
        {/* value fill */}
        {verified && (
          <path d={arc(cx, cy, r, START, valueDeg)} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" style={{ filter: "drop-shadow(0 0 4px rgba(245,165,36,0.35))" }} />
        )}
        {/* end ticks */}
        <circle cx={polar(cx, cy, r, START).x} cy={polar(cx, cy, r, START).y} r={2} fill="var(--muted)" />
        <circle cx={polar(cx, cy, r, END).x} cy={polar(cx, cy, r, END).y} r={2} fill="var(--muted)" />
        {/* center readout */}
        <text x={cx} y={cy - 2} textAnchor="middle" dominantBaseline="middle" fill={verified ? "var(--text)" : "var(--faint)"} style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }} fontSize={size * 0.2}>
          {verified ? formatValue(value!) : "—"}
        </text>
        {unit && (
          <text x={cx} y={cy + size * 0.13} textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)" }} fontSize={size * 0.085}>
            {unit}
          </text>
        )}
      </svg>
      <div className="label-tag -mt-1 text-center">{label}</div>
      {!verified && (
        <div className="mt-0.5 text-[0.6rem] text-faint" title="This value has not been verified against a source">
          needs verification
        </div>
      )}
    </div>
  );
}

function formatValue(v: number): string {
  if (Math.abs(v) >= 1000) return v.toLocaleString("en-US");
  if (Number.isInteger(v)) return String(v);
  return v.toFixed(1);
}
