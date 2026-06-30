import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Weapons" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Gun families"
      title="Weapons"
      intro="The cannons, autocannons, machine guns, and naval guns shared across the roster. Because guns are reused on many vehicles, this set is small and high-leverage — each entry lists the rounds it fires and who carries it."
      phase="Pages in Phase 4 · data seeded in Phase 5"
      planned={[
        "Gun stats: caliber, fire rate, and muzzle velocity",
        "The ammunition each gun can load, linked to full shell pages",
        "Every vehicle that mounts the weapon",
        "Original notes on handling, rate of fire, and quirks",
      ]}
    />
  );
}
