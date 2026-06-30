import { Readout } from "@/components/vehicle/Readout";
import { AircraftModel } from "@/components/vehicle/AircraftModel";
import type { AviationVehicle } from "@/lib/schema";

/**
 * The aviation instrument cluster: a draggable 3D airframe model alongside the
 * exact sourced flight readouts and the fixed armament.
 */
export function AviationCluster({
  vehicle,
  armament,
}: {
  vehicle: AviationVehicle;
  armament: { label: string; count: number }[];
}) {
  const f = vehicle.flight;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <AircraftModel vehicle={vehicle} className="power-on" />

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
