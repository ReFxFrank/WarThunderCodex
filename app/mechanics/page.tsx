import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/article/ArticleCard";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getAllArticles } from "@/lib/articles";
import { CATEGORY_META, MECHANICS_CATEGORY_ORDER } from "@/lib/article-categories";

export const metadata: Metadata = {
  title: "Mechanics",
  description:
    "How War Thunder actually resolves a fight — penetration, armor, the damage model, matchmaking, the economy, and more. Original prose, Tier-1 sourced, date-stamped.",
};

export default async function MechanicsIndex() {
  const articles = await getAllArticles();
  const backbone = articles.filter((a) => MECHANICS_CATEGORY_ORDER.includes(a.meta.category));

  if (backbone.length === 0) {
    return (
      <ComingSoon
        eyebrow="The knowledge backbone"
        title="Mechanics"
        intro="How the game actually resolves a fight — the conceptual core of the Codex. Articles are being researched and written now; each ships Tier-1 sourced and date-stamped."
        phase="Authoring in progress (Phase 2)"
        planned={[
          "Penetration: angle, normalization, ricochet, and overmatch",
          "Ammunition: kinetic vs chemical rounds and post-penetration effects",
          "The damage model: spall, fire, ammo detonation, overpressure",
          "Armor types: RHA, composite, ERA, NERA, spaced, and APS",
          "Battle Rating & matchmaking; the economy; flight model; missiles & radar; naval",
        ]}
      />
    );
  }

  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="label-tag mb-2 text-accent">The knowledge backbone</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Mechanics</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          How War Thunder actually resolves a fight. Every article is written in our own words,
          cited to official sources, and stamped with the date it was checked.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {MECHANICS_CATEGORY_ORDER.map((catId) => {
          const inCat = backbone.filter((a) => a.meta.category === catId);
          if (inCat.length === 0) return null;
          const cat = CATEGORY_META[catId];
          return (
            <section key={catId}>
              <SectionHeading eyebrow={cat.blurb} title={cat.label} />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {inCat.map((a) => (
                  <ArticleCard key={a.meta.slug} meta={a.meta} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
