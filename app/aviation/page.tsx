import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Aviation" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Class browser"
      title="Aviation"
      intro="Fighters, attackers, bombers, and jets — each with a performance envelope, structural limits, and its fixed and suspended armament. Filter by nation, rank, BR range, and class."
      phase="Browser in Phase 3 · data seeded in Phase 5"
      planned={[
        "Filter by nation, rank, BR range, subclass, and acquisition type",
        "Sort by BR, rank, or name, plus global search",
        "Performance envelope mini-chart: speed, climb, and turn",
        "Structural limit and armament gauges",
        "Sensors and countermeasures where the aircraft carries them",
      ]}
    />
  );
}
