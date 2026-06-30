import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { VehicleBrowser } from "@/components/vehicle/VehicleBrowser";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getVehiclesByClass } from "@/lib/content";

export const metadata: Metadata = {
  title: "Naval",
  description: "Browse War Thunder naval forces — gunnery, torpedoes, and protection, every stat sourced.",
};

export default function NavalBrowser() {
  const vehicles = getVehiclesByClass("naval");
  if (vehicles.length === 0) {
    return (
      <ComingSoon
        eyebrow="Class browser"
        title="Naval"
        intro="From motor torpedo boats to battleships — each with a top-down silhouette and battery readouts. The browser is built; sourced ships are being seeded."
        phase="Seeding in progress (Phase 3 / 5)"
        planned={[
          "Filter by nation, rank, BR range, subclass, and acquisition",
          "Sort by BR, rank, or name, plus search",
          "Top-down silhouette with belt / deck / citadel highlights",
        ]}
      />
    );
  }
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-6 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Class browser</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Naval</h1>
        <p className="mt-3 text-base text-muted">
          Boats to capital ships. Open any vessel for its silhouette, protection, and armament fit.
        </p>
      </div>
      <VehicleBrowser vehicles={vehicles} />
    </Container>
  );
}
