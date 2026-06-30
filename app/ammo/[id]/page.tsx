import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Readout } from "@/components/vehicle/Readout";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SourcesFooter } from "@/components/article/SourcesFooter";
import { PenetrationCurve } from "@/components/vehicle/PenetrationCurve";
import { getAllAmmo, getAmmo, getAllWeapons } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const ammo = getAllAmmo();
  if (ammo.length === 0) return [{ id: "__none__" }];
  return ammo.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const a = getAmmo(id);
  return a ? { title: `${a.name} (${a.type})`, description: a.mechanics.slice(0, 150) } : { title: "Shell not found" };
}

export default async function AmmoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = getAmmo(id);
  if (!a) notFound();

  const guns = getAllWeapons().filter((w) => w.ammoTypeIds.includes(a.id));
  const zeroDeg = a.penetration.filter((p) => p.angleDeg === 0).sort((x, y) => x.rangeM - y.rangeM);

  return (
    <Container className="py-10 sm:py-12">
      <nav className="mb-5 flex items-center gap-2 text-xs">
        <Link href="/ammunition" className="text-muted hover:text-accent">Ammunition</Link>
        <span className="text-faint">/</span>
        <span className="label-tag">{a.type}</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{a.name}</h1>
        <VerifiedStamp lastVerified={a.lastVerified} gameVersion={a.gameVersion} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Type" value={a.type} />
        <Readout label="Velocity" value={a.velocityMps} unit="m/s" unverified={a.unverified.includes("velocityMps")} />
        <Readout label="Filler (TNTeq)" value={a.explosiveMassTntEqG} unit="g" unverified={a.unverified.includes("explosiveMassTntEqG")} />
        <Readout label="Normalization" value={a.normalizationDeg} unit="°" unverified={a.unverified.includes("normalizationDeg")} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {zeroDeg.length > 0 ? (
          <PenetrationCurve series={[{ name: a.name, points: zeroDeg.map((p) => ({ rangeM: p.rangeM, penMm: p.penMm })) }]} />
        ) : (
          <div className="glass flex items-center justify-center p-6 text-sm text-faint">
            No kinetic penetration table — this round defeats armour chemically or is a utility shell.
          </div>
        )}
        <div className="glass p-4">
          <div className="label-tag mb-2 text-accent">Penetration table</div>
          {a.penetration.length > 0 ? (
            <table className="w-full text-sm">
              <thead>
                <tr className="label-tag">
                  <th className="py-1 text-left">Range</th>
                  <th className="py-1 text-right">Angle</th>
                  <th className="py-1 text-right">Penetration</th>
                </tr>
              </thead>
              <tbody>
                {a.penetration.map((p, i) => (
                  <tr key={i} className="border-t border-hairline">
                    <td className="py-1 font-data text-muted">{p.rangeM} m</td>
                    <td className="py-1 text-right font-data text-muted">{p.angleDeg}°</td>
                    <td className="py-1 text-right font-data text-ink">{p.penMm} mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-faint">No penetration figures recorded.</p>
          )}
        </div>
      </div>

      <section className="mt-8 max-w-3xl">
        <div className="label-tag mb-2">Post-penetration mechanics</div>
        <p className="leading-relaxed text-muted">{a.mechanics}</p>
      </section>

      {guns.length > 0 && (
        <section className="mt-8">
          <div className="label-tag mb-3">Fired by</div>
          <div className="flex flex-wrap gap-2">
            {guns.map((g) => (
              <Link key={g.id} href={`/weapon/${g.id}`} className="rounded border border-hairline bg-[rgba(8,10,13,0.45)] px-3 py-1.5 text-sm text-muted hover:border-[color:var(--hairline-strong)] hover:text-accent">
                {g.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <SourcesFooter sources={a.sources} />
    </Container>
  );
}
