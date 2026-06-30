import type { ArticleCategory } from "@/lib/schema";

export interface CategoryMeta {
  id: ArticleCategory;
  label: string;
  blurb: string;
}

/** Display metadata + ordering for article categories. */
export const CATEGORY_META: Record<ArticleCategory, CategoryMeta> = {
  "getting-started": { id: "getting-started", label: "Getting started", blurb: "Your first hours, end to end." },
  mechanics: { id: "mechanics", label: "Core mechanics", blurb: "The rules that decide every fight." },
  weapons: { id: "weapons", label: "Weapons & ammunition", blurb: "What the rounds do and why." },
  economy: { id: "economy", label: "Economy & progression", blurb: "SL, RP, crew, and the grind." },
  ground: { id: "ground", label: "Ground", blurb: "Tank-specific systems and tactics." },
  aviation: { id: "aviation", label: "Aviation", blurb: "Flying, fighting, and guided weapons." },
  naval: { id: "naval", label: "Naval", blurb: "Gunnery, torpedoes, and staying afloat." },
  glossary: { id: "glossary", label: "Glossary", blurb: "Every acronym, defined." },
};

/** Order categories appear in the mechanics hub (getting-started + glossary live elsewhere). */
export const MECHANICS_CATEGORY_ORDER: ArticleCategory[] = [
  "mechanics",
  "weapons",
  "economy",
  "aviation",
  "ground",
  "naval",
];
