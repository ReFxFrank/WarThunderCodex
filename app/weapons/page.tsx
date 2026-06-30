import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { WeaponBrowser, type WeaponRow } from "@/components/weapon/WeaponBrowser";
import { getAllWeapons, getAllVehicles } from "@/lib/content";
import { isHelicopter } from "@/lib/vehicle";

export const metadata: Metadata = {
  title: "Weapons",
  description:
    "Gun families across the War Thunder roster — sorted by domain (ground, aviation, helicopters, naval), with caliber, rate of fire, and who carries them.",
};

// Infer a gun's domain from the classes of the vehicles that mount it. A gun used
// by both a tank and an aircraft belongs to both. Falls back to its type when no
// vehicle references it yet (e.g. naval guns described only on ship pages).
function buildDomainIndex(): Map<string, Set<string>> {
  const idx = new Map<string, Set<string>>();
  const add = (wid: string | null | undefined, domain: string) => {
    if (!wid) return;
    if (!idx.has(wid)) idx.set(wid, new Set());
    idx.get(wid)!.add(domain);
  };
  for (const v of getAllVehicles()) {
    if (v.class === "ground") {
      add(v.firepower.mainGunId, "ground");
    } else if (v.class === "aviation") {
      const domain = isHelicopter(v) ? "helicopters" : "aviation";
      for (const f of v.armament.fixed) add(f.weaponId, domain);
    }
    // Naval armament is described inline on ship pages, not as weapon entities.
  }
  return idx;
}

function inferFromType(type: string): string[] {
  if (type === "naval-gun") return ["naval"];
  if (type === "rocket-pod") return ["aviation"];
  return [];
}

export default function WeaponsIndex() {
  const weapons = getAllWeapons();
  if (weapons.length === 0) {
    return (
      <ComingSoon
        eyebrow="Gun families"
        title="Weapons"
        intro="The cannons, autocannons, and machine guns shared across the roster. Pages are built; sourced guns are being seeded."
        phase="Seeding in progress (Phase 4 / 5)"
        planned={["Caliber, fire rate, and muzzle velocity", "The ammunition each gun can load", "Every vehicle that mounts the weapon"]}
      />
    );
  }

  const domainIdx = buildDomainIndex();
  const rows: WeaponRow[] = weapons.map((w) => {
    const domains = domainIdx.get(w.id);
    return {
      id: w.id,
      name: w.name,
      type: w.type,
      caliberMm: w.caliberMm ?? null,
      fireRateRpm: w.fireRateRpm ?? null,
      usedByCount: w.usedBy.length,
      domains: domains ? Array.from(domains) : inferFromType(w.type),
    };
  });

  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Gun families</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Weapons</h1>
        <p className="mt-3 text-base text-muted">
          Guns are reused across many vehicles. Filter by domain — ground, aviation, helicopters, or naval — then by gun
          type; each entry links to the rounds it fires and who carries it.
        </p>
      </div>
      <WeaponBrowser weapons={rows} />
    </Container>
  );
}
