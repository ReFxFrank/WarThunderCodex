import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Getting started" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="New-player path"
      title="Getting started"
      intro="The shortest route from install to holding your own — which mode to learn first, how the controls map, picking a starter nation, and what the early grind actually rewards."
      phase="Lands in Phase 2"
      planned={[
        "Game modes explained: Arcade, Realistic, and Simulator — what changes between them",
        "Control basics for ground, air, and naval, and what to rebind first",
        "Choosing a first nation and why it matters less than people say",
        "The early grind: research points, Silver Lions, and what to spend them on",
        "Common new-player mistakes and how to avoid them",
      ]}
    />
  );
}
