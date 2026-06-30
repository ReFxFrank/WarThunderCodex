// MDX compilation layer. Compiles article bodies to React components at build
// time (keeping the site statically exportable). Imports the MDX compiler, so
// this module is for server components / the build only — the plain-Node CLI
// uses lib/article-fs.ts instead to avoid the compiler's resolver quirks.
import { pathToFileURL } from "node:url";
import { evaluate } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";
import { getAllArticles, getLoadedArticle } from "@/lib/article-fs";
import type { Article } from "@/lib/schema";

export {
  getAllArticles,
  getArticlesByCategory,
  getArticleMeta,
  type LoadedArticle,
} from "@/lib/article-fs";

/**
 * Compiles a single article to a renderable component. Call from a server
 * component during SSG and render with your MDX component map.
 */
export async function getArticle(
  slug: string,
): Promise<{
  meta: Article;
  Content: (props: { components?: MDXComponents }) => React.ReactElement;
} | null> {
  const found = await getLoadedArticle(slug);
  if (!found) return null;
  const { default: Content } = await evaluate(found.body, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    baseUrl: pathToFileURL(found.sourcePath).href,
  });
  return { meta: found.meta, Content: Content as never };
}

/** Returns the slugs of all articles (for generateStaticParams in Phase 2/3). */
export async function getArticleSlugs(): Promise<string[]> {
  return (await getAllArticles()).map((a) => a.meta.slug);
}
