import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { NationChip } from "@/components/ui/NationChip";
import { ClassIcon } from "@/components/ui/ClassIcon";
import { AcquisitionPill } from "@/components/ui/StatusPill";
import { VehicleSilhouette } from "@/components/vehicle/VehicleSilhouette";
import { primaryBR } from "@/lib/vehicle";
import { cn } from "@/lib/cn";
import type { Vehicle } from "@/lib/schema";

function brColor(v: number | null): string {
  if (v === null) return "var(--faint)";
  if (v >= 10) return "var(--alert)";
  if (v >= 5) return "var(--accent)";
  return "var(--ok)";
}

/** A result card for the class browsers: identity at a glance + a BR badge. */
export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const br = primaryBR(vehicle.battleRatings);
  return (
    <GlassCard as={Link} href={`/vehicle/${vehicle.id}`} interactive className="group flex flex-col overflow-hidden p-4">
      <div className="reticle-grid -mx-4 -mt-4 mb-3 flex h-20 items-center justify-center border-b border-hairline bg-[rgba(8,10,13,0.4)] px-6">
        <VehicleSilhouette vehicle={vehicle} className="h-16 opacity-75 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-muted">
            <ClassIcon kind={vehicle.class} size={16} />
            <span className="label-tag">Rank {vehicle.rank}</span>
          </div>
          <h3 className="font-display truncate text-lg font-semibold tracking-wide text-ink group-hover:text-accent">
            {vehicle.name}
          </h3>
          <p className="text-xs text-muted">{vehicle.subclass}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className={cn("font-data text-xl font-semibold")} style={{ color: brColor(br) }}>
            {br === null ? "—" : br.toFixed(1)}
          </div>
          <div className="label-tag">BR · RB</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <NationChip nation={vehicle.nation} />
        {vehicle.acquisition
          .filter((a) => a !== "tech-tree")
          .map((a) => (
            <AcquisitionPill key={a} type={a} />
          ))}
      </div>
    </GlassCard>
  );
}
