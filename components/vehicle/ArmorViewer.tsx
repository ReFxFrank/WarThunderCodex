"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface ArmorViewerProps {
  hull?: { front?: string; side?: string; rear?: string };
  turret?: { front?: string; side?: string; rear?: string };
  className?: string;
}

type Face = "front" | "side" | "rear";

/** Leading numeric value from an armour string like "80 + 20 ERA" → 80. */
function num(s?: string): number | null {
  if (!s) return null;
  const m = String(s).match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
}

/** Colour an armour value on a thin→thick scale. */
function armorColor(v: number | null): string {
  if (v == null) return "var(--faint)";
  if (v >= 120) return "var(--ok)";
  if (v >= 60) return "var(--accent)";
  if (v >= 30) return "var(--caution)";
  return "var(--alert)";
}

/** Which face points at the viewer for a given yaw (0 = front toward viewer). */
function facingFor(angle: number): Face {
  const d = ((angle % 360) + 360) % 360;
  if (d < 45 || d >= 315) return "front";
  if (d < 135 || d >= 225) return "side";
  return "rear";
}

/**
 * Interactive, rotatable top-down armour viewer. Drag to spin the tank (or use
 * the slider / face buttons); the face pointing at the viewer is read out with
 * its exact hull + turret thickness. Edges are colour-coded by thickness so the
 * strong and weak sides are visible at a glance. Uses only the documented
 * front/side/rear values — top and floor armour aren't in the dataset.
 */
