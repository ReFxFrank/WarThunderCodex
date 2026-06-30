import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/article/ArticleCard";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "The shortest route from install to holding your own — modes, controls, your first nation, and the early grind.",
};

export default async function GettingStartedIndex() {
  const articles = await getArticlesByCategory("getting-started");

  if (articles.length === 0) {
    return (
      <ComingSoon
        eyebrow="New-player path"
        title="Getting started"
        intro="The shortest route from install to holding your own. Being written now — each guide ships sourced and date-stamped."
        phase="Authoring in progress (Phase 2)"
        planned={[
          "Game modes explained: Arcade, Realistic, and Simulator",
          "Control basics for ground, air, and naval, and what to rebind first",
          "Choosing a first nation and the early grind",
          "Common new-player mistakes and how to avoid them",
        ]}
      />
    );
  }

  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="label-tag mb-2 text-accent">New-player path</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">
          Getting started
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The shortest route from install to holding your own — which mode to learn first, how the
          controls map, picking a starter nation, and what the early grind actually rewards.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.meta.slug} meta={a.meta} />
        ))}
      </div>
    </Container>
  );
}
