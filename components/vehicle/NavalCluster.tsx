import { Readout } from "@/components/vehicle/Readout";
import type { NavalVehicle } from "@/lib/schema";

/**
 * The naval instrument cluster: a top-down ship silhouette highlighting the
 * citadel band, plus propulsion/hull readouts and the armament fit.
 */
export function NavalCluster({ vehicle }: { vehicle: NavalVehicle }) {
  const a = vehicle.armament;
  const armor = vehicle.armor;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="glass power-on p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="label-tag text-accent">Hull &amp; protection</span>
          <span className="font-data text-[0.65rem] text-faint">top-down</span>
        </div>
        <svg viewBox="0 0 360 120" className="w-full" role="img" aria-label="Top-down ship silhouette">
          {/* hull outline: pointed bow (left), square stern (right) */}
          <path
            d="M12,60 L70,34 L320,34 Q344,34 348,60 Q344,86 320,86 L70,86 Z"
            fill="rgba(125,145,155,0.10)"
            stroke="var(--hairline-strong)"
            strokeWidth="1.5"
          />
          {/* citadel band (machinery/magazines, amidships) */}
          <rect x="120" y="40" width="150" height="40" fill="rgba(245,165,36,0.16)" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" />
          <text x="195" y="63" textAnchor="middle" className="label-tag" fill="var(--accent)" fontSize="9">CITADEL</text>
          {/* belt line */}
          <line x1="70" y1="88" x2="320" y2="88" stroke="var(--ok)" strokeWidth="1.5" strokeOpacity="0.6" />
          <text x="70" y="102" className="label-tag" fill="var(--muted)" fontSize="8">BELT</text>
          {/* deck hatch marks */}
          <text x="320" y="26" textAnchor="end" className="label-tag" fill="var(--muted)" fontSize="8">DECK = top plating</text>
        </svg>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <Readout label="Belt" value={armor?.beltMm} unit="mm" />
          <Readout label="Deck" value={armor?.deckMm} unit="mm" />
          <Readout label="Citadel" value={armor?.citadel} />
        </div>
      </div>

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
