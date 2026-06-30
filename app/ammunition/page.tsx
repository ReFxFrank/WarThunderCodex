import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { getAllAmmo } from "@/lib/content";
import { getArticleMeta } from "@/lib/article-fs";

export const metadata: Metadata = {
  title: "Ammunition",
  description: "Shell types and the post-penetration mechanics behind them — kinetic vs chemical, with per-shell penetration tables.",
};

export default async function AmmunitionHub() {
  const ammo = getAllAmmo();
  const explainer = await getArticleMeta("ammunition-types");
  const types = Array.from(new Set(ammo.map((a) => a.type)));

  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Shell types</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Ammunition</h1>
        <p className="mt-3 text-base text-muted">
          What each round actually does — solid kinetic shot versus chemical warheads, and why the right
          shell at the right range decides the trade.
        </p>
        {explainer && (
          <Link href={`/mechanics/${explainer.slug}`} className="mt-4 inline-block rounded-md border border-hairline px-4 py-2 text-sm font-semibold text-ink hover:border-[color:var(--hairline-strong)] hover:text-accent">
            Read: {explainer.title} →
          </Link>
        )}
      </div>

      {ammo.length === 0 ? (
        <p className="text-sm text-faint">Per-shell records with penetration tables are being seeded.</p>
      ) : (
        <div className="space-y-8">
          {types.map((t) => (
            <section key={t}>
              <div className="label-tag mb-3">{t}</div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ammo.filter((a) => a.type === t).map((a) => (
                  <GlassCard key={a.id} as={Link} href={`/ammo/${a.id}`} interactive className="group p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold tracking-wide text-ink group-hover:text-accent">{a.name}</h3>
                      <span className="text-muted group-hover:text-accent">→</span>
                    </div>
                    <div className="mt-1 font-data text-xs text-muted">
                      {a.penetration.length > 0 ? `${Math.max(...a.penetration.map((p) => p.penMm))} mm max pen` : "chemical / no kinetic pen"}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </Container>
  );
}
