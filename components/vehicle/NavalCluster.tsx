import { Readout } from "@/components/vehicle/Readout";
import { NavalArmorViewer } from "@/components/vehicle/NavalArmorViewer";
import type { NavalVehicle } from "@/lib/schema";

/**
 * The naval instrument cluster: a draggable 3D ship model with the hull tinted by
 * belt/deck armour, plus propulsion/hull readouts and the armament fit.
 */
export function NavalCluster({ vehicle }: { vehicle: NavalVehicle }) {
  const a = vehicle.armament;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <NavalArmorViewer vehicle={vehicle} className="power-on" />

      <div className="glass power-on p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="label-tag text-accent">Propulsion &amp; armament</span>
          <span className="font-data text-[0.65rem] text-faint">in-game</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Speed" value={vehicle.propulsion.maxKnots} unit="kn" />
          <Readout label="Displ." value={vehicle.hull.displacementTons} unit="t" />
          <Readout label="Length" value={vehicle.hull.lengthM} unit="m" />
          <Readout label="Crew" value={vehicle.hull.crew} />
        </div>
        <div className="seam my-3" />
        <dl className="space-y-1 text-sm">
          {[
            ["Main battery", a.mainBattery],
            ["Secondary", a.secondary],
            ["AA", a.aa],
            ["Torpedoes", a.torpedoes],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-3 border-b border-hairline py-0.5">
              <dt className="text-muted">{label}</dt>
              <dd className={value ? "text-ink" : "text-faint"}>{value ?? "—"}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
