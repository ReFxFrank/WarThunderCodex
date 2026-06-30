import { TierBadge } from "@/components/ui/TierBadge";
import { SITE } from "@/lib/site";
import type { SourceRef } from "@/lib/schema";

/**
 * The cited-sources footer. Lists each source with its trust tier and retrieval
 * date, then the unofficial/not-affiliated line — so every page wears its
 * sourcing openly (§7).
 */
export function SourcesFooter({ sources }: { sources: SourceRef[] }) {
  return (
    <footer className="mt-10">
      <div className="seam mb-5" />
      <div className="label-tag mb-3">Sources</div>
      <ul className="space-y-2.5">
        {sources.map((s, i) => (
          <li key={`${s.url}-${i}`} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <TierBadge tier={s.tier} />
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline decoration-[color:var(--accent-dim)] underline-offset-2 hover:decoration-accent"
            >
              {s.label}
            </a>
            <span className="font-data text-[0.7rem] text-faint">retrieved {s.retrievedAt}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-faint">{SITE.disclaimer}</p>
    </footer>
  );
}
