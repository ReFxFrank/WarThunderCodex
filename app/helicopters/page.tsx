import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VehicleBrowser } from "@/components/vehicle/VehicleBrowser";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getVehiclesByClass } from "@/lib/content";
import { isHelicopter } from "@/lib/vehicle";

export const metadata: Metadata = {
  title: "Helicopters",
  description:
    "Browse War Thunder attack helicopters — flight performance, cannon, and ATGM/rocket loadouts, every stat sourced.",
};

export default function HelicopterBrowser() {
  const vehicles = getVehiclesByClass("aviation").filter(isHelicopter);
  if (vehicles.length === 0) {
    return (
      <ComingSoon
        eyebrow="Class browser"
        title="Helicopters"
        intro="Attack and scout helicopters — cannon, ATGMs, and rocket pods. The browser is built; sourced helicopters are being seeded."
        phase="Seeding in progress"
        planned={[
          "Filter by nation, rank, BR range, and acquisition",
          "Sort by BR, rank, or name, plus search",
          "Flight readouts and the ATGM / rocket loadout",
        ]}
      />
    );
  }
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-6 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Class browser</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Helicopters</h1>
        <p className="mt-3 text-base text-muted">
          Attack and scout rotorcraft. Open any helicopter for its flight readouts and the cannon, ATGM, and rocket loadout it carries.
        </p>
      </div>
      <VehicleBrowser vehicles={vehicles} />
    </Container>
  );
}
