"use client";

import { useMemo, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { anchorId } from "@/lib/anchor";
import type { GlossaryTerm } from "@/lib/schema";

/**
 * Client-side glossary browser: an instant filter over the term list, with each
 * entry anchored so in-article <Term> links can deep-link straight to it.
 */
export function GlossaryBrowser({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return terms;
    return terms.filter((t) => {
      const hay = [t.term, ...(t.aka ?? []), t.definition].join(" ").toLowerCase();
      return hay.includes(needle);
    });
  }, [q, terms]);

  return (
    <div>
      <div className="sticky top-14 z-10 -mx-4 bg-[rgba(11,14,17,0.82)] px-4 py-3 backdrop-blur-md">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter terms — try “APFSDS”, “uptier”, “energy”…"
          aria-label="Filter glossary terms"
          className="w-full rounded-md border border-hairline bg-[rgba(8,10,13,0.6)] px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-[color:var(--accent-dim)] focus:outline-none"
        />
        <div className="mt-1.5 font-data text-[0.7rem] text-faint">
          {filtered.length} of {terms.length} terms
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          No terms match “{q}”. Try a shorter query or a different acronym.
        </p>
      ) : (
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {filtered.map((t) => (
            <GlassCard key={t.term} as="div" id={anchorId(t.term)} className="scroll-mt-28 p-4">
              <dt className="flex flex-wrap items-baseline gap-2">
                <span className="font-display text-lg font-semibold tracking-wide text-accent">{t.term}</span>
                {t.aka && t.aka.length > 0 && (
                  <span className="text-xs text-faint">{t.aka.join(" · ")}</span>
                )}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{t.definition}</dd>
              {t.seeAlso && t.seeAlso.length > 0 && (
                <dd className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="label-tag">See also</span>
                  {t.seeAlso.map((s) => (
                    <a key={s} href={`#${anchorId(s)}`} className="text-muted underline decoration-hairline hover:text-accent">
                      {s}
                    </a>
                  ))}
                </dd>
              )}
            </GlassCard>
          ))}
        </dl>
      )}
    </div>
  );
}
