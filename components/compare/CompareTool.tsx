"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { NATION_MAP } from "@/lib/nations";
import { NationFlag } from "@/components/ui/NationFlag";
import { classLabel } from "@/lib/vehicle";
import { cn } from "@/lib/cn";
import type { Vehicle, VehicleClass } from "@/lib/schema";

interface Metric {
  label: string;
  get: (v: Vehicle) => number | string | null | undefined;
  unit?: string;
  /** true = higher is better, false = lower is better, undefined = neutral (no delta color). */
  higher?: boolean;
  string?: boolean;
}

const METRICS: Record<VehicleClass, Metric[]> = {
  ground: [
    { label: "BR (RB)", get: (v) => v.battleRatings.realistic },
    { label: "Top speed", unit: "km/h", higher: true, get: (v) => ("mobility" in v ? v.mobility.maxFwdKph : null) },
    { label: "Power/weight", unit: "hp/t", higher: true, get: (v) => ("mobility" in v ? v.mobility.powerToWeight : null) },
    { label: "Reload (aced)", unit: "s", higher: false, get: (v) => ("firepower" in v ? v.firepower.reloadAcedSec : null) },
    { label: "Gun depression", unit: "°", higher: false, get: (v) => ("firepower" in v ? v.firepower.vertGuidanceDeg?.[0] ?? null : null) },
    { label: "Ammo", unit: "rds", higher: true, get: (v) => ("firepower" in v ? v.firepower.ammoCapacity ?? null : null) },
    { label: "Crew", higher: true, get: (v) => ("armor" in v && v.class === "ground" ? v.armor.crewCount ?? null : null) },
    { label: "Weight", unit: "t", get: (v) => ("mobility" in v ? v.mobility.weightTons : null) },
    { label: "Hull front", string: true, get: (v) => (v.class === "ground" ? v.armor.hullMm?.front : null) },
    { label: "Turret front", string: true, get: (v) => (v.class === "ground" ? v.armor.turretMm?.front : null) },
  ],
  aviation: [
    { label: "BR (RB)", get: (v) => v.battleRatings.realistic },
    { label: "Max speed", unit: "km/h", higher: true, get: (v) => ("flight" in v ? v.flight.maxSpeedKph : null) },
    { label: "Climb", unit: "m/s", higher: true, get: (v) => ("flight" in v ? v.flight.climbMps : null) },
    { label: "Turn time", unit: "s", higher: false, get: (v) => ("flight" in v ? v.flight.turnTimeSec : null) },
    { label: "Rip speed", unit: "km/h", higher: true, get: (v) => ("flight" in v ? v.flight.structuralLimitKph : null) },
    { label: "Ceiling", unit: "m", higher: true, get: (v) => ("flight" in v ? v.flight.ceilingM : null) },
  ],
  naval: [
    { label: "BR (RB)", get: (v) => v.battleRatings.realistic },
    { label: "Speed", unit: "kn", higher: true, get: (v) => ("propulsion" in v ? v.propulsion.maxKnots : null) },
    { label: "Displacement", unit: "t", get: (v) => (v.class === "naval" ? v.hull.displacementTons ?? null : null) },
    { label: "Crew", higher: true, get: (v) => (v.class === "naval" ? v.hull.crew ?? null : null) },
    { label: "Belt", string: true, get: (v) => (v.class === "naval" ? v.armor?.beltMm : null) },
    { label: "Main battery", string: true, get: (v) => (v.class === "naval" ? v.armament.mainBattery : null) },
  ],
};

