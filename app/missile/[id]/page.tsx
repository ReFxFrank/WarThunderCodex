import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Readout } from "@/components/vehicle/Readout";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SourcesFooter } from "@/components/article/SourcesFooter";
import { getAllMissiles, getMissile } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const missiles = getAllMissiles();
  if (missiles.length === 0) return [{ id: "__none__" }];
  return missiles.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const m = getMissile(id);
  return m ? { title: `${m.name} (${m.guidance})`, description: m.notes.slice(0, 150) } : { title: "Missile not found" };
}

export default async function MissilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = getMissile(id);
  if (!m) notFound();

  return (
    <Container className="py-10 sm:py-12">
      <nav className="mb-5 flex items-center gap-2 text-xs">
        <Link href="/missiles" className="text-muted hover:text-accent">Missiles</Link>
        <span className="text-faint">/</span>
        <span className="label-tag">{m.kind}</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="label-tag mb-1 text-accent">{m.guidance} guidance</div>
          <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{m.name}</h1>
        </div>
        <VerifiedStamp lastVerified={m.lastVerified} gameVersion={m.gameVersion} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <Readout label="Max range" value={m.maxRangeM} unit="m" unverified={m.unverified.includes("maxRangeM")} />
        <Readout label="Min range" value={m.minRangeM} unit="m" unverified={m.unverified.includes("minRangeM")} />
        <Readout label="Max speed" value={m.maxMach} unit="Mach" unverified={m.unverified.includes("maxMach")} />
        <Readout label="Overload" value={m.overloadG} unit="G" unverified={m.unverified.includes("overloadG")} />
        <Readout label="Seeker FoV" value={m.seekerFovDeg} unit="°" unverified={m.unverified.includes("seekerFovDeg")} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {typeof m.allAspect === "boolean" && (
          <span className="rounded-full border border-hairline px-2.5 py-0.5 text-xs text-muted">
            {m.allAspect ? "All-aspect" : "Rear-aspect"}
          </span>
        )}
        {m.irccm && <span className="rounded-full border border-[color:var(--accent-dim)] px-2.5 py-0.5 text-xs text-accent">IRCCM</span>}
      </div>

      <section className="mt-8 max-w-3xl space-y-5">
        <div>
          <div className="label-tag mb-2">Notes</div>
          <p className="leading-relaxed text-muted">{m.notes}</p>
        </div>
        {m.flareResistanceNote && (
          <div>
            <div className="label-tag mb-2">Countermeasure resistance</div>
            <p className="leading-relaxed text-muted">{m.flareResistanceNote}</p>
          </div>
        )}
      </section>

      <SourcesFooter sources={m.sources} />
    </Container>
  );
}
