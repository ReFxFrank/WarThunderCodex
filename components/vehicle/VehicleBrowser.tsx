"use client";

import { useMemo, useState } from "react";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { NATION_MAP } from "@/lib/nations";
import { primaryBR } from "@/lib/vehicle";
import { cn } from "@/lib/cn";
import type { Vehicle } from "@/lib/schema";

type Sort = "br-asc" | "br-desc" | "rank" | "name";
const RANK_ORDER = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

export function VehicleBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  const nations = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.nation))),
    [vehicles],
  );
  const subclasses = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.subclass))).sort(),
    [vehicles],
  );
  const brs = vehicles.map((v) => primaryBR(v.battleRatings)).filter((b): b is number => b !== null);
  const brFloor = brs.length ? Math.floor(Math.min(...brs)) : 1;
  const brCeil = brs.length ? Math.ceil(Math.max(...brs)) : 14;

  const [q, setQ] = useState("");
  const [pickedNations, setPickedNations] = useState<Set<string>>(new Set());
  const [subclass, setSubclass] = useState("all");
  const [acq, setAcq] = useState<Set<string>>(new Set());
  const [brMin, setBrMin] = useState(brFloor);
  const [brMax, setBrMax] = useState(brCeil);
  const [sort, setSort] = useState<Sort>("br-asc");

  const toggle = (set: Set<string>, val: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setter(next);
  };

  const filtered = useMemo(() => {
    const out = vehicles.filter((v) => {
      if (q && !`${v.name} ${v.subclass}`.toLowerCase().includes(q.trim().toLowerCase())) return false;
      if (pickedNations.size && !pickedNations.has(v.nation)) return false;
      if (subclass !== "all" && v.subclass !== subclass) return false;
      if (acq.size && !v.acquisition.some((a) => acq.has(a))) return false;
      const br = primaryBR(v.battleRatings);
      if (br !== null && (br < brMin || br > brMax)) return false;
      return true;
    });
    out.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "rank") return RANK_ORDER.indexOf(a.rank) - RANK_ORDER.indexOf(b.rank);
      const ba = primaryBR(a.battleRatings) ?? 0;
      const bb = primaryBR(b.battleRatings) ?? 0;
      return sort === "br-desc" ? bb - ba : ba - bb;
    });
    return out;
  }, [vehicles, q, pickedNations, subclass, acq, brMin, brMax, sort]);

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-2.5 py-1 text-xs transition-colors",
      active ? "border-[color:var(--accent-dim)] bg-[rgba(245,165,36,0.12)] text-accent" : "border-hairline text-muted hover:text-ink",
    );

  return (
    <div>
      <div className="glass mb-6 space-y-3 p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or type…"
            aria-label="Search vehicles"
            className="flex-1 rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-[color:var(--accent-dim)] focus:outline-none"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort"
            className="rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2 text-sm text-ink focus:outline-none"
          >
            <option value="br-asc">BR ↑</option>
            <option value="br-desc">BR ↓</option>
            <option value="rank">Rank</option>
            <option value="name">Name</option>
          </select>
        </div>

        {nations.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="label-tag mr-1">Nation</span>
            {nations.map((n) => (
              <button key={n} type="button" onClick={() => toggle(pickedNations, n, setPickedNations)} className={chip(pickedNations.has(n))}>
                {NATION_MAP[n]?.flag} {NATION_MAP[n]?.name ?? n}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {subclasses.length > 1 && (
            <label className="flex items-center gap-2 text-xs text-muted">
              <span className="label-tag">Type</span>
              <select value={subclass} onChange={(e) => setSubclass(e.target.value)} className="rounded border border-hairline bg-[rgba(8,10,13,0.6)] px-2 py-1 text-sm text-ink focus:outline-none">
                <option value="all">All</option>
                {subclasses.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
          )}
          <label className="flex items-center gap-2 text-xs text-muted">
            <span className="label-tag">BR</span>
            <input type="number" step="0.3" value={brMin} onChange={(e) => setBrMin(Number(e.target.value))} aria-label="Minimum BR" className="w-16 rounded border border-hairline bg-[rgba(8,10,13,0.6)] px-2 py-1 font-data text-sm text-ink focus:outline-none" />
            <span className="text-faint">to</span>
            <input type="number" step="0.3" value={brMax} onChange={(e) => setBrMax(Number(e.target.value))} aria-label="Maximum BR" className="w-16 rounded border border-hairline bg-[rgba(8,10,13,0.6)] px-2 py-1 font-data text-sm text-ink focus:outline-none" />
          </label>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="label-tag mr-1">Source</span>
            {["tech-tree", "premium", "squadron", "event"].map((a) => (
              <button key={a} type="button" onClick={() => toggle(acq, a, setAcq)} className={chip(acq.has(a))}>
                {a.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 font-data text-[0.7rem] text-faint">
        {filtered.length} of {vehicles.length} vehicles
      </div>

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted">
          No vehicles match these filters — widen the BR range or clear a nation.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      )}
    </div>
  );
}
