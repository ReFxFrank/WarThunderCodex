import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getAllMissiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Missiles",
  description: "Air-to-air, ATGM, and SAM families — guidance type, range, and how each handles countermeasures.",
};

const KIND_LABEL: Record<string, string> = {
  "air-to-air": "Air-to-air", "air-to-ground": "Air-to-ground", atgm: "ATGMs", sam: "SAMs", naval: "Naval",
};

export default function MissilesIndex() {
  const missiles = getAllMissiles();
  if (missiles.length === 0) {
    return (
      <ComingSoon
        eyebrow="Guided weapons" title="Missiles"
        intro="Air-to-air, ATGM, and SAM families, grouped by guidance. Pages are built; sourced missiles are being seeded."
        phase="Seeding in progress (Phase 4 / 5)"
        planned={["Range, speed, and overload per missile", "Guidance type and seeker field of view", "All-aspect and IRCCM where relevant", "Original notes on flare/chaff resistance"]}
      />
    );
  }
  const kinds = Array.from(new Set(missiles.map((m) => m.kind)));
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Guided weapons</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Missiles</h1>
        <p className="mt-3 text-base text-muted">Grouped by guidance — IR, SARH, ARH, SACLOS, and beyond.</p>
      </div>
      <div className="space-y-8">
        {kinds.map((k) => (
          <section key={k}>
            <div className="label-tag mb-3">{KIND_LABEL[k] ?? k}</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {missiles.filter((m) => m.kind === k).map((m) => (
                <GlassCard key={m.id} as={Link} href={`/missile/${m.id}`} interactive className="group p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold tracking-wide text-ink group-hover:text-accent">{m.name}</h3>
                    <span className="text-muted group-hover:text-accent">→</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-data text-xs text-muted">
                    <span className="text-accent">{m.guidance}</span>
                    {m.maxRangeM != null && <span>{(m.maxRangeM / 1000).toFixed(1)} km</span>}
                    {m.maxMach != null && <span>Mach {m.maxMach}</span>}
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