export function ArmorViewer({ hull, turret, className }: ArmorViewerProps) {
  const [angle, setAngle] = useState(0);
  const drag = useRef<{ x: number; base: number } | null>(null);

  const cx = 120;
  const cy = 104;
  const R = 84;

  const onDown = (e: React.PointerEvent<SVGSVGElement>) => {
    drag.current = { x: e.clientX, base: angle };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    setAngle(drag.current.base + (e.clientX - drag.current.x) * 0.8);
  };
  const onUp = () => {
    drag.current = null;
  };

  const facing = facingFor(angle);
  const hullVal = hull?.[facing];
  const turretVal = turret?.[facing];
  const faceLabel = facing === "side" ? "Side" : facing === "front" ? "Front" : "Rear";

  // Hull edges (top-down, front toward +y/bottom at angle 0).
  const edge = (key: Face, x1: number, y1: number, x2: number, y2: number, label: string, lx: number, ly: number) => {
    const v = num(hull?.[key]);
    const active = facing === key;
    return (
      <g key={`${key}-${x1}`}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={armorColor(v)} strokeWidth={active ? 7 : 5} strokeLinecap="round" opacity={active ? 1 : 0.8} />
        <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="8" className="font-data" fill={active ? "var(--ink)" : "var(--muted)"}>{label}</text>
      </g>
    );
  };

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">Armour · 360° view</span>
        <span className="font-data text-[0.65rem] text-faint">drag to rotate</span>
      </div>

      <svg
        viewBox="0 0 240 208"
        className="w-full cursor-grab touch-none select-none active:cursor-grabbing"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        role="img"
        aria-label={`Armour viewer, facing ${faceLabel}`}
      >
        {/* turntable */}
        <circle cx={cx} cy={cy} r={R} fill="rgba(8,10,13,0.5)" stroke="var(--hairline)" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r1 = i % 6 === 0 ? R - 7 : R - 4;
          return <line key={i} x1={cx + Math.cos(a) * r1} y1={cy + Math.sin(a) * r1} x2={cx + Math.cos(a) * R} y2={cy + Math.sin(a) * R} stroke="var(--hairline)" strokeWidth="1" />;
        })}

        {/* incoming-fire indicator at the viewer (bottom), fixed */}
        <g opacity="0.7">
          <polygon points={`${cx - 6},${cy + R + 14} ${cx + 6},${cy + R + 14} ${cx},${cy + R + 4}`} fill="var(--accent)" />
          <text x={cx} y={cy + R + 24} textAnchor="middle" fontSize="7" className="label-tag" fill="var(--muted)">VIEWER</text>
        </g>

        {/* rotating tank (front toward +y at angle 0) */}
        <g transform={`rotate(${angle} ${cx} ${cy})`}>
          {/* hull body */}
          <rect x={cx - 24} y={cy - 32} width="48" height="64" rx="3" fill="rgba(125,145,155,0.10)" stroke="var(--hairline)" strokeWidth="1" />
          {/* edges (front=bottom, rear=top, sides) */}
          {edge("rear", cx - 22, cy - 32, cx + 22, cy - 32, "R", cx, cy - 26)}
          {edge("side", cx - 24, cy - 30, cx - 24, cy + 30, "S", cx - 18, cy)}
          <line x1={cx + 24} y1={cy - 30} x2={cx + 24} y2={cy + 30} stroke={armorColor(num(hull?.side))} strokeWidth={5} strokeLinecap="round" opacity="0.8" />
          {edge("front", cx - 22, cy + 32, cx + 22, cy + 32, "F", cx, cy + 26)}
          {/* turret */}
          <circle cx={cx} cy={cy + 4} r="15" fill="rgba(125,145,155,0.16)" stroke={armorColor(num(turret?.[facing]))} strokeWidth="2" />
          {/* barrel toward front (+y) */}
          <rect x={cx - 1.6} y={cy + 16} width="3.2" height="26" rx="1" fill="rgba(125,145,155,0.5)" />
        </g>
      </svg>

      {/* readout */}
      <div className="mt-2 flex items-center justify-between rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-2">
        <span className="label-tag">Facing · {faceLabel}</span>
        <span className="flex items-center gap-3 font-data text-sm">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: armorColor(num(hullVal)) }} />
            <span className={hullVal ? "text-ink" : "text-faint"}>Hull {hullVal ?? "—"}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: armorColor(num(turretVal)) }} />
            <span className={turretVal ? "text-ink" : "text-faint"}>Turret {turretVal ?? "—"}</span>
          </span>
        </span>
      </div>

      {/* controls */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {([["Front", 0], ["Right", 90], ["Rear", 180], ["Left", 270]] as const).map(([label, a]) => (
          <button
            key={label}
            type="button"
            onClick={() => setAngle(a)}
            className={cn(
              "rounded border px-2 py-1 text-xs",
              facingFor(angle) === facingFor(a) && ((((angle % 360) + 360) % 360 === a) || a === 0)
                ? "border-[color:var(--accent-dim)] text-accent"
                : "border-hairline text-muted hover:text-ink",
            )}
          >
            {label}
          </button>
        ))}
        <input
          type="range"
          min={0}
          max={359}
          value={((angle % 360) + 360) % 360}
          onChange={(e) => setAngle(Number(e.target.value))}
          aria-label="Rotate armour view"
          className="ml-auto h-1 flex-1 min-w-24 accent-[color:var(--accent)]"
        />
      </div>

      {/* full zone table */}
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {(["front", "side", "rear"] as Face[]).map((f) => (
          <div key={`h-${f}`} className={cn("flex items-center justify-between border-b border-hairline py-0.5", facing === f && "text-accent")}>
            <dt className="text-muted">Hull {f}</dt>
            <dd className={cn("font-data", hull?.[f] ? "text-ink" : "text-faint")}>{hull?.[f] ?? "—"}</dd>
          </div>
        ))}
        {(["front", "side", "rear"] as Face[]).map((f) => (
          <div key={`t-${f}`} className={cn("flex items-center justify-between border-b border-hairline py-0.5", facing === f && "text-accent")}>
            <dt className="text-muted">Turret {f}</dt>
            <dd className={cn("font-data", turret?.[f] ? "text-ink" : "text-faint")}>{turret?.[f] ?? "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
