import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Ammunition" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Shell types"
      title="Ammunition"
      intro="What each round actually does — the difference between a solid kinetic dart and a chemical warhead, and why the right shell at the right range decides the trade. Each shell page carries a penetration-vs-range table and original post-penetration notes."
      phase="Pages in Phase 4 · data seeded in Phase 5"
      planned={[
        "An explainer hub grouping kinetic and chemical families",
        "Per-shell penetration table at multiple ranges and angles",
        "Velocity, explosive filler, ricochet angles, and fuse behavior",
        "Original mechanics notes: spall, overpressure, and post-pen behavior",
      ]}
    />
  );
}
