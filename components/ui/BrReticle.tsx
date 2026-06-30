import { cn } from "@/lib/cn";

interface BrReticleProps {
  /** Battle rating value; null renders as an unverified marker. */
  value: number | null;
  /** Mode label shown beneath the value, e.g. "RB". */
  mode?: string;
  size?: number;
  className?: string;
}

/** Picks a ring color by lethality band so high-BR vehicles read as dangerous. */
function ringColor(value: number | null): string {
  if (value === null) return "var(--faint)";
  if (value >= 10) return "var(--alert)";
  if (value >= 5) return "var(--accent)";
  return "var(--ok)";
}

/**
 * The Battle Rating badge, rendered like a targeting reticle: a ticked ring
 * with a crosshair and the BR value in monospace at the center.
 */
export function BrReticle({ value, mode = "RB", size = 72, className }: BrReticleProps) {
  const color = ringColor(value);
  const c = size / 2;
  const r = c - 6;
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <span
      className={cn("inline-flex flex-col items-center", className)}
      title={value === null ? "Battle rating unverified" : `Battle rating ${value.toFixed(1)} (${mode})`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={value === null ? `Battle rating unverified, ${mode}` : `Battle rating ${value.toFixed(1)} ${mode}`}>
        <circle cx={c} cy={c} r={r} fill="rgba(8,10,13,0.6)" stroke={color} strokeOpacity={0.35} strokeWidth={1} />
        <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray="1 0" strokeOpacity={0.85} />
        {/* tick marks */}
        {ticks.map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x1 = c + Math.cos(a) * (r - 4);
          const y1 = c + Math.sin(a) * (r - 4);
          const x2 = c + Math.cos(a) * r;
          const y2 = c + Math.sin(a) * r;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeOpacity={0.5} strokeWidth={1} />;
        })}
        {/* crosshair */}
        <line x1={c} y1={4} x2={c} y2={14} stroke={color} strokeWidth={1} strokeOpacity={0.7} />
        <line x1={c} y1={size - 4} x2={c} y2={size - 14} stroke={color} strokeWidth={1} strokeOpacity={0.7} />
        <line x1={4} y1={c} x2={14} y2={c} stroke={color} strokeWidth={1} strokeOpacity={0.7} />
        <line x1={size - 4} y1={c} x2={size - 14} y2={c} stroke={color} strokeWidth={1} strokeOpacity={0.7} />
        <text
          x={c}
          y={c + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={value === null ? "var(--faint)" : "var(--text)"}
          style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
          fontSize={size * 0.26}
        >
          {value === null ? "—" : value.toFixed(1)}
        </text>
      </svg>
      <span className="label-tag mt-1" style={{ color }}>
        {mode}
        {value === null && " · n/a"}
      </span>
    </span>
  );
}
