import { cn } from "@/lib/cn";
import type { Vehicle } from "@/lib/schema";

/**
 * Original, generated vehicle silhouettes in the instrument-panel style. These
 * are stylised schematics — not photographs or scraped art — varied by class,
 * subclass, gun caliber, and a per-id seed so each entry reads distinctly while
 * staying clearly diagrammatic (§1: prefer hand-rolled schematics).
 */

function seed(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 1000;
  return h / 1000; // 0..1
}

const FILL = "rgba(125,145,155,0.18)";
const STROKE = "var(--hairline-strong)";
const ACCENT = "var(--accent)";

function groundKind(subclass: string) {
  const s = subclass.toLowerCase();
  if (s.includes("light")) return "light";
  if (s.includes("heavy")) return "heavy";
  if (s.includes("destroyer") || s.includes("tank destroyer")) return "td";
  if (s.includes("spaa") || s.includes("anti-air")) return "spaa";
  return "medium";
}

function Ground({ vehicle, caliberMm }: { vehicle: Vehicle; caliberMm?: number | null }) {
  const kind = groundKind(vehicle.subclass);
  const r = seed(vehicle.id);
  const weight = (vehicle.class === "ground" && vehicle.mobility.weightTons) || 25;
  // Hull length scales gently with weight; barrel with caliber.
  const hullLen = 120 + Math.min(40, (weight - 10) * 1.4);
  const x0 = (200 - hullLen) / 2;
  const x1 = x0 + hullLen;
  const hullTop = kind === "heavy" ? 56 : kind === "light" ? 64 : 60;
  const glacis = 14 + r * 10; // sloped front length
  const cal = caliberMm ?? (kind === "heavy" ? 100 : kind === "light" ? 57 : 76);
  const barrelLen = 26 + Math.min(46, cal * 0.42);
  const barrelY = kind === "td" ? hullTop + 4 : hullTop - (kind === "heavy" ? 16 : 13);

  // Turret / casemate
  const turretW = kind === "heavy" ? 56 : 46;
  const turretCx = x0 + hullLen * (kind === "td" ? 0.5 : 0.46);

  return (
    <>
      {/* hull: sloped glacis + body */}
      <polygon
        points={`${x0},90 ${x0 + glacis},${hullTop} ${x1 - 8},${hullTop} ${x1},${hullTop + 8} ${x1},90`}
        fill={FILL}
        stroke={STROKE}
        strokeWidth="1.5"
      />
      {/* tracks */}
      <rect x={x0 - 4} y="90" width={hullLen + 8} height="14" rx="7" fill="rgba(8,10,13,0.7)" stroke={STROKE} strokeWidth="1.2" />
      {Array.from({ length: kind === "light" ? 5 : kind === "heavy" ? 8 : 6 }).map((_, i, a) => {
        const cx = x0 + 4 + (i * (hullLen - 8)) / (a.length - 1);
        return <circle key={i} cx={cx} cy="97" r="4.5" fill="none" stroke={STROKE} strokeWidth="1.2" />;
      })}

      {kind === "td" ? (
        // casemate wedge + fixed gun
        <>
          <polygon
            points={`${turretCx - 30},${hullTop} ${turretCx - 14},${hullTop - 18} ${turretCx + 26},${hullTop - 18} ${turretCx + 30},${hullTop}`}
            fill={FILL}
            stroke={STROKE}
            strokeWidth="1.5"
          />
          <rect x={x0 - barrelLen} y={barrelY} width={barrelLen} height="4" fill={FILL} stroke={STROKE} strokeWidth="1" />
        </>
      ) : kind === "spaa" ? (
        <>
          <rect x={turretCx - 18} y={hullTop - 14} width="36" height="14" rx="2" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
          {/* twin elevated barrels */}
          <line x1={turretCx} y1={hullTop - 14} x2={turretCx - 30} y2={hullTop - 34} stroke={ACCENT} strokeWidth="1.6" />
          <line x1={turretCx + 3} y1={hullTop - 14} x2={turretCx - 27} y2={hullTop - 34} stroke={ACCENT} strokeWidth="1.6" />
        </>
      ) : (
        // turret (trapezoid) + barrel
        <>
          <polygon
            points={`${turretCx - turretW / 2},${hullTop} ${turretCx - turretW / 2 + 8},${hullTop - 20} ${turretCx + turretW / 2 - 6},${hullTop - 20} ${turretCx + turretW / 2},${hullTop}`}
            fill={FILL}
            stroke={STROKE}
            strokeWidth="1.5"
          />
          {/* mantlet */}
          <rect x={turretCx - turretW / 2 - 4} y={barrelY - 3} width="8" height="12" rx="2" fill={FILL} stroke={STROKE} strokeWidth="1" />
          {/* barrel pointing left */}
          <rect x={turretCx - turretW / 2 - barrelLen} y={barrelY} width={barrelLen} height={kind === "heavy" ? 4.5 : 3.5} fill={FILL} stroke={STROKE} strokeWidth="1" />
          <rect x={turretCx - turretW / 2 - barrelLen} y={barrelY - 0.5} width="4" height={kind === "heavy" ? 5.5 : 4.5} fill={ACCENT} opacity="0.8" />
        </>
      )}
    </>
  );
}

