import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusPill } from "@/components/ui/StatusPill";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About & sourcing policy" };

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="label-tag mb-2 text-accent">About</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">
          What this is, and how it&apos;s sourced
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {SITE.name} is an unofficial, research-driven knowledge base for War Thunder. It exists to
          explain the game clearly — the vehicles, the weapons, the ammunition, and the mechanics
          underneath — and to do it without inventing a single number. War Thunder is rebalanced
          every major patch, so the most useful thing a reference can offer is honesty about where
          its figures come from and when they were last checked.
        </p>
      </div>

      <div className="mt-10 max-w-3xl space-y-6">
        <section>
          <SectionHeading eyebrow="The rule" title="No guessed numbers">
            Every in-game value on a vehicle, weapon, or shell entry traces to a real source. If a
            value can&apos;t be verified, it is left blank and marked as needing verification — shown
            as a visible gap, never filled in with an estimate. A confident wrong stat is the worst
            possible outcome on a live, ever-changing game.
          </SectionHeading>
        </section>

        <section>
          <SectionHeading eyebrow="Separation" title="In-game values are not real-world history">
            War Thunder&apos;s stats are deliberately balanced and differ from historical reality.
            The Codex keeps the two strictly apart: an in-game stat block, labeled with the patch it
            reflects, sits separately from any optional real-world history written as prose. The two
            are never blended.
          </SectionHeading>
        </section>

        <section>
          <div className="label-tag mb-3 text-accent">Source tiers</div>
          <div className="space-y-3">
            <GlassCard className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <StatusPill tone="ok">Tier 1</StatusPill>
                <span className="font-display text-lg tracking-wide text-ink">Official — authoritative for in-game values</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                The official War Thunder wiki and the previous wiki, plus official devblogs, update
                notes, and changelogs. These are the only sources used for in-game stat fields. When
                two official sources disagree, the Codex prefers the more recent one, records both,
                and notes the conflict.
              </p>
            </GlassCard>
            <GlassCard className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <StatusPill tone="caution">Tier 2</StatusPill>
                <span className="font-display text-lg tracking-wide text-ink">Community meta — unofficial</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Player-sourced win rate, K/D, and efficiency aggregators. Useful for judging whether
                a vehicle is strong at its battle rating, but always presented as community-aggregated
                context — never as fact, and never without that caveat.
              </p>
            </GlassCard>
            <GlassCard className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <StatusPill tone="neutral">Tier 3</StatusPill>
                <span className="font-display text-lg tracking-wide text-ink">Real-world history only</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                General reference works, used solely for the optional historical prose section and
                never for an in-game stat field.
              </p>
            </GlassCard>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Originality" title="Facts reported, wording our own">
            Facts — an armor value, a shell type — are reported freely. The expression is not copied:
            every description, tactics writeup, and mechanics explanation is written originally.
            Where the Codex shows an image, it prefers a hand-rolled schematic over copyrighted art.
          </SectionHeading>
        </section>

        <section>
          <SectionHeading eyebrow="Freshness" title="Everything is date-stamped">
            Each entry records when it was last verified and the patch it reflects. Stat blocks show
            a small &ldquo;Verified &lt;date&gt; · Update &lt;name&gt;&rdquo; line so the age of the
            data is always visible.
          </SectionHeading>
        </section>

        <section>
          <GlassCard className="border-l-2 border-l-[color:var(--alert)] p-5">
            <div className="label-tag mb-2 text-alert">Disclaimer</div>
            <p className="text-sm leading-relaxed text-ink">{SITE.disclaimer}</p>
          </GlassCard>
        </section>
      </div>
    </Container>
  );
}
