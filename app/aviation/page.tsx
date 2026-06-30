import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VehicleBrowser } from "@/components/vehicle/VehicleBrowser";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getVehiclesByClass } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aviation",
  description: "Browse War Thunder aircraft — performance envelopes, structural limits, and armament, every stat sourced.",
};

export default function AviationBrowser() {
  const vehicles = getVehiclesByClass("aviation");
  if (vehicles.length === 0) {
    return (
      <ComingSoon
        eyebrow="Class browser"
        title="Aviation"
        intro="Fighters, attackers, bombers, and jets — each with a performance envelope and armament. The browser is built; sourced aircraft are being seeded."
        phase="Seeding in progress (Phase 3 / 5)"
        planned={[
          "Filter by nation, rank, BR range, subclass, and acquisition",
          "Sort by BR, rank, or name, plus search",
          "Performance-envelope mini-chart and exact readouts",
        ]}
      />
    );
  }
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-6 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Class browser</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Aviation</h1>
        <p className="mt-3 text-base text-muted">
          Fighters, attackers, and bombers. Open any aircraft for its performance envelope and armament.
        </p>
      </div>
      <VehicleBrowser vehicles={vehicles} />
    </Container>
  );
}
