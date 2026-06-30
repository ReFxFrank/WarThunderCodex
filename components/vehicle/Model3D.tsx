"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A small CSS-3D box-model viewer shared by the naval armour view and the
 * aircraft / helicopter model views. You feed it a list of boxes (each with a
 * size + offset, and either a flat model colour or per-face armour strings) and
 * it renders a draggable, orbitable scene. Drag to yaw + pitch; the face buttons
 * and slider also rotate it. Pitch is clamped and each drag step is applied
 * incrementally so reversing direction at the extremes responds instantly.
 */

type Face = "front" | "rear" | "side" | "top" | "bottom";

export interface ModelBox {
  /** lateral (x), length front→back (z), height (y), in px */
  w: number;
  d: number;
  h: number;
  /** centre offset from the scene origin, in px (negative y = up) */
  x?: number;
  y?: number;
  z?: number;
  /** Flat model colour (used when this box has no per-face armour). */
  color?: string;
  /** Per-face armour thickness strings — colours the faces by thickness. */
  armor?: Partial<Record<"front" | "rear" | "side" | "top", string>>;
  /** Show the armour value text on each armoured face. */
  showArmorLabels?: boolean;
  /** Slightly translucent (canopies, rotor discs). */
  glassy?: boolean;
}

/** Leading numeric value from an armour string like "100 mm" or "50 / 60°" → 100. */
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

const FACES: { k: string; zone: Face; tf: (b: ModelBox) => string; size: (b: ModelBox) => [number, number] }[] = [
  { k: "front", zone: "front", tf: (b) => `translateZ(${b.d / 2}px)`, size: (b) => [b.w, b.h] },
  { k: "rear", zone: "rear", tf: (b) => `rotateY(180deg) translateZ(${b.d / 2}px)`, size: (b) => [b.w, b.h] },
  { k: "right", zone: "side", tf: (b) => `rotateY(90deg) translateZ(${b.w / 2}px)`, size: (b) => [b.d, b.h] },
  { k: "left", zone: "side", tf: (b) => `rotateY(-90deg) translateZ(${b.w / 2}px)`, size: (b) => [b.d, b.h] },
  { k: "top", zone: "top", tf: (b) => `rotateX(90deg) translateZ(${b.h / 2}px)`, size: (b) => [b.w, b.d] },
  { k: "bottom", zone: "bottom", tf: (b) => `rotateX(-90deg) translateZ(${b.h / 2}px)`, size: (b) => [b.w, b.d] },
];

// Directional lighting for flat model parts: top lit, undersides dark.
const SHADE: Record<string, string> = {
  top: "78%, #ffffff 22%",
  front: "92%, #05080a 8%",
  rear: "58%, #05080a 42%",
  right: "76%, #05080a 24%",
  left: "70%, #05080a 30%",
  bottom: "42%, #05080a 58%",
};

function Box({ box }: { box: ModelBox }) {
  return (
    <div
      style={{
        position: "absolute",
        transformStyle: "preserve-3d",
        transform: `translate3d(${box.x ?? 0}px, ${box.y ?? 0}px, ${box.z ?? 0}px)`,
      }}
    >
      {FACES.map((f) => {
        const armorStr = box.armor ? box.armor[f.zone as "front" | "rear" | "side" | "top"] : undefined;
        const isArmor = !!box.armor && (f.zone === "front" || f.zone === "rear" || f.zone === "side" || f.zone === "top");
        const v = num(armorStr);
        let bg: string;
        let border: string;
        if (isArmor) {
          const col = armorColor(v);
          bg = `color-mix(in srgb, ${col} 40%, #0b0e11)`;
          border = "var(--hairline)";
        } else {
          const base = box.color ?? "var(--hairline-strong)";
          bg = `color-mix(in srgb, ${base} ${SHADE[f.k] ?? "80%, #05080a 20%"})`;
          border = "color-mix(in srgb, #000 35%, transparent)";
        }
        const [fw, fh] = f.size(box);
        return (
          <div
            key={f.k}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: fw,
              height: fh,
              transform: `translate(-50%, -50%) ${f.tf(box)}`,
              backfaceVisibility: "hidden",
              background: bg,
              opacity: box.glassy ? 0.55 : 1,
              border: `1px solid ${border}`,
              display: isArmor && box.showArmorLabels ? "flex" : undefined,
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: 3,
            }}
          >
            {isArmor && box.showArmorLabels && (
              <span
                className="font-data"
                style={{ fontSize: 10, color: v != null ? "var(--ink)" : "var(--faint)", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
              >
                {armorStr ?? "—"}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Model3D({
  boxes,
  label,
  hint = "drag to orbit · ↕ tilt",
  ariaLabel,
  height = 280,
  initialYaw = -28,
  initialPitch = -20,
  shadowW = 240,
  children,
  className,
}: {
  boxes: ModelBox[];
  label: string;
  hint?: string;
  ariaLabel: string;
  height?: number;
  initialYaw?: number;
  initialPitch?: number;
  shadowW?: number;
  children?: ReactNode;
  className?: string;
}) {
  const [angle, setAngle] = useState(initialYaw);
  const [pitch, setPitch] = useState(initialPitch);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const norm = ((angle % 360) + 360) % 360;

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
    setPitch((p) => Math.max(-88, Math.min(88, p - dy * 0.6)));
  };
  const onUp = () => {
    drag.current = null;
    setDragging(false);
  };

  return (
    <div className={cn("glass overflow-hidden p-4", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="label-tag text-accent">{label}</span>
        <span className="font-data text-[0.65rem] text-faint">{hint}</span>
      </div>

      <div
        className="relative w-full cursor-grab touch-none select-none active:cursor-grabbing"
        style={{ height, perspective: 1200 }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        role="img"
        aria-label={ariaLabel}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[62%] h-10 -translate-x-1/2 rounded-[50%]"
          style={{ width: shadowW, background: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.5), transparent 70%)" }}
        />
        <div
          className={cn(
            "absolute left-1/2 top-1/2",
            !dragging && "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out",
          )}
          style={{ transformStyle: "preserve-3d", transform: `rotateX(${pitch}deg) rotateY(${angle}deg)` }}
        >
          {boxes.map((b, i) => (
            <Box key={i} box={b} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {([["Front", 0], ["Right", 90], ["Rear", 180], ["Left", 270]] as const).map(([lab, a]) => (
          <button
            key={lab}
            type="button"
            onClick={() => setAngle(a)}
            className={cn(
              "rounded border px-2 py-1 text-xs",
              Math.round(norm / 90) % 4 === a / 90
                ? "border-[color:var(--accent-dim)] text-accent"
                : "border-hairline text-muted hover:text-ink",
            )}
          >
            {lab}
          </button>
        ))}
        <input
          type="range"
          min={0}
          max={359}
          value={Math.round(norm)}
          onChange={(e) => setAngle(Number(e.target.value))}
          aria-label="Rotate model"
          className="ml-auto h-1 flex-1 min-w-24 accent-[color:var(--accent)]"
        />
      </div>

      {children}
    </div>
  );
}
