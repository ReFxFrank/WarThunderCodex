"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type ZoneId = "hull-front" | "hull-side" | "hull-rear" | "turret-front" | "turret-side" | "turret-rear";

interface ZoneDef {
  id: ZoneId;
  label: string;
  points: string;
  value?: string;
}

interface ArmorSchematicProps {
  hull?: { front?: string; side?: string; rear?: string };
  turret?: { front?: string; side?: string; rear?: string };
  className?: string;
}

/**
 * An interactive side-profile armour schematic. Hovering or focusing a zone reads
 * out its thickness. Values are shown verbatim (they can be strings like
 * "80 + 20 ERA"); a zone with no sourced value reads as "—" / unverified.
 *
 * The profile is a stylised instrument diagram, not a physics model: front maps
 * to the glacis (left), side to the flank (centre), rear to the back (right).
 */
export function ArmorSchematic({ hull, turret, className }: ArmorSchematicProps) {
  const zones: ZoneDef[] = [
    { id: "hull-front", label: "Hull front", points: "30,150 84,112 116,112 116,150", value: hull?.front },
    { id: "hull-side", label: "Hull side", points: "116,112 226,112 226,150 116,150", value: hull?.side },
    { id: "hull-rear", label: "Hull rear", points: "226,112 300,112 300,150 226,150", value: hull?.rear },
    { id: "turret-front", label: "Turret front", points: "122,112 150,80 168,80 158,112", value: turret?.front },
    { id: "turret-side", label: "Turret side", points: "168,80 210,80 210,112 158,112", value: turret?.side },
    { id: "turret-rear", label: "Turret rear", points: "210,80 236,80 240,112 210,112", value: turret?.rear },
  ];

  const [active, setActive] = useState<ZoneId | null>(null);
  const activeZone = zones.find((z) => z.id === active) ?? null;

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">Armour schematic</span>
        <span className="font-data text-[0.65rem] text-faint">hover a zone</span>
      </div>

      <svg viewBox="0 0 330 200" className="w-full" role="img" aria-label="Interactive armour schematic">
        {/* ground line */}
        <line x1="14" y1="172" x2="316" y2="172" stroke="var(--hairline)" strokeWidth="1" />
        {/* gun barrel */}
        <rect x="44" y="92" width="80" height="6" rx="2" fill="var(--hairline-strong)" />
        {/* tracks + wheels */}
        <rect x="28" y="150" width="276" height="16" rx="8" fill="rgba(8,10,13,0.7)" stroke="var(--hairline)" />
        {[52, 86, 120, 154, 188, 222, 256, 286].map((cx) => (
          <circle key={cx} cx={cx} cy={158} r={6} fill="none" stroke="var(--hairline-strong)" strokeWidth="1.5" />
        ))}

        {zones.map((z) => {
          const isActive = active === z.id;
          const verified = Boolean(z.value);
          return (
            <polygon
              key={z.id}
              points={z.points}
              tabIndex={0}
              role="button"
              aria-label={`${z.label}: ${z.value ?? "unverified"}`}
              onMouseEnter={() => setActive(z.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(z.id)}
              onBlur={() => setActive(null)}
              className="cursor-pointer outline-none transition-colors"
              style={{
                fill: isActive
                  ? "rgba(245,165,36,0.22)"
                  : verified
                    ? "rgba(125,145,155,0.12)"
                    : "rgba(125,145,155,0.04)",
                stroke: isActive ? "var(--accent)" : verified ? "var(--hairline-strong)" : "var(--hairline)",
                strokeWidth: isActive ? 1.8 : 1,
                strokeDasharray: verified ? undefined : "3 3",
              }}
            />
          );
        })}
      </svg>

      {/* readout */}
      <div className="mt-2 flex items-center justify-between rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-2">
        <span className="label-tag">{activeZone ? activeZone.label : "Select a zone"}</span>
        <span className={cn("font-data text-sm", activeZone?.value ? "text-ink" : "text-faint")}>
          {activeZone ? (activeZone.value ?? "— needs verification") : "—"}
          {activeZone?.value ? " mm" : ""}
        </span>
      </div>

      {/* full zone table (always visible, also the a11y fallback) */}
      <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {zones.map((z) => (
          <div
            key={z.id}
            className={cn("flex items-center justify-between border-b border-hairline py-0.5", active === z.id && "text-accent")}
          >
            <dt className="text-muted">{z.label}</dt>
            <dd className={cn("font-data", z.value ? "text-ink" : "text-faint")}>{z.value ?? "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
