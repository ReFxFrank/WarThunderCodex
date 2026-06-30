import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { NationChip } from "@/components/ui/NationChip";
import { ClassIcon } from "@/components/ui/ClassIcon";
import { AcquisitionPill } from "@/components/ui/StatusPill";
import { VehicleSilhouette } from "@/components/vehicle/VehicleSilhouette";
import { primaryBR } from "@/lib/vehicle";
import type { Vehicle } from "@/lib/schema";

function brColor(v: number | null): string {
  if (v === null) return "var(--faint)";
  if (v >= 10) return "var(--alert)";
  if (v >= 5) return "var(--accent)";
  return "var(--ok)";
}

const SHADOW = "0 1px 4px rgba(0,0,0,0.85)";

/**
 * A poster-style result card for the class browsers: the vehicle's real-world
 * photo fills the whole card with identity + BR overlaid; vehicles without a
 * photo yet fall back to the generated silhouette on a reticle grid. Credit
 * rides in the image alt/title (full visible credit on the detail page).
 */
export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const br = primaryBR(vehicle.battleRatings);
  const photo = vehicle.media.find((m) => m.type === "image");
  return (
    <GlassCard
      as={Link}
      href={`/vehicle/${vehicle.id}`}
      interactive
      className="group relative block aspect-[4/3] overflow-hidden"
    >
      {/* media layer */}
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export, credited real-world photo
        <img
          src={photo.src}
          alt={`${vehicle.name} — real-world example`}
          title={photo.credit}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.05]"
        />
      ) : (
        <div className="reticle-grid absolute inset-0 flex items-center justify-center bg-[rgba(8,10,13,0.4)]">
          <VehicleSilhouette
            vehicle={vehicle}
            className="h-24 max-w-[80%] opacity-70 transition-opacity group-hover:opacity-90"
          />
        </div>
      )}

      {/* legibility scrim: strong at the bottom for the title, light in the middle */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(6,8,10,0.94)] via-[rgba(6,8,10,0.30)] to-[rgba(6,8,10,0.5)]" />

      {/* top row: class + rank, BR badge */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
        <span className="flex items-center gap-1.5 text-muted" style={{ textShadow: SHADOW }}>
          <ClassIcon kind={vehicle.class} size={15} />
          <span className="label-tag">Rank {vehicle.rank}</span>
        </span>
        <span className="shrink-0 text-right">
          <span
            className="font-data block text-xl font-semibold leading-none"
            style={{ color: brColor(br), textShadow: SHADOW }}
          >
            {br === null ? "—" : br.toFixed(1)}
          </span>
          <span className="label-tag" style={{ textShadow: SHADOW }}>BR · RB</span>
        </span>
      </div>

      {/* bottom block: identity */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3
          className="font-display truncate text-lg font-semibold tracking-wide text-ink transition-colors group-hover:text-accent"
          style={{ textShadow: SHADOW }}
        >
          {vehicle.name}
        </h3>
        <p className="mb-2 text-xs text-muted" style={{ textShadow: SHADOW }}>{vehicle.subclass}</p>
        <div className="flex flex-wrap items-center gap-1.5">
          <NationChip nation={vehicle.nation} />
          {vehicle.acquisition
            .filter((a) => a !== "tech-tree")
            .map((a) => (
              <AcquisitionPill key={a} type={a} />
            ))}
        </div>
      </div>
    </GlassCard>
  );
}
