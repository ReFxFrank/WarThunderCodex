import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CompareTool } from "@/components/compare/CompareTool";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getAllVehicles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compare",
  description: "Put two or three same-class War Thunder vehicles side by side with the differences highlighted.",
};

export default function ComparePage() {
  const vehicles = getAllVehicles();
  if (vehicles.length < 2) {
    return (
      <ComingSoon
        eyebrow="Side by side" title="Compare"
        intro="Put two or three same-class vehicles next to each other with the meaningful differences highlighted. Needs at least two seeded vehicles of a class."
        phase="Active once more vehicles are seeded"
        planned={["Pick 2–3 vehicles of the same class", "Instrument stats side by side", "Deltas highlighted in green and red", "Cross-class comparisons rejected"]}
      />
    );
  }
  return (
    <Container className="py-12 sm:py-14">
      <div className="mb-6 max-w-3xl">
        <div className="label-tag mb-2 text-accent">Side by side</div>
        <h1 className="font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">Compare</h1>
        <p className="mt-3 text-base text-muted">
          Pick two or three vehicles of the same class. The better value in each row is green, the worse red.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
        <CompareTool vehicles={vehicles} />
      </Suspense>
    </Container>
  );
}
