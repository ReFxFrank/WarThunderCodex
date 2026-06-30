"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

/**
 * Interactive weapons browser. Guns are categorised by the DOMAIN they serve
 * (ground / aviation / helicopters / naval), derived from the classes of the
 * vehicles that actually mount them — a gun used by both a tank and a plane shows
 * in both. Within a domain you can further filter by gun type and search by name.
 */

export interface WeaponRow {
  id: string;
  name: string;
  type: string;
  caliberMm: number | null;
  fireRateRpm: number | null;
  usedByCount: number;
  domains: string[];
}

const TYPE_LABEL: Record<string, string> = {
  cannon: "Cannon",
  autocannon: "Autocannon",
  "machine-gun": "Machine gun",
  "naval-gun": "Naval gun",
  "rocket-pod": "Rocket pod",
};
const TYPE_ORDER = ["cannon", "autocannon", "machine-gun", "naval-gun", "rocket-pod"];

const DOMAINS = [
  { key: "ground", label: "Ground" },
  { key: "aviation", label: "Aviation" },
  { key: "helicopters", label: "Helicopters" },
  { key: "naval", label: "Naval" },
];

type Sort = "caliber-desc" | "caliber-asc" | "usage" | "name";

export function WeaponBrowser({ weapons }: { weapons: WeaponRow[] }) {
  const domainsPresent = useMemo(
    () => DOMAINS.filter((d) => weapons.some((w) => w.domains.includes(d.key))),
    [weapons],
  );
  const typesPresent = useMemo(
    () => TYPE_ORDER.filter((t) => weapons.some((w) => w.type === t)),
    [weapons],
  );

  const [q, setQ] = useState("");
  const [domain, setDomain] = useState<string>("all");
  const [pickedTypes, setPickedTypes] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<Sort>("caliber-desc");

  const toggleType = (val: string) => {
    setPickedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(val)) next.delete(val);
      else next.add(val);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const out = weapons.filter((w) => {
      if (q && !w.name.toLowerCase().includes(q.trim().toLowerCase())) return false;
      if (domain !== "all" && !w.domains.includes(domain)) return false;
      if (pickedTypes.size && !pickedTypes.has(w.type)) return false;
      return true;
    });
    out.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "usage") return b.usedByCount - a.usedByCount;
      const ca = a.caliberMm ?? -1;
      const cb = b.caliberMm ?? -1;
      return sort === "caliber-asc" ? ca - cb : cb - ca;
    });
    return out;
  }, [weapons, q, domain, pickedTypes, sort]);

  // Group the filtered set by gun type so each category reads as a section.
  const grouped = useMemo(() => {
    const byType = new Map<string, WeaponRow[]>();
    for (const w of filtered) {
      if (!byType.has(w.type)) byType.set(w.type, []);
      byType.get(w.type)!.push(w);
    }
    return TYPE_ORDER.filter((t) => byType.has(t)).map((t) => ({ type: t, rows: byType.get(t)! }));
  }, [filtered]);

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-3 py-1 text-xs transition-colors",
      active
        ? "border-[color:var(--accent-dim)] bg-[rgba(245,165,36,0.12)] text-accent"
        : "border-hairline text-muted hover:text-ink",
    );

  return (
    <div>
      <div className="glass mb-6 space-y-3 p-4">
        {/* Domain tabs — the primary category split */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="label-tag mr-1">Domain</span>
          <button type="button" onClick={() => setDomain("all")} className={chip(domain === "all")}>
            All
          </button>
          {domainsPresent.map((d) => (
            <button key={d.key} type="button" onClick={() => setDomain(d.key)} className={chip(domain === d.key)}>
              {d.label}
              <span className="ml-1.5 font-data text-[0.65rem] text-faint">
                {weapons.filter((w) => w.domains.includes(d.key)).length}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guns by name…"
            aria-label="Search weapons"
            className="flex-1 rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-[color:var(--accent-dim)] focus:outline-none"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort weapons"
            className="rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2 text-sm text-ink focus:outline-none"
          >
            <option value="caliber-desc">Caliber ↓</option>
            <option value="caliber-asc">Caliber ↑</option>
            <option value="usage">Most mounted</option>
            <option value="name">Name</option>
          </select>
        </div>

        {typesPresent.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="label-tag mr-1">Type</span>
            {typesPresent.map((t) => (
              <button key={t} type="button" onClick={() => toggleType(t)} className={chip(pickedTypes.has(t))}>
                {TYPE_LABEL[t] ?? t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mb-3 font-data text-[0.7rem] text-faint">
        {filtered.length} of {weapons.length} guns
      </div>

      {grouped.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted">No guns match these filters — clear a filter or widen the domain.</p>
      ) : (
        <div className="space-y-8">
          {grouped.map(({ type, rows }) => (
            <section key={type}>
              <div className="label-tag mb-3">
                {TYPE_LABEL[type] ?? type}
                <span className="ml-2 font-data text-[0.65rem] text-faint">{rows.length}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {rows.map((w) => (
                  <GlassCard key={w.id} as={Link} href={`/weapon/${w.id}`} interactive className="group p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold tracking-wide text-ink group-hover:text-accent">{w.name}</h3>
                      <span className="text-muted group-hover:text-accent">→</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-data text-xs text-muted">
                      {w.caliberMm != null && <span>{w.caliberMm} mm</span>}
                      {w.fireRateRpm != null && <span>{w.fireRateRpm} rpm</span>}
                      <span>
                        {w.usedByCount} vehicle{w.usedByCount === 1 ? "" : "s"}
                      </span>
                    </div>
                    {/* Domain badges so a gun's category is visible even in "All". */}
                    {w.domains.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {w.domains.map((d) => (
                          <span
                            key={d}
                            className="rounded border border-hairline px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wide text-faint"
                          >
                            {DOMAINS.find((x) => x.key === d)?.label ?? d}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
