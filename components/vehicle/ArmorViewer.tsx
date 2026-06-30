"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** A selectable incoming shell: its 0° penetration-vs-range points. */
export interface AmmoOption {
  id: string;
  name: string;
  type: string;
  pen: { rangeM: number; penMm: number }[];
}

interface ArmorViewerProps {
  hull?: { front?: string; side?: string; rear?: string };
  turret?: { front?: string; side?: string; rear?: string };
  /** Hint so casemate TDs / SPAA don't draw a rotating turret + barrel. */
  hasTurret?: boolean;
  /** Selectable incoming shells for the penetration test (optional). */
  ammo?: AmmoOption[];
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

/** Linear-interpolate a shell's penetration (mm) at a given range. */
function interpPen(points: { rangeM: number; penMm: number }[], r: number): number | null {
  if (!points.length) return null;
  const pts = [...points].sort((a, b) => a.rangeM - b.rangeM);
  if (r <= pts[0].rangeM) return pts[0].penMm;
  if (r >= pts[pts.length - 1].rangeM) return pts[pts.length - 1].penMm;
  for (let i = 1; i < pts.length; i++) {
    if (r <= pts[i].rangeM) {
      const a = pts[i - 1], b = pts[i];
      const t = (r - a.rangeM) / (b.rangeM - a.rangeM);
      return Math.round(a.penMm + t * (b.penMm - a.penMm));
    }
  }
  return pts[pts.length - 1].penMm;
}

interface BoxDims {
  w: number; // lateral (x)
  d: number; // length, front→back (z)
  h: number; // height (y)
}

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

/** A 3D box whose faces are tinted by armour thickness — or by a pen verdict when a shell is selected. */
function ArmorBox({
  dims,
  armor,
  facing,
  penMm = null,
  showLabels = true,
}: {
  dims: BoxDims;
  armor?: { front?: string; side?: string; rear?: string };
  facing: Face;
  penMm?: number | null;
  showLabels?: boolean;
}) {
  return (
    <>
      {BOX_FACES.map((f) => {
        const raw = f.zone ? armor?.[f.zone] : undefined;
        const v = num(raw);
        const testing = penMm != null && f.zone != null && v != null;
        const pens = testing ? penMm! >= v! : false;
        const color = testing
          ? pens
            ? "var(--alert)" // round defeats this face
            : "var(--ok)" // armour holds
          : f.zone
            ? armorColor(v)
            : "var(--hairline-strong)";
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
                {testing ? (pens ? " · PEN" : " · STOP") : ""}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}

const TEST_RANGES = [10, 500, 1000, 2000];

/**
 * Interactive 3D armour model. Drag to orbit (yaw + pitch); the slider and face
 * buttons also rotate it. Each face is tinted by armour thickness, the side
 * facing you is highlighted and read out. Pick an incoming shell to switch the
 * faces to a pen verdict (red = the round defeats that face, green = the armour
 * holds) at a chosen range — a nominal estimate against flat armour at 0°.
 */
export function ArmorViewer({ hull, turret, hasTurret = true, ammo, className }: ArmorViewerProps) {
  const [angle, setAngle] = useState(-28);
  const [pitch, setPitch] = useState(-24);
  const [dragging, setDragging] = useState(false);
  const [ammoId, setAmmoId] = useState("");
  const [rangeM, setRangeM] = useState(10);
  // We track only the LAST pointer position and apply each move incrementally,
  // so dragging past the pitch clamp never builds up a hidden "dead zone" you
  // have to unwind before the model responds (was very noticeable on touch).
  const drag = useRef<{ x: number; y: number } | null>(null);

  const HULL: BoxDims = { w: 120, d: 176, h: 40 };
  const TURRET: BoxDims = { w: 86, d: 78, h: 34 };
  const GUN: BoxDims = { w: 9, d: 70, h: 9 };

  const shell = ammo?.find((a) => a.id === ammoId);
  const shellPen = shell ? interpPen(shell.pen, rangeM) : null;

  const facing = facingFor(angle);
  const hullVal = hull?.[facing];
  const turretVal = turret?.[facing];
  const faceLabel = facing === "side" ? "Side" : facing === "front" ? "Front" : "Rear";
  const norm = ((angle % 360) + 360) % 360;

  const verdict = (armorStr?: string): "pen" | "stop" | null => {
    const v = num(armorStr);
    if (shellPen == null || v == null) return null;
    return shellPen >= v ? "pen" : "stop";
  };
  const hullV = verdict(hullVal);
  const turretV = verdict(turretVal);

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
    setAngle((a) => a + dx * 0.6);
    // Vertical drag tilts (grab-and-pull): drag down → roof, drag up → belly.
    // Clamp the live value each step so reversing direction responds instantly.
    setPitch((p) => Math.max(-88, Math.min(88, p - dy * 0.6)));
  };
  const onUp = () => {
    drag.current = null;
    setDragging(false);
  };

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">Armour · 3D view</span>
        <span className="font-data text-[0.65rem] text-faint">drag to orbit · ↕ tilt</span>
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
        aria-label={`3D armour model, facing ${faceLabel}${shell ? `, testing ${shell.name}` : ""}`}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[60%] h-10 w-56 -translate-x-1/2 rounded-[50%]"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.5), transparent 70%)" }}
        />
        <div
          className={cn(
            "absolute left-1/2 top-[46%]",
            !dragging && "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out",
          )}
          style={{ transformStyle: "preserve-3d", transform: `rotateX(${pitch}deg) rotateY(${angle}deg)` }}
        >
          <div style={{ position: "absolute", transformStyle: "preserve-3d" }}>
            <ArmorBox dims={HULL} armor={hull} facing={facing} penMm={shellPen} />
          </div>
          {hasTurret && (
            <div
              style={{
                position: "absolute",
                transformStyle: "preserve-3d",
                transform: `translateY(${-(HULL.h / 2 + TURRET.h / 2)}px) translateZ(10px)`,
              }}
            >
              <ArmorBox dims={TURRET} armor={turret} facing={facing} penMm={shellPen} />
              <div
                style={{
                  position: "absolute",
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${TURRET.d / 2 + GUN.d / 2}px)`,
                }}
              >
                <ArmorBox dims={GUN} armor={undefined} facing={facing} showLabels={false} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* readout */}
      <div className="mt-1 flex items-center justify-between gap-2 rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-2">
        <span className="label-tag">Facing · {faceLabel}</span>
        {shell ? (
          <span className="flex items-center gap-3 font-data text-sm">
            <span className="flex items-center gap-1.5">
              <span className={hullV === "pen" ? "text-alert" : hullV === "stop" ? "text-ok" : "text-faint"}>
                Hull {hullVal ?? "—"} {hullV === "pen" ? "→ penetrates" : hullV === "stop" ? "→ holds" : ""}
              </span>
            </span>
            {hasTurret && (
              <span className="flex items-center gap-1.5">
                <span className={turretV === "pen" ? "text-alert" : turretV === "stop" ? "text-ok" : "text-faint"}>
                  Turret {turretVal ?? "—"} {turretV === "pen" ? "→ penetrates" : turretV === "stop" ? "→ holds" : ""}
                </span>
              </span>
            )}
          </span>
        ) : (
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
        )}
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

      {/* incoming-round penetration test */}
      {ammo && ammo.length > 0 && (
        <div className="mt-3 rounded border border-hairline bg-[rgba(8,10,13,0.35)] p-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-tag">Incoming round</span>
            <select
              value={ammoId}
              onChange={(e) => setAmmoId(e.target.value)}
              aria-label="Select an incoming shell"
              className="min-w-0 flex-1 rounded border border-hairline bg-[rgba(8,10,13,0.6)] px-2 py-1 text-xs text-ink focus:outline-none"
            >
              <option value="">None — show armour thickness</option>
              {ammo.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          {shell && (
            <>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="label-tag">Range</span>
                {TEST_RANGES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRangeM(r)}
                    className={cn(
                      "rounded border px-2 py-0.5 text-xs",
                      rangeM === r ? "border-[color:var(--accent-dim)] text-accent" : "border-hairline text-muted hover:text-ink",
                    )}
                  >
                    {r >= 1000 ? `${r / 1000} km` : `${r} m`}
                  </button>
                ))}
                <span className="font-data ml-auto text-xs text-ink">
                  {shellPen != null ? `${shellPen} mm pen` : "—"}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-[0.7rem]">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: "var(--alert)" }} />
                  <span className="text-muted"><span className="text-ink">PEN</span> — round goes through</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: "var(--ok)" }} />
                  <span className="text-muted"><span className="text-ink">STOP</span> — armour holds</span>
                </span>
              </div>
              <p className="mt-2 text-[0.7rem] leading-relaxed text-faint">
                Nominal penetration vs flat armour at 0° — a quick estimate. Real penetration also depends on impact
                angle, armour slope, and shell type (HEAT/HESH/APHE behave differently).
              </p>
            </>
          )}
        </div>
      )}

      {/* full zone table */}
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {(["front", "side", "rear"] as Face[]).map((f) => {
          const vd = verdict(hull?.[f]);
          return (
            <div key={`h-${f}`} className={cn("flex items-center justify-between border-b border-hairline py-0.5", facing === f && "text-accent")}>
              <dt className="text-muted">Hull {f}</dt>
              <dd className={cn("font-data", vd === "pen" ? "text-alert" : vd === "stop" ? "text-ok" : hull?.[f] ? "text-ink" : "text-faint")}>
                {hull?.[f] ?? "—"}{vd === "pen" ? " PEN" : vd === "stop" ? " STOP" : ""}
              </dd>
            </div>
          );
        })}
        {hasTurret &&
          (["front", "side", "rear"] as Face[]).map((f) => {
            const vd = verdict(turret?.[f]);
            return (
              <div key={`t-${f}`} className={cn("flex items-center justify-between border-b border-hairline py-0.5", facing === f && "text-accent")}>
                <dt className="text-muted">Turret {f}</dt>
                <dd className={cn("font-data", vd === "pen" ? "text-alert" : vd === "stop" ? "text-ok" : turret?.[f] ? "text-ink" : "text-faint")}>
                  {turret?.[f] ?? "—"}{vd === "pen" ? " PEN" : vd === "stop" ? " STOP" : ""}
                </dd>
              </div>
            );
          })}
      </dl>
    </div>
  );
}
