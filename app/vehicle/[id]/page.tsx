import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { NationChip } from "@/components/ui/NationChip";
import { ClassIcon } from "@/components/ui/ClassIcon";
import { AcquisitionPill } from "@/components/ui/StatusPill";
import { BrReticle } from "@/components/ui/BrReticle";
import { VerifiedStamp } from "@/components/ui/VerifiedStamp";
import { SourcesFooter } from "@/components/article/SourcesFooter";
import { GroundCluster } from "@/components/vehicle/GroundCluster";
import { AviationCluster } from "@/components/vehicle/AviationCluster";
import { NavalCluster } from "@/components/vehicle/NavalCluster";
import { PenetrationCurve, type PenSeries } from "@/components/vehicle/PenetrationCurve";
import { StatRow, StatTable } from "@/components/vehicle/Readout";
import { getAllVehicles, getVehicle, getWeapon, getAmmo } from "@/lib/content";
import { NATION_MAP } from "@/lib/nations";
import { classLabel } from "@/lib/vehicle";

export const dynamicParams = false;

export async function generateStaticParams() {
  const vehicles = getAllVehicles();
  // Static export needs at least one param. While the dataset is empty, emit a
  // sentinel that 404s; it vanishes automatically once real vehicles are seeded.
  if (vehicles.length === 0) return [{ id: "__none__" }];
  return vehicles.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const v = getVehicle(id);
  if (!v) return { title: "Vehicle not found" };
  return { title: `${v.name} — ${NATION_MAP[v.nation]?.name} ${v.subclass}`, description: v.summary };
}

