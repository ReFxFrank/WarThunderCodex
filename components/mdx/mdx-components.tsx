import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/cn";
import { anchorId } from "@/lib/anchor";

/**
 * The component map MDX articles render through. Standard elements are styled to
 * the field-manual look; articles may additionally use <Callout> and <Term>.
 */

function Anchor({ href = "", children, ...rest }: React.ComponentPropsWithoutRef<"a">) {
  const internal = href.startsWith("/") || href.startsWith("#");
  if (internal) {
    return (
      <Link href={href} className="text-accent underline decoration-[color:var(--accent-dim)] underline-offset-2 hover:decoration-accent">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-accent underline decoration-[color:var(--accent-dim)] underline-offset-2 hover:decoration-accent"
      {...rest}
    >
      {children}
    </a>
  );
}

type CalloutType = "info" | "tip" | "warning" | "danger";
const CALLOUT_STYLES: Record<CalloutType, { border: string; tag: string; label: string }> = {
  info: { border: "var(--hairline-strong)", tag: "text-muted", label: "Note" },
  tip: { border: "rgba(91,214,160,0.5)", tag: "text-ok", label: "Tip" },
  warning: { border: "rgba(255,210,74,0.5)", tag: "text-caution", label: "Heads up" },
  danger: { border: "rgba(255,92,92,0.5)", tag: "text-alert", label: "Warning" },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const s = CALLOUT_STYLES[type] ?? CALLOUT_STYLES.info;
  return (
    <div
      className="glass my-5 border-l-2 p-4 text-sm leading-relaxed"
      style={{ borderLeftColor: s.border }}
    >
      <div className={cn("label-tag mb-1.5", s.tag)}>{title ?? s.label}</div>
      <div className="space-y-2 text-ink [&>p]:m-0">{children}</div>
    </div>
  );
}

/** Links an in-text term to its glossary entry. */
export function Term({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Link
      href={`/glossary#${anchorId(id)}`}
      title={`Glossary: ${id}`}
      className="border-b border-dotted border-[color:var(--hairline-strong)] text-ink hover:border-accent hover:text-accent"
    >
      {children}
    </Link>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (p) => <h1 className="font-display mb-4 mt-8 text-3xl font-semibold tracking-wide text-ink" {...p} />,
  h2: (p) => <h2 className="font-display mb-3 mt-9 text-2xl font-semibold tracking-wide text-ink" {...p} />,
  h3: (p) => <h3 className="font-display mb-2 mt-7 text-xl font-semibold tracking-wide text-ink" {...p} />,
  h4: (p) => <h4 className="mb-2 mt-5 text-base font-semibold text-ink" {...p} />,
  p: (p) => <p className="my-3.5 leading-relaxed text-muted" {...p} />,
  a: Anchor,
  ul: (p) => <ul className="my-3.5 ml-5 list-disc space-y-2 text-muted marker:text-accent" {...p} />,
  ol: (p) => <ol className="my-3.5 ml-5 list-decimal space-y-2 text-muted marker:text-faint" {...p} />,
  li: (p) => <li className="pl-1 leading-relaxed" {...p} />,
  strong: (p) => <strong className="font-semibold text-ink" {...p} />,
  em: (p) => <em className="italic" {...p} />,
  blockquote: (p) => (
    <blockquote className="my-5 border-l-2 border-[color:var(--accent-dim)] pl-4 italic text-muted" {...p} />
  ),
  hr: () => <div className="seam my-8" />,
  code: (p) => (
    <code className="font-data rounded bg-[rgba(8,10,13,0.7)] px-1.5 py-0.5 text-[0.85em] text-accent" {...p} />
  ),
  pre: (p) => (
    <pre className="glass my-5 overflow-x-auto p-4 text-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-ink" {...p} />
  ),
  table: (p) => (
    <div className="my-5 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...p} />
    </div>
  ),
  thead: (p) => <thead {...p} />,
  th: (p) => (
    <th className="border-b border-[color:var(--hairline-strong)] px-3 py-2 text-left label-tag" {...p} />
  ),
  td: (p) => <td className="border-b border-hairline px-3 py-2 align-top text-muted" {...p} />,
  Callout,
  Term,
};
