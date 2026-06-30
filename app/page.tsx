import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Gauge } from "@/components/ui/Gauge";
import { BrReticle } from "@/components/ui/BrReticle";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NationChip } from "@/components/ui/NationChip";
import { NATIONS } from "@/lib/nations";
import { PRIMARY_NAV, DATA_STATUS, SITE } from "@/lib/site";
import { getContentCounts } from "@/lib/content";
import { getAllArticles } from "@/lib/articles";

export default async function HomePage() {
  const counts = getContentCounts();
  const articleCount = (await getAllArticles()).length;
  return (
    <>
      {/* ----------------------------------------------------------- hero -- */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="reticle-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="power-on">
              <div className="label-tag mb-3 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok pulse-dot" aria-hidden />
                Unofficial field manual · accuracy first
              </div>
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-wide text-ink sm:text-7xl">
                WAR THUNDER
                <br />
                <span className="text-accent">CODEX</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Everything worth knowing about War Thunder — vehicles, weapons, ammunition,
                and the mechanics underneath — explained in plain language, with every in-game
                value traced to a source and stamped with the patch it came from.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/getting-started"
                  className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-[#16100a] shadow-[var(--glow-accent)] transition-transform hover:-translate-y-0.5"
                >
                  Start here →
                </Link>
                <Link
                  href="/mechanics"
                  className="rounded-md border border-hairline bg-[rgba(8,10,13,0.5)] px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-[color:var(--hairline-strong)] hover:text-accent"
                >
                  Read the mechanics
                </Link>
              </div>
            </div>

            {/* Instrument preview — sample readouts, explicitly NOT vehicle data. */}
            <GlassCard className="scan relative overflow-hidden p-5 power-on" strong>
              <div className="mb-4 flex items-center justify-between">
                <span className="label-tag text-accent">Instrument preview</span>
                <span className="font-data text-[0.65rem] text-faint">sample readouts</span>
              </div>
              <div className="grid grid-cols-3 items-end gap-2">
                <Gauge label="Top speed" value={55} unit="km/h" min={0} max={80} />
                <Gauge label="Reload" value={7.1} unit="sec" min={0} max={15} color="var(--ok)" />
                <Gauge label="Power/wt" value={18.4} unit="hp/t" min={0} max={30} />
              </div>
              <div className="seam my-4" />
              <div className="flex items-center justify-between gap-3">
                <BrReticle value={8.7} mode="RB" />
                <div className="flex-1 text-right">
                  <div className="label-tag mb-1">Unverified field</div>
                  <div className="font-data text-2xl text-faint">—</div>
                  <div className="text-[0.65rem] text-faint">needs verification</div>
                </div>
              </div>
              <p className="mt-4 text-[0.65rem] leading-relaxed text-faint">
                Illustrative only. These are placeholder numbers to show the instrument cluster —
                no real vehicle data ships until it is researched and sourced.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- data status -- */}
      <Container className="py-10">
        <GlassCard className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="label-tag mb-1.5">System status</div>
            <p className="text-sm text-muted">
              The Codex wears the age of its data on its sleeve. Current build stage and dataset
              coverage are shown here and on every stat block.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <Stat label="Vehicles" value={counts.vehicles} />
            <Stat label="Weapons" value={counts.weapons} />
            <Stat label="Articles" value={articleCount} />
          </div>
        </GlassCard>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <VerifiedStamp lastVerified={null} gameVersion={null} />
          <span className="font-data text-[0.7rem] text-faint">Build stage · {DATA_STATUS.phase}</span>
        </div>
      </Container>

      {/* ------------------------------------------------------ entry grid -- */}
      <Container className="py-8">
        <SectionHeading eyebrow="Browse the manual" title="Pick a section">
          The backbone first — modes, economy, and the mechanics that decide every fight — then
          the rosters of vehicles, weapons, and the rounds they fire.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRIMARY_NAV.filter((l) => l.href !== "/about").map((link) => (
            <GlassCard key={link.href} as={Link} href={link.href} interactive className="group block p-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold tracking-wide text-ink group-hover:text-accent">
                  {link.label}
                </span>
                <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">→</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{link.blurb}</p>
            </GlassCard>
          ))}
        </div>
      </Container>

      {/* --------------------------------------------------------- nations -- */}
      <Container className="py-8">
        <SectionHeading eyebrow="Ten playable nations" title="Choose a tree">
          Each nation hub will cover its identity, tree shape, and standout vehicles. (A Korean
          tree has been announced but is not yet in-game, so it is not listed here.)
        </SectionHeading>
        <div className="flex flex-wrap gap-2">
          {NATIONS.map((n) => (
            <NationChip key={n.id} nation={n.id} />
          ))}
        </div>
      </Container>

      {/* ----------------------------------------------------- accuracy CTA -- */}
      <Container className="py-12">
        <GlassCard className="grid gap-6 p-6 sm:grid-cols-[1.4fr_1fr] sm:p-8">
          <div>
            <div className="label-tag mb-2 text-accent">Why trust this</div>
            <h2 className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
              No guessed numbers. Ever.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              War Thunder is rebalanced every major patch, so a confident wrong stat is the worst
              outcome. Every figure here cites where it came from and when it was checked. In-game
              values stay strictly separate from real-world history, and anything that can&apos;t be
              confirmed is shown as a visible gap — not filled in.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block rounded-md border border-hairline px-4 py-2 text-sm font-semibold text-ink hover:border-[color:var(--hairline-strong)] hover:text-accent"
            >
              How the Codex is sourced →
            </Link>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              "Tier-1 official sources for in-game values",
              "Every entry date-stamped to a patch",
              "Unverified fields marked, never invented",
              "Original prose — facts reported, wording our own",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-1 text-ok" aria-hidden>
                  ✓
                </span>
                <span className="text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <p className="mt-4 text-center text-xs text-faint">{SITE.disclaimer}</p>
      </Container>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center sm:text-right">
      <div className="font-data text-2xl font-semibold text-ink">{value}</div>
      <div className="label-tag">{label}</div>
    </div>
  );
}