export default async function VehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicle(id);
  if (!vehicle) notFound();

  const browseHref = `/${vehicle.class}`;

  return (
    <Container className="py-10 sm:py-12">
      <nav className="mb-5 flex items-center gap-2 text-xs">
        <Link href={browseHref} className="text-muted hover:text-accent">{classLabel(vehicle.class)}</Link>
        <span className="text-faint">/</span>
        <span className="label-tag">{vehicle.subclass}</span>
      </nav>

      {/* Header strip */}
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-muted">
            <ClassIcon kind={vehicle.class} size={18} />
            <span className="label-tag">{classLabel(vehicle.class)} · Rank {vehicle.rank}</span>
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{vehicle.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <NationChip nation={vehicle.nation} />
            {vehicle.acquisition.map((a) => (
              <AcquisitionPill key={a} type={a} />
            ))}
            {vehicle.releaseUpdate && (
              <span className="label-tag">Added · {vehicle.releaseUpdate}</span>
            )}
          </div>
        </div>
        <div className="flex items-end gap-3">
          <BrReticle value={vehicle.battleRatings.arcade} mode="AB" size={62} />
          <BrReticle value={vehicle.battleRatings.realistic} mode="RB" size={74} />
          <BrReticle value={vehicle.battleRatings.simulator} mode="SB" size={62} />
        </div>
      </header>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{vehicle.summary}</p>

      {/* Instrument cluster */}
      <section className="mt-8">
        {vehicle.class === "ground" && <GroundCluster vehicle={vehicle} />}
        {vehicle.class === "aviation" && (
          <AviationCluster
            vehicle={vehicle}
            armament={vehicle.armament.fixed.map((f) => ({
              label: getWeapon(f.weaponId)?.name ?? f.weaponId,
              count: f.count,
            }))}
          />
        )}
        {vehicle.class === "naval" && <NavalCluster vehicle={vehicle} />}
      </section>

      {/* In-game stat block */}
      <section className="mt-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold tracking-wide text-ink">In-game characteristics</h2>
          <VerifiedStamp lastVerified={vehicle.lastVerified} gameVersion={vehicle.gameVersion} />
        </div>
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {renderStatTables(vehicle)}
        </div>
        {vehicle.unverified.length > 0 && (
          <p className="mt-4 text-xs text-faint">
            Unverified fields (shown as “—”): {vehicle.unverified.join(", ")}.
          </p>
        )}
      </section>

      {/* Armament & ammo (pen curve when kinetic ammo is present) */}
      <ArmamentSection vehicle={vehicle} />

      {/* Pros & cons */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="label-tag mb-2 text-ok">Strengths</div>
          <ul className="space-y-2 text-sm">
            {vehicle.prosCons.pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-ink"><span className="text-ok">+</span>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-tag mb-2 text-alert">Weaknesses</div>
          <ul className="space-y-2 text-sm">
            {vehicle.prosCons.cons.map((c, i) => (
              <li key={i} className="flex gap-2 text-ink"><span className="text-alert">−</span>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to play */}
      <section className="mt-10 max-w-3xl">
        <h2 className="font-display mb-3 text-2xl font-semibold tracking-wide text-ink">How to play it</h2>
        <p className="leading-relaxed text-muted">{vehicle.playstyle}</p>
      </section>

      {/* Real-world history, visually distinct */}
      {vehicle.history && (
        <section className="mt-10 max-w-3xl">
          <div className="glass border-l-2 border-l-[color:var(--hairline-strong)] p-5">
            <div className="label-tag mb-2">Real-world history</div>
            <p className="leading-relaxed text-muted">{vehicle.history}</p>
          </div>
        </section>
      )}

      <SourcesFooter sources={vehicle.sources} />
    </Container>
  );
}

function renderStatTables(vehicle: ReturnType<typeof getVehicle> & {}) {
  if (!vehicle) return null;
  if (vehicle.class === "ground") {
    const m = vehicle.mobility;
    const f = vehicle.firepower;
    const ar = vehicle.armor;
    return (
      <>
        <StatTable title="Mobility">
          <StatRow label="Max forward" value={m.maxFwdKph} unit="km/h" />
          <StatRow label="Max reverse" value={m.maxRevKph} unit="km/h" />
          <StatRow label="Engine power" value={m.enginePowerHp} unit="hp" />
          <StatRow label="Weight" value={m.weightTons} unit="t" />
          <StatRow label="Power-to-weight" value={m.powerToWeight} unit="hp/t" />
          <StatRow label="Neutral steering" value={m.neutralSteering === null ? null : m.neutralSteering ? "Yes" : "No"} />
        </StatTable>
        <StatTable title="Firepower">
          <StatRow label="Reload (stock)" value={f.reloadBaseSec} unit="s" />
          <StatRow label="Reload (aced)" value={f.reloadAcedSec} unit="s" />
          <StatRow label="Depression / elevation" value={f.vertGuidanceDeg ? `${f.vertGuidanceDeg[0]}° / ${f.vertGuidanceDeg[1]}°` : null} />
          <StatRow label="Turret traverse" value={f.turretTraverseDegSec} unit="°/s" />
          <StatRow label="Ammo stowage" value={f.ammoCapacity} unit="rds" />
        </StatTable>
        <StatTable title="Armour (mm)">
          <StatRow label="Hull (F / S / R)" value={fmtTriple(ar.hullMm)} />
          <StatRow label="Turret (F / S / R)" value={fmtTriple(ar.turretMm)} />
          <StatRow label="Crew" value={ar.crewCount} />
          <StatRow label="ERA" value={ar.era ? "Yes" : "No"} />
          <StatRow label="Composite" value={ar.composite ? "Yes" : "No"} />
          {ar.aps ? <StatRow label="Active protection" value={ar.aps} /> : null}
        </StatTable>
      </>
    );
  }
  if (vehicle.class === "aviation") {
    const f = vehicle.flight;
    return (
      <>
        <StatTable title="Performance">
          <StatRow label="Max speed" value={f.maxSpeedKph} unit="km/h" />
          <StatRow label="Best altitude" value={f.maxSpeedAltM} unit="m" />
          <StatRow label="Climb rate" value={f.climbMps} unit="m/s" />
          <StatRow label="Turn time" value={f.turnTimeSec} unit="s" />
        </StatTable>
        <StatTable title="Limits">
          <StatRow label="Structural limit" value={f.structuralLimitKph} unit="km/h" />
          <StatRow label="Ceiling" value={f.ceilingM} unit="m" />
          <StatRow label="Engines" value={f.engineCount} />
        </StatTable>
      </>
    );
  }
  const h = vehicle.hull;
  const a = vehicle.armament;
  return (
    <>
      <StatTable title="Hull & propulsion">
        <StatRow label="Displacement" value={h.displacementTons} unit="t" />
        <StatRow label="Length" value={h.lengthM} unit="m" />
        <StatRow label="Crew" value={h.crew} />
        <StatRow label="Max speed" value={vehicle.propulsion.maxKnots} unit="kn" />
      </StatTable>
      <StatTable title="Armament">
        <StatRow label="Main battery" value={a.mainBattery} />
        <StatRow label="Secondary" value={a.secondary} />
        <StatRow label="AA" value={a.aa} />
        <StatRow label="Torpedoes" value={a.torpedoes} />
      </StatTable>
    </>
  );
}

function fmtTriple(z?: { front?: string; side?: string; rear?: string }): string | null {
  if (!z) return null;
  const parts = [z.front, z.side, z.rear].map((x) => x ?? "—");
  if (parts.every((p) => p === "—")) return null;
  return parts.join(" / ");
}

function ArmamentSection({ vehicle }: { vehicle: NonNullable<ReturnType<typeof getVehicle>> }) {
  if (vehicle.class !== "ground") return null;
  const gun = vehicle.firepower.mainGunId ? getWeapon(vehicle.firepower.mainGunId) : undefined;
  const ammo = vehicle.firepower.ammoTypeIds.map((aid) => getAmmo(aid)).filter(Boolean);
  const series: PenSeries[] = ammo
    .filter((a) => a!.penetration.some((p) => p.angleDeg === 0))
    .map((a) => ({
      name: a!.name,
      points: a!.penetration.filter((p) => p.angleDeg === 0).map((p) => ({ rangeM: p.rangeM, penMm: p.penMm })),
    }));

  if (!gun && ammo.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="font-display mb-3 text-2xl font-semibold tracking-wide text-ink">Armament &amp; ammunition</h2>
      {gun && (
        <p className="mb-4 text-sm text-muted">
          Main armament: <span className="text-ink">{gun.name}</span>
          {gun.caliberMm ? ` · ${gun.caliberMm} mm` : ""}
          {gun.muzzleVelocityMps ? ` · ${gun.muzzleVelocityMps} m/s` : ""}.
        </p>
      )}
      {series.length > 0 && <PenetrationCurve series={series} />}
    </section>
  );
}
