import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE } from "@/lib/site";

/**
 * A scaffold placeholder for routes that land in later phases. It states plainly
 * what will live here and which build phase delivers it — empty states in the
 * field-manual voice, never apologetic.
 */
export function ComingSoon({
  eyebrow,
  title,
  intro,
  planned,
  phase,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  planned: string[];
  phase: string;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="label-tag mb-2 text-accent">{eyebrow}</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      </div>

      <GlassCard className="mt-8 max-w-3xl p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="label-tag">Planned for this section</span>
          <span className="font-data rounded border border-hairline px-2 py-0.5 text-[0.7rem] text-caution">
            {phase}
          </span>
        </div>
        <div className="seam my-4" />
        <ul className="space-y-2.5">
          {planned.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-faint">
        Nothing here will ship with invented numbers. {SITE.name} marks any value it cannot
        verify against a real source rather than guessing it. Until this section is populated and
        sourced, it stays empty on purpose.{" "}
        <Link href="/about" className="text-muted underline decoration-hairline hover:text-accent">
          Read the sourcing policy →
        </Link>
      </p>
    </Container>
  );
}
