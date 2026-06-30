import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GlossaryBrowser } from "@/components/glossary/GlossaryBrowser";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getGlossary } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Every War Thunder acronym and term the rest of the Codex links into — BR, RP, SL, APHE, APFSDS, uptier, spaded, and more.",
};

export default function GlossaryPage() {
  const terms = getGlossary();

  if (terms.length === 0) {
    return (
      <ComingSoon
        eyebrow="Acronyms & terms"
        title="Glossary"
        intro="The shared dictionary the rest of the site links into. Being written now, with concise, original definitions."
        phase="Authoring in progress (Phase 2)"
        planned={[
          "Searchable list of acronyms and terms",
          "Concise, original definitions with see-also links",
          "Deep links so any term in an article jumps straight here",
        ]}
      />
    );
  }

  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="label-tag mb-2 text-accent">Acronyms &amp; terms</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Glossary</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The shared dictionary the rest of the Codex links into. Every acronym in an article points
          back here. Definitions are concise and written in our own words.
        </p>
      </div>
      <div className="mt-8">
        <GlossaryBrowser terms={terms} />
      </div>
    </Container>
  );
}