export function CompareTool({ vehicles }: { vehicles: Vehicle[] }) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string[]>([]);

  // Preselect from the ?add= query after mount. Done in an effect (not lazy
  // initial state) so the static-export HTML and first client render match.
  useEffect(() => {
    const add = searchParams.get("add");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing state from the URL on mount
    if (add && vehicles.some((v) => v.id === add)) setSelected((s) => (s.includes(add) ? s : [add]));
  }, [searchParams, vehicles]);

  const chosen = selected.map((id) => vehicles.find((v) => v.id === id)).filter(Boolean) as Vehicle[];
  const activeClass = chosen[0]?.class ?? null;

  const [q, setQ] = useState("");
  const candidates = useMemo(() => {
    return vehicles
      .filter((v) => !selected.includes(v.id))
      .filter((v) => (activeClass ? v.class === activeClass : true))
      .filter((v) => (q ? `${v.name} ${v.subclass}`.toLowerCase().includes(q.toLowerCase()) : true))
      .slice(0, 24);
  }, [vehicles, selected, activeClass, q]);

  const add = (id: string) => setSelected((s) => (s.length >= 3 || s.includes(id) ? s : [...s, id]));
  const remove = (id: string) => setSelected((s) => s.filter((x) => x !== id));

  return (
    <div>
      {/* Picker */}
      <div className="glass mb-6 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="label-tag">{activeClass ? `Comparing ${classLabel(activeClass)} · pick up to 3` : "Pick a vehicle to start"}</span>
          {selected.length > 0 && (
            <button onClick={() => setSelected([])} className="text-xs text-muted hover:text-accent">Clear</button>
          )}
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={activeClass ? `Search ${classLabel(activeClass).toLowerCase()} vehicles…` : "Search vehicles…"}
          className="mb-3 w-full rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-[color:var(--accent-dim)] focus:outline-none"
        />
        <div className="flex flex-wrap gap-1.5">
          {candidates.map((v) => (
            <button
              key={v.id}
              onClick={() => add(v.id)}
              disabled={selected.length >= 3}
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 text-xs text-muted hover:border-[color:var(--accent-dim)] hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              <NationFlag nation={v.nation} width={15} /> {v.name}
            </button>
          ))}
          {activeClass && candidates.length === 0 && <span className="text-xs text-faint">No more {classLabel(activeClass).toLowerCase()} vehicles to add.</span>}
        </div>
        {activeClass && (
          <p className="mt-2 text-[0.7rem] text-faint">
            Only same-class ({classLabel(activeClass).toLowerCase()}) vehicles can be added — cross-class comparisons aren&apos;t meaningful.
          </p>
        )}
      </div>

      {chosen.length < 2 ? (
        <p className="py-10 text-center text-sm text-muted">Pick at least two same-class vehicles to compare them side by side.</p>
      ) : (
        <ComparisonTable vehicles={chosen} onRemove={remove} />
      )}
    </div>
  );
}

function ComparisonTable({ vehicles, onRemove }: { vehicles: Vehicle[]; onRemove: (id: string) => void }) {
  const metrics = METRICS[vehicles[0].class];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr>
            <th className="w-40 p-2 text-left align-bottom label-tag">Metric</th>
            {vehicles.map((v) => (
              <th key={v.id} className="p-2 text-left align-bottom">
                <div className="flex items-start justify-between gap-2">
                  <Link href={`/vehicle/${v.id}`} className="font-display text-base font-semibold tracking-wide text-ink hover:text-accent">
                    {v.name}
                  </Link>
                  <button onClick={() => onRemove(v.id)} aria-label={`Remove ${v.name}`} className="text-faint hover:text-alert">✕</button>
                </div>
                <div className="text-xs text-muted">{NATION_MAP[v.nation]?.name} · {v.subclass}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map((m) => {
            const values = vehicles.map((v) => m.get(v));
            const nums = values.filter((x): x is number => typeof x === "number");
            const distinct = new Set(nums).size > 1;
            const best = m.higher === undefined ? null : m.higher ? Math.max(...nums) : Math.min(...nums);
            const worst = m.higher === undefined ? null : m.higher ? Math.min(...nums) : Math.max(...nums);
            return (
              <tr key={m.label} className="border-t border-hairline">
                <td className="p-2 text-sm text-muted">{m.label}</td>
                {values.map((val, i) => {
                  const has = val !== null && val !== undefined && val !== "";
                  const isBest = distinct && typeof val === "number" && val === best;
                  const isWorst = distinct && typeof val === "number" && val === worst;
                  return (
                    <td
                      key={i}
                      className={cn(
                        "p-2 font-data text-sm",
                        !has && "text-faint",
                        isBest && "text-ok",
                        isWorst && "text-alert",
                        has && !isBest && !isWorst && "text-ink",
                      )}
                    >
                      {has ? `${val}${m.unit && typeof val === "number" ? ` ${m.unit}` : ""}` : "—"}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
