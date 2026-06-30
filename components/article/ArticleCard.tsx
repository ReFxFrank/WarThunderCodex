import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import type { Article } from "@/lib/schema";

export function ArticleCard({ meta }: { meta: Article }) {
  return (
    <GlassCard as={Link} href={`/mechanics/${meta.slug}`} interactive className="group flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-tight tracking-wide text-ink group-hover:text-accent">
          {meta.title}
        </h3>
        <span className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
          →
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{meta.summary}</p>
      <div className="mt-3">
        <VerifiedStamp lastVerified={meta.lastUpdated} gameVersion={null} />
      </div>
    </GlassCard>
  );
}
