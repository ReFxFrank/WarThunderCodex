import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { ClassIcon } from "@/components/ui/ClassIcon";
import { NationFlag } from "@/components/ui/NationFlag";
import { getVehiclesByNation } from "@/lib/content";
import { NATIONS, NATION_MAP, type Nation } from "@/lib/nations";
import { classLabel } from "@/lib/vehicle";
import type { VehicleClass } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return NATIONS.map((n) => ({ nation: n.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ nation: string }> }): Promise<Metadata> {
  const { nation } = await params;
  const meta = NATION_MAP[nation as Nation];
  if (!meta) return { title: "Nation not found" };
  return { title: `${meta.name} — nation hub`, description: `Browse ${meta.name}'s vehicles in the War Thunder Codex.` };
}

const CLASSES: VehicleClass[] = ["ground", "aviation", "naval"];

export default async function NationHub({ params }: { params: Promise<{ nation: string }> }) {
  const { nation } = await params;
  const meta = NATION_MAP[nation as Nation];
  if (!meta) notFound();

  const vehicles = getVehiclesByNation(meta.id);

  return (
    <Container className="py-12 sm:py-14">
      <header className="flex items-center gap-4 border-l-2 pl-4" style={{ borderLeftColor: meta.accentVar }}>
        <NationFlag nation={meta.id} width={48} className="shadow-[0_2px_8px_-2px_rgba(0,0,0,0.6)]" />
        <div>
          <div className="label-tag mb-1 text-accent">Nation hub</div>
          <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">{meta.name}</h1>
        </div>
      </header>

      <p className="mt-5 max-w-2xl text-base text-muted">
        {vehicles.length > 0
          ? `${meta.name}'s vehicles currently in the Codex, grouped by class. Open any one for its full instrument cluster and sourced stats.`
          : `No ${meta.name} vehicles are seeded yet. The dataset grows toward full roster coverage over time — every entry sourced and date-stamped.`}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {CLASSES.map((c) => (
          <Link
            key={c}
            href={`/${c}`}
            className="inline-flex items-center gap-2 rounded-md border border-hairline bg-[rgba(8,10,13,0.5)] px-3 py-2 text-sm text-muted hover:border-[color:var(--hairline-strong)] hover:text-accent"
          >
            <ClassIcon kind={c} size={16} /> Browse {classLabel(c)}
          </Link>
        ))}
      </div>

      {CLASSES.map((c) => {
        const inClass = vehicles.filter((v) => v.class === c);
        if (inClass.length === 0) return null;
        return (
          <section key={c} className="mt-10">
            <div className="label-tag mb-3 flex items-center gap-2 text-accent">
              <ClassIcon kind={c} size={16} /> {classLabel(c)}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {inClass.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </section>
        );
      })}
    </Container>
  );
}
