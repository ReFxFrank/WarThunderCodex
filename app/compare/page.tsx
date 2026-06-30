import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Compare" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Side by side"
      title="Compare"
      intro="Put two or three same-class vehicles next to each other and read their instrument stats in parallel, with the meaningful differences highlighted. Cross-class comparisons are rejected with a clear message — a tank and a fighter don't share a yardstick."
      phase="Lands in Phase 4"
      planned={[
        "Pick 2–3 vehicles of the same class",
        "Instrument stats rendered side by side",
        "Deltas highlighted in green and red",
        "Add-to-compare from any vehicle page",
      ]}
    />
  );
}
