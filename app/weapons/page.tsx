import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getAllWeapons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Weapons",
  description: "Gun families across the War Thunder roster — caliber, rate of fire, the rounds they fire, and who carries them.",
};

const TYPE_LABEL: Record<string, string> = {
  cannon: "Cannons", autocannon: "Autocannons", "machine-gun": "Machine guns", "naval-gun": "Naval guns", "rocket-pod": "Rocket pods",
};

export default function WeaponsIndex() {
  const weapons = getAllWeapons();
  if (weapons.length === 0) {
    return (
      <ComingSoon
        eyebrow="Gun families" title="Weapons"
        intro="The cannons, autocannons, and machine guns shared across the roster. Pages are built; sourced guns are being seeded."
        phase="Seeding in progress (Phase 4 / 5)"
        planned={["Caliber, fire rate, and muzzle velocity", "The ammunition each gun can load", "Every vehicle that mounts the weapon"]}
      />
    );
  }
  const types = Array.from(new Set(weapons.map((w) => w.type)));
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Gun families</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Weapons</h1>
        <p className="mt-3 text-base text-muted">Guns are reused across many vehicles — each entry lists the rounds it fires and who carries it.</p>
      </div>
      <div className="space-y-8">
        {types.map((t) => (
          <section key={t}>
            <div className="label-tag mb-3">{TYPE_LABEL[t] ?? t}</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {weapons.filter((w) => w.type === t).map((w) => (
                <GlassCard key={w.id} as={Link} href={`/weapon/${w.id}`} interactive className="group p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold tracking-wide text-ink group-hover:text-accent">{w.name}</h3>
                    <span className="text-muted group-hover:text-accent">→</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-data text-xs text-muted">
                    {w.caliberMm != null && <span>{w.caliberMm} mm</span>}
                    {w.fireRateRpm != null && <span>{w.fireRateRpm} rpm</span>}
                    <span>{w.usedBy.length} vehicle{w.usedBy.length === 1 ? "" : "s"}</span>
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
