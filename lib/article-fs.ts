// Frontmatter loading + validation for MDX articles. Deliberately free of any
// MDX-compiler dependency so it can run under the plain-Node tsx CLI and be
// imported by the search builder without pulling the compiler into that bundle.
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { articleSchema, type Article } from "@/lib/schema";

export const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export interface LoadedArticle {
  meta: Article;
  /** Raw MDX body (frontmatter stripped) — used for compilation and search. */
  body: string;
  /** Absolute source path, for debugging and baseUrl resolution. */
  sourcePath: string;
}

async function walkMdx(dir: string): Promise<string[]> {
  let entries: import("node:fs").Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return []; // directory doesn't exist yet (no articles authored)
  }
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walkMdx(full)));
    else if (entry.isFile() && entry.name.endsWith(".mdx") && !entry.name.startsWith("_")) {
      files.push(full);
    }
  }
  return files;
}

/** Reads + validates every article's frontmatter (no MDX compilation). */
export async function getAllArticles(): Promise<LoadedArticle[]> {
  const files = await walkMdx(ARTICLES_DIR);
  const loaded = await Promise.all(
    files.map(async (sourcePath) => {
      const raw = await fs.readFile(sourcePath, "utf8");
      const { data, content } = matter(raw);
      const parsed = articleSchema.safeParse(data);
      if (!parsed.success) {
        const detail = parsed.error.issues
          .map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`)
          .join("; ");
        throw new Error(`Invalid frontmatter in ${path.relative(process.cwd(), sourcePath)} — ${detail}`);
      }
      return { meta: parsed.data, body: content, sourcePath };
    }),
  );
  const seen = new Set<string>();
  for (const a of loaded) {
    if (seen.has(a.meta.slug)) throw new Error(`Duplicate article slug "${a.meta.slug}"`);
    seen.add(a.meta.slug);
  }
  return loaded.sort((a, b) => a.meta.title.localeCompare(b.meta.title));
}

export async function getArticlesByCategory(category: Article["category"]): Promise<LoadedArticle[]> {
  return (await getAllArticles()).filter((a) => a.meta.category === category);
}

export async function getArticleMeta(slug: string): Promise<Article | undefined> {
  return (await getAllArticles()).find((a) => a.meta.slug === slug)?.meta;
}

export async function getLoadedArticle(slug: string): Promise<LoadedArticle | undefined> {
  return (await getAllArticles()).find((a) => a.meta.slug === slug);
}
