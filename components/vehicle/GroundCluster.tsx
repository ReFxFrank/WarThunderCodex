import { ArmorViewer } from "@/components/vehicle/ArmorViewer";
import { Gauge } from "@/components/ui/Gauge";
import { Readout } from "@/components/vehicle/Readout";
import type { GroundVehicle } from "@/lib/schema";

/**
 * The ground instrument cluster: the interactive armour schematic alongside
 * backlit gauges for mobility and firepower.
 */
export function GroundCluster({ vehicle }: { vehicle: GroundVehicle }) {
  const m = vehicle.mobility;
  const f = vehicle.firepower;
  const dep = f.vertGuidanceDeg?.[0] ?? null;
  const ele = f.vertGuidanceDeg?.[1] ?? null;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ArmorViewer hull={vehicle.armor.hullMm} turret={vehicle.armor.turretMm} className="power-on" />

      <div className="glass scan relative overflow-hidden p-4 power-on">
        <div className="mb-3 flex items-center justify-between">
          <span className="label-tag text-accent">Mobility &amp; firepower</span>
          <span className="font-data text-[0.65rem] text-faint">in-game</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Gauge label="Top speed" value={m.maxFwdKph} unit="km/h" min={0} max={90} />
          <Gauge label="Power/wt" value={m.powerToWeight} unit="hp/t" min={0} max={30} color="var(--ok)" />
          <Gauge label="Reload" value={f.reloadAcedSec ?? f.reloadBaseSec} unit="sec" min={0} max={18} color="var(--accent)" />
        </div>

        <div className="seam my-3" />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Reverse" value={m.maxRevKph} unit="km/h" unverified={vehicle.unverified.includes("mobility.maxRevKph")} />
          <Readout label="Depression" value={dep} unit="°" />
          <Readout label="Elevation" value={ele} unit="°" />
          <Readout label="Traverse" value={f.turretTraverseDegSec} unit="°/s" />
          <Readout label="Ammo" value={f.ammoCapacity} unit="rds" />
          <Readout label="Crew" value={vehicle.armor.crewCount} />
        </div>
      </div>
    </div>
  );
}
