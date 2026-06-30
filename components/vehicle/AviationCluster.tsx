import { Readout } from "@/components/vehicle/Readout";
import type { AviationVehicle } from "@/lib/schema";

/** Normalize to 0..1 against a rough ceiling, for the relative envelope shape. */
function norm(v: number | null, max: number): number {
  if (v === null || !Number.isFinite(v)) return 0;
  return Math.max(0.05, Math.min(1, v / max));
}

/**
 * The aviation instrument cluster: a relative performance-envelope mini-chart
 * (speed / climb / turn) plus exact sourced readouts and the fixed armament.
 */
export function AviationCluster({
  vehicle,
  armament,
}: {
  vehicle: AviationVehicle;
  armament: { label: string; count: number }[];
}) {
  const f = vehicle.flight;
  // Axes: speed (top), climb (lower-right), turn (lower-left). Lower turn time is better.
  const speed = norm(f.maxSpeedKph, 1000);
  const climb = norm(f.climbMps, 30);
  const turn = f.turnTimeSec ? Math.max(0.05, Math.min(1, (30 - f.turnTimeSec) / 22)) : 0;
  const C = 90;
  const R = 64;
  const axes = [
    { a: -90, v: speed },
    { a: 30, v: climb },
    { a: 150, v: turn },
  ];
  const pt = (deg: number, r: number) => {
    const rad = (deg * Math.PI) / 180;
    return [C + Math.cos(rad) * r, C + Math.sin(rad) * r];
  };
  const poly = axes.map((ax) => pt(ax.a, R * ax.v).join(",")).join(" ");
  const hasShape = speed + climb + turn > 0.2;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="glass power-on flex flex-col items-center p-4">
        <div className="mb-1 w-full">
          <span className="label-tag text-accent">Performance envelope</span>
        </div>
        <svg viewBox="0 0 180 180" className="w-full max-w-[230px]" role="img" aria-label="Relative performance envelope">
          {[0.33, 0.66, 1].map((g) => (
            <polygon
              key={g}
              points={axes.map((ax) => pt(ax.a, R * g).join(",")).join(" ")}
              fill="none"
              stroke="var(--hairline)"
              strokeWidth="1"
            />
          ))}
          {axes.map((ax) => {
            const [x, y] = pt(ax.a, R);
            return <line key={ax.a} x1={C} y1={C} x2={x} y2={y} stroke="var(--hairline)" strokeWidth="1" />;
          })}
          {hasShape && (
            <polygon points={poly} fill="rgba(245,165,36,0.18)" stroke="var(--accent)" strokeWidth="1.5" />
          )}
          <text x={C} y={16} textAnchor="middle" className="label-tag" fill="var(--muted)" fontSize="9">SPEED</text>
          <text x={168} y={150} textAnchor="end" className="label-tag" fill="var(--muted)" fontSize="9">CLIMB</text>
          <text x={12} y={150} textAnchor="start" className="label-tag" fill="var(--muted)" fontSize="9">TURN</text>
        </svg>
        <span className="font-data mt-1 text-[0.6rem] text-faint">relative shape · exact figures at right</span>
      </div>

      <div className="glass power-on p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="label-tag text-accent">Flight &amp; armament</span>
          <span className="font-data text-[0.65rem] text-faint">in-game</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Max speed" value={f.maxSpeedKph} unit="km/h" />
          <Readout label="At altitude" value={f.maxSpeedAltM} unit="m" />
          <Readout label="Climb" value={f.climbMps} unit="m/s" />
          <Readout label="Turn time" value={f.turnTimeSec} unit="s" />
          <Readout label="Rip speed" value={f.structuralLimitKph} unit="km/h" />
          <Readout label="Ceiling" value={f.ceilingM} unit="m" />
        </div>
        <div className="seam my-3" />
        <div className="label-tag mb-1.5">Fixed armament</div>
        {armament.length > 0 ? (
          <ul className="space-y-1 text-sm">
            {armament.map((a, i) => (
              <li key={i} className="flex justify-between border-b border-hairline py-0.5">
                <span className="text-muted">{a.label}</span>
                <span className="font-data text-ink">×{a.count}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-faint">—</p>
        )}
      </div>
    </div>
  );
}
