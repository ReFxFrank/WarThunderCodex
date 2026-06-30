// Turns the Phase 2 workflow's JSON output into on-disk content:
//   - content/articles/<category>/<slug>.mdx  (one per finalized article)
//   - content/data/glossary.ts                (the glossary term list)
//
// Usage: node scripts/gen-content-from-workflow.mjs <workflow-output.json>
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("usage: node scripts/gen-content-from-workflow.mjs <workflow-output.json>");
  process.exit(1);
}

const VALID_CATEGORIES = new Set([
  "getting-started",
  "mechanics",
  "economy",
  "aviation",
  "ground",
  "naval",
  "weapons",
  "glossary",
]);

function unwrap(parsed) {
  // The workflow return value may be wrapped by the task runner; dig for it.
  if (parsed && Array.isArray(parsed.articles)) return parsed;
  for (const key of ["result", "output", "return", "value", "data"]) {
    if (parsed && parsed[key] && Array.isArray(parsed[key].articles)) return parsed[key];
  }
  throw new Error("could not find { articles, glossary } in the workflow output");
}

const raw = await fs.readFile(inputPath, "utf8");
const data = unwrap(JSON.parse(raw));

const articles = data.articles ?? [];
const glossary = data.glossary ?? [];

let written = 0;
for (const entry of articles) {
  const a = entry.finalArticle ?? entry;
  if (!a || !a.slug || !a.body) {
    console.warn("skipping malformed article entry:", entry?.slug ?? "(unknown)");
    continue;
  }
  const category = VALID_CATEGORIES.has(a.category) ? a.category : "mechanics";
  const front = {
    slug: a.slug,
    title: a.title,
    category,
    summary: a.summary,
    sources: a.sources,
    lastUpdated: a.lastUpdated,
  };
  if (Array.isArray(a.relatedArticleSlugs) && a.relatedArticleSlugs.length) {
    front.relatedArticleSlugs = a.relatedArticleSlugs;
  }
  const dir = path.join("content", "articles", category);
  await fs.mkdir(dir, { recursive: true });
  const body = String(a.body).trim() + "\n";
  const file = matter.stringify(body, front);
  await fs.writeFile(path.join(dir, `${a.slug}.mdx`), file, "utf8");
  written++;
}

// Glossary -> typed TS module.
const glossaryFile =
  `import type { GlossaryTerm } from "@/lib/schema";\n\n` +
  `// The acronym + term reference the rest of the site links into.\n` +
  `// Generated in Phase 2 from the content workflow; original, concise definitions.\n` +
  `export const glossary: GlossaryTerm[] = ${JSON.stringify(glossary, null, 2)};\n`;
await fs.writeFile(path.join("content", "data", "glossary.ts"), glossaryFile, "utf8");

console.log(`wrote ${written} article(s) and ${glossary.length} glossary term(s)`);
