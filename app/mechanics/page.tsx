import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Mechanics" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="The knowledge backbone"
      title="Mechanics"
      intro="How the game actually resolves a fight. This is the conceptual core of the Codex — finite, stable, and where the site earns its trust. Each article is original prose, cited to official sources, and date-stamped."
      phase="Lands in Phase 2"
      planned={[
        "Penetration: angle, normalization, ricochet, and overmatch",
        "Ammunition: kinetic vs chemical rounds and what each does post-penetration",
        "The damage model: spalling, overpressure, ammo detonation, crew, fire, and fuel",
        "Armor types: RHA, cast, composite, ERA, NERA, spaced, and active protection",
        "Battle Rating and matchmaking; the economy (SL/GE/RP, mods, crew skills)",
        "Aviation flight model and energy fighting; missiles, radar, and countermeasures",
        "Naval gunnery, fire control, torpedoes, citadels, and AA",
      ]}
    />
  );
}
