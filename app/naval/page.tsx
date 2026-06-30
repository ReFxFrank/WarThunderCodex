import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Naval" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Class browser"
      title="Naval"
      intro="From motor torpedo boats to battleships — each with a top-down silhouette highlighting belt, deck, and citadel, plus main, secondary, AA, and torpedo readouts. Filter by nation, rank, BR range, and class."
      phase="Browser in Phase 3 · data seeded in Phase 5"
      planned={[
        "Filter by nation, rank, BR range, subclass, and acquisition type",
        "Sort by BR, rank, or name, plus global search",
        "Top-down ship silhouette with belt / deck / citadel highlights",
        "Main battery, secondary, AA, and torpedo readouts",
        "Original survivability notes on compartments, crew, and AA resilience",
      ]}
    />
  );
}
