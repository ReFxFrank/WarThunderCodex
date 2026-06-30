import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Readout } from "@/components/vehicle/Readout";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SourcesFooter } from "@/components/article/SourcesFooter";
import { getAllWeapons, getWeapon, getAmmo, getVehicle } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const weapons = getAllWeapons();
  if (weapons.length === 0) return [{ id: "__none__" }];
  return weapons.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const w = getWeapon(id);
  return w ? { title: w.name, description: w.notes } : { title: "Weapon not found" };
}

export default async function WeaponPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const w = getWeapon(id);
  if (!w) notFound();

  const ammo = w.ammoTypeIds.map((aid) => getAmmo(aid)).filter(Boolean);
  const vehicles = w.usedBy.map((vid) => getVehicle(vid)).filter(Boolean);

  return (
    <Container className="py-10 sm:py-12">
      <nav className="mb-5 flex items-center gap-2 text-xs">
        <Link href="/weapons" className="text-muted hover:text-accent">Weapons</Link>
        <span className="text-faint">/</span>
        <span className="label-tag">{w.type}</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{w.name}</h1>
        <VerifiedStamp lastVerified={w.lastVerified} gameVersion={w.gameVersion} />
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted">{w.notes}</p>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Caliber" value={w.caliberMm} unit="mm" />
        <Readout label="Fire rate" value={w.fireRateRpm} unit="rpm" unverified={w.unverified.includes("fireRateRpm")} />
        <Readout label="Muzzle velocity" value={w.muzzleVelocityMps} unit="m/s" unverified={w.unverified.includes("muzzleVelocityMps")} />
        <Readout label="Type" value={w.type} />
      </div>

      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <div className="label-tag mb-3">Ammunition</div>
          {ammo.length > 0 ? (
            <ul className="space-y-2">
              {ammo.map((a) => (
                <li key={a!.id}>
                  <Link href={`/ammo/${a!.id}`} className="flex items-center justify-between rounded border border-hairline bg-[rgba(8,10,13,0.45)] px-3 py-2 text-sm hover:border-[color:var(--hairline-strong)]">
                    <span className="text-ink">{a!.name}</span>
                    <span className="font-data text-xs text-accent">{a!.type} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-faint">Shell records for this gun are seeded with the ammunition dataset.</p>
          )}
        </div>
        <div>
          <div className="label-tag mb-3">Carried by</div>
          {vehicles.length > 0 ? (
            <ul className="space-y-2">
              {vehicles.map((v) => (
                <li key={v!.id}>
                  <Link href={`/vehicle/${v!.id}`} className="flex items-center justify-between rounded border border-hairline bg-[rgba(8,10,13,0.45)] px-3 py-2 text-sm hover:border-[color:var(--hairline-strong)]">
                    <span className="text-ink">{v!.name}</span>
                    <span className="font-data text-xs text-muted">{v!.subclass} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-faint">—</p>
          )}
        </div>
      </section>

      <SourcesFooter sources={w.sources} />
    </Container>
  );
}
