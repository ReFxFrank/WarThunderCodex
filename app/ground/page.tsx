import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VehicleBrowser } from "@/components/vehicle/VehicleBrowser";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getVehiclesByClass } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ground vehicles",
  description: "Browse War Thunder ground vehicles — armor schematics, mobility, and firepower, every stat sourced.",
};

export default function GroundBrowser() {
  const vehicles = getVehiclesByClass("ground");
  if (vehicles.length === 0) {
    return (
      <ComingSoon
        eyebrow="Class browser"
        title="Ground"
        intro="Tanks, tank destroyers, and SPAA — each with an interactive armor schematic, mobility and firepower readouts. The browser is built; sourced vehicles are being seeded."
        phase="Seeding in progress (Phase 3 / 5)"
        planned={[
          "Filter by nation, rank, BR range, subclass, and acquisition",
          "Sort by BR, rank, or name, plus search",
          "Interactive armor schematic with hover-to-read thickness",
        ]}
      />
    );
  }
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-6 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Class browser</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Ground</h1>
        <p className="mt-3 text-base text-muted">
          Tanks, tank destroyers, and SPAA. Open any vehicle for its armor schematic and instrument cluster.
        </p>
      </div>
      <VehicleBrowser vehicles={vehicles} />
    </Container>
  );
}
