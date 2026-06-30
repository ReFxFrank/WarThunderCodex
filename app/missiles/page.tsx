import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Missiles" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Guided weapons"
      title="Missiles"
      intro="Air-to-air, ATGM, and SAM families, grouped by guidance type — IR, SARH, ARH, SACLOS, and beyond. Each entry covers range, energy, seeker behavior, and how it deals with countermeasures."
      phase="Pages in Phase 4 · data seeded in Phase 5"
      planned={[
        "Range, speed, and overload figures per missile",
        "Guidance type and seeker field of view",
        "All-aspect capability and IRCCM where relevant",
        "Original notes on flare and chaff resistance",
      ]}
    />
  );
}
