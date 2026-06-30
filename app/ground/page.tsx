import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Ground vehicles" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Class browser"
      title="Ground"
      intro="Tanks, tank destroyers, and SPAA — each with an interactive armor schematic, mobility and firepower readouts, and the rounds it can load. Filter by nation, rank, BR range, subclass, and how you unlock it."
      phase="Browser in Phase 3 · data seeded in Phase 5"
      planned={[
        "Filter by nation, rank, BR range, subclass, and acquisition type",
        "Sort by BR, rank, or name, plus global search",
        "Result cards with nation chip, class icon, rank, BR badge, and acquisition tags",
        "Per-vehicle armor schematic with hover-to-read thickness",
        "Mobility and firepower gauges in instrument-readout style",
      ]}
    />
  );
}
