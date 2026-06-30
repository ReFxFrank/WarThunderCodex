"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface ArmorViewerProps {
  hull?: { front?: string; side?: string; rear?: string };
  turret?: { front?: string; side?: string; rear?: string };
  /** Hint so casemate TDs / SPAA don't draw a rotating turret + barrel. */
  hasTurret?: boolean;
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
  if (v >= 150) return "var(--ok)";
  if (v >= 80) return "var(--accent)";
  if (v >= 40) return "var(--caution)";
  return "var(--alert)";
}

/** Which face points at the viewer for a given yaw (0 = front toward viewer). */
function facingFor(angle: number): Face {
  const d = ((angle % 360) + 360) % 360;
  if (d < 45 || d >= 315) return "front";
  if (d < 135 || d >= 225) return "side";
  return "rear";
}

interface BoxDims {
  w: number; // lateral (x)
  d: number; // length, front→back (z)
  h: number; // height (y)
}

// Six faces of a box, each mapped to the armour zone it represents.
const BOX_FACES: {
  k: string;
  zone: Face | null;
  tf: (b: BoxDims) => string;
  size: (b: BoxDims) => [number, number];
}[] = [
  { k: "front", zone: "front", tf: (b) => `translateZ(${b.d / 2}px)`, size: (b) => [b.w, b.h] },
  { k: "rear", zone: "rear", tf: (b) => `rotateY(180deg) translateZ(${b.d / 2}px)`, size: (b) => [b.w, b.h] },
  { k: "right", zone: "side", tf: (b) => `rotateY(90deg) translateZ(${b.w / 2}px)`, size: (b) => [b.d, b.h] },
  { k: "left", zone: "side", tf: (b) => `rotateY(-90deg) translateZ(${b.w / 2}px)`, size: (b) => [b.d, b.h] },
  { k: "top", zone: null, tf: (b) => `rotateX(90deg) translateZ(${b.h / 2}px)`, size: (b) => [b.w, b.d] },
  { k: "bottom", zone: null, tf: (b) => `rotateX(-90deg) translateZ(${b.h / 2}px)`, size: (b) => [b.w, b.d] },
];

/** A 3D box whose faces are tinted by the armour zone they represent. */
function ArmorBox({
  dims,
  armor,
  facing,
  showLabels = true,
}: {
  dims: BoxDims;
  armor?: { front?: string; side?: string; rear?: string };
  facing: Face;
  showLabels?: boolean;
}) {
  return (
    <>
      {BOX_FACES.map((f) => {
        const raw = f.zone ? armor?.[f.zone] : undefined;
        const v = num(raw);
        const color = f.zone ? armorColor(v) : "var(--hairline-strong)";
        const active = f.zone === facing;
        const [fw, fh] = f.size(dims);
        return (
          <div
            key={f.k}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: fw,
              height: fh,
              transform: `translate(-50%, -50%) ${f.tf(dims)}`,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              background: `color-mix(in srgb, ${color} ${active ? 58 : 30}%, #0b0e11)`,
              border: `1px solid ${active ? color : "var(--hairline)"}`,
              boxShadow: active ? `inset 0 0 18px -4px ${color}` : "none",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: 4,
            }}
          >
            {showLabels && f.zone && (
              <span
                className="font-data"
                style={{
                  fontSize: 11,
                  color: v != null ? "var(--ink)" : "var(--faint)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                }}
              >
                {raw ?? "—"}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}

/**
 * Interactive 3D armour model. The tank is built from CSS-3D boxes (hull +
 * turret + barrel) you can spin by dragging, with the slider, or the face
 * buttons. Each face is tinted by its armour thickness, the side currently
 * facing you is highlighted and read out, and the exact figures sit in the zone
 * table below. Uses only the documented front/side/rear values (top/floor armour
 * isn't in the dataset, so those faces are drawn neutral).
 */
export function ArmorViewer({ hull, turret, hasTurret = true, className }: ArmorViewerProps) {
  const [angle, setAngle] = useState(-28);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; base: number } | null>(null);

  const HULL: BoxDims = { w: 120, d: 176, h: 40 };
  const TURRET: BoxDims = { w: 86, d: 78, h: 34 };
  const GUN: BoxDims = { w: 9, d: 70, h: 9 };

  const facing = facingFor(angle);
  const hullVal = hull?.[facing];
  const turretVal = turret?.[facing];
  const faceLabel = facing === "side" ? "Side" : facing === "front" ? "Front" : "Rear";
  const norm = ((angle % 360) + 360) % 360;

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, base: angle };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setAngle(drag.current.base + (e.clientX - drag.current.x) * 0.6);
  };
  const onUp = () => {
    drag.current = null;
    setDragging(false);
  };

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">Armour · 3D view</span>
        <span className="font-data text-[0.65rem] text-faint">drag to rotate</span>
      </div>

      {/* 3D stage */}
      <div
        className="relative w-full cursor-grab touch-none select-none active:cursor-grabbing"
        style={{ height: 280, perspective: 1100 }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        role="img"
        aria-label={`3D armour model, facing ${faceLabel}`}
      >
        {/* ground shadow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[60%] h-10 w-56 -translate-x-1/2 rounded-[50%]"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.5), transparent 70%)" }}
        />
        <div
          className={cn(
            "absolute left-1/2 top-[46%]",
            !dragging && "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out",
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(-24deg) rotateY(${angle}deg)`,
          }}
        >
          {/* hull */}
          <div style={{ position: "absolute", transformStyle: "preserve-3d" }}>
            <ArmorBox dims={HULL} armor={hull} facing={facing} />
          </div>

          {/* turret + barrel (skipped for casemate/open SPAA mounts) */}
          {hasTurret && (
            <div
              style={{
                position: "absolute",
                transformStyle: "preserve-3d",
                transform: `translateY(${-(HULL.h / 2 + TURRET.h / 2)}px) translateZ(10px)`,
              }}
            >
              <ArmorBox dims={TURRET} armor={turret} facing={facing} />
              {/* barrel, pointing forward (+Z) from the turret face */}
              <div
                style={{
                  position: "absolute",
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${TURRET.d / 2 + GUN.d / 2}px)`,
                }}
              >
                <ArmorBox
                  dims={GUN}
                  armor={undefined}
                  facing={facing}
                  showLabels={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* readout */}
      <div className="mt-1 flex items-center justify-between rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-2">
        <span className="label-tag">Facing · {faceLabel}</span>
        <span className="flex items-center gap-3 font-data text-sm">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: armorColor(num(hullVal)) }} />
            <span className={hullVal ? "text-ink" : "text-faint"}>Hull {hullVal ?? "—"}</span>
          </span>
          {hasTurret && (
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: armorColor(num(turretVal)) }} />
              <span className={turretVal ? "text-ink" : "text-faint"}>Turret {turretVal ?? "—"}</span>
            </span>
          )}
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
              Math.round(norm / 90) % 4 === a / 90
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
          value={Math.round(norm)}
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
        {hasTurret &&
          (["front", "side", "rear"] as Face[]).map((f) => (
            <div key={`t-${f}`} className={cn("flex items-center justify-between border-b border-hairline py-0.5", facing === f && "text-accent")}>
              <dt className="text-muted">Turret {f}</dt>
              <dd className={cn("font-data", turret?.[f] ? "text-ink" : "text-faint")}>{turret?.[f] ?? "—"}</dd>
            </div>
          ))}
      </dl>
    </div>
  );
}