function Aviation({ vehicle }: { vehicle: Vehicle }) {
  const r = seed(vehicle.id);
  const twin = vehicle.class === "aviation" && (vehicle.flight.engineCount ?? 1) > 1;
  const s = vehicle.subclass.toLowerCase();
  const bomber = s.includes("bomber");
  const span = bomber ? 150 : 120 + r * 16;
  const cx = 100;
  return (
    <>
      {/* fuselage */}
      <path d={`M${cx - 70},58 Q${cx - 76},54 ${cx - 70},50 L${cx + 60},50 Q${cx + 78},54 ${cx + 60},58 Z`} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
      {/* wings */}
      <polygon points={`${cx - 6},52 ${cx + 14},52 ${cx + 2},${52 - span / 2} ${cx - 12},${52 - span / 2}`} fill={FILL} stroke={STROKE} strokeWidth="1.3" />
      <polygon points={`${cx - 6},56 ${cx + 14},56 ${cx + 2},${56 + span / 2} ${cx - 12},${56 + span / 2}`} fill={FILL} stroke={STROKE} strokeWidth="1.3" />
      {/* tail */}
      <polygon points={`${cx + 50},54 ${cx + 64},54 ${cx + 60},38 ${cx + 54},38`} fill={FILL} stroke={STROKE} strokeWidth="1.2" />
      {/* nose accent (prop hub or intake) */}
      <circle cx={cx - 72} cy="54" r="3" fill={ACCENT} opacity="0.85" />
      {twin && (
        <>
          <circle cx={cx - 6} cy={52 - span / 4} r="3" fill="none" stroke={STROKE} strokeWidth="1.2" />
          <circle cx={cx - 6} cy={56 + span / 4} r="3" fill="none" stroke={STROKE} strokeWidth="1.2" />
        </>
      )}
    </>
  );
}

function Naval() {
  const len = 180;
  const x0 = (200 - len) / 2;
  return (
    <>
      <path
        d={`M${x0},58 L${x0 + 30},48 L${x0 + len - 14},48 Q${x0 + len},48 ${x0 + len},58 Q${x0 + len},66 ${x0 + len - 14},66 L${x0 + 30},66 Z`}
        fill={FILL}
        stroke={STROKE}
        strokeWidth="1.5"
      />
      {/* superstructure */}
      <rect x={x0 + 70} y="38" width="36" height="10" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
      <rect x={x0 + 84} y="30" width="10" height="10" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
      {/* gun turrets */}
      {[x0 + 48, x0 + 120, x0 + 145].map((cx, i) => (
        <rect key={i} x={cx} y="44" width="12" height="6" rx="1" fill={FILL} stroke={ACCENT} strokeWidth="1" />
      ))}
      {/* waterline accent */}
      <line x1={x0} y1="66" x2={x0 + len} y2="66" stroke={ACCENT} strokeWidth="1" opacity="0.5" />
    </>
  );
}

export function VehicleSilhouette({
  vehicle,
  caliberMm,
  className,
}: {
  vehicle: Vehicle;
  caliberMm?: number | null;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 110"
      className={cn("w-full", className)}
      role="img"
      aria-label={`${vehicle.name} silhouette (stylised schematic)`}
      preserveAspectRatio="xMidYMid meet"
    >
      {vehicle.class === "ground" && <Ground vehicle={vehicle} caliberMm={caliberMm} />}
      {vehicle.class === "aviation" && <Aviation vehicle={vehicle} />}
      {vehicle.class === "naval" && <Naval />}
    </svg>
  );
}
