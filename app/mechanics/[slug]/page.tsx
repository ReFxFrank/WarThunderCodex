import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SourcesFooter } from "@/components/article/SourcesFooter";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getArticle, getAllArticles } from "@/lib/articles";
import { CATEGORY_META } from "@/lib/article-categories";

// Only the slugs produced here exist; anything else 404s (no runtime fallback
// under static export). Guarding the empty case keeps the build green before any
// articles are authored.
export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({ slug: a.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.meta.title, description: article.meta.summary };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const { meta, Content } = article;
  const cat = CATEGORY_META[meta.category];
  const isGettingStarted = meta.category === "getting-started";
  const backHref = isGettingStarted ? "/getting-started" : "/mechanics";
  const backLabel = isGettingStarted ? "Getting started" : "Mechanics";

  // Resolve related articles that actually exist.
  const all = await getAllArticles();
  const related = (meta.relatedArticleSlugs ?? [])
    .map((s) => all.find((a) => a.meta.slug === s)?.meta)
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <Container className="py-10 sm:py-14">
      <article className="mx-auto max-w-3xl">
        <nav className="mb-6 flex items-center gap-2 text-xs">
          <Link href={backHref} className="text-muted hover:text-accent">
            {backLabel}
          </Link>
          <span className="text-faint">/</span>
          <span className="label-tag">{cat?.label ?? meta.category}</span>
        </nav>

        <header>
          <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">{meta.summary}</p>
          <div className="mt-4">
            <VerifiedStamp lastVerified={meta.lastUpdated} gameVersion={null} />
          </div>
        </header>

        <div className="seam my-7" />

        <div className="text-[0.95rem]">
          <Content components={mdxComponents} />
        </div>

        {related.length > 0 && (
          <section className="mt-10">
            <div className="label-tag mb-3">Related</div>
            <ul className="flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/mechanics/${r.slug}`}
                    className="inline-block rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-1.5 text-sm text-muted hover:border-[color:var(--hairline-strong)] hover:text-accent"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <SourcesFooter sources={meta.sources} />
      </article>
    </Container>
  );
}
