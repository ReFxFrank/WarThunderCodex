"use client";

import { Model3D, type ModelBox } from "@/components/vehicle/Model3D";
import { Readout } from "@/components/vehicle/Readout";
import type { NavalVehicle } from "@/lib/schema";

const METAL = "#3a434c";
const DARK = "#262d34";

/**
 * A draggable 3D ship model with the hull faces tinted by armour thickness:
 * sides = belt, top = deck. The citadel (the armoured box around magazines and
 * machinery) is an internal volume, so it is reported in the readout rather than
 * drawn. Superstructure, funnel, and turrets are there for recognition only.
 */
export function NavalArmorViewer({ vehicle, className }: { vehicle: NavalVehicle; className?: string }) {
  const armor = vehicle.armor;
  const belt = armor?.beltMm ?? undefined;
  const deck = armor?.deckMm ?? undefined;

  const boxes: ModelBox[] = [
    // Hull — belt on the sides/ends, deck on top.
    { w: 58, d: 300, h: 40, armor: { side: belt, front: belt, rear: belt, top: deck }, showArmorLabels: true },
    // Superstructure block amidships.
    { w: 34, d: 80, h: 24, color: METAL, y: -32, z: -6 },
    // Bridge tower.
    { w: 22, d: 20, h: 22, color: METAL, y: -55, z: -28 },
    // Funnel.
    { w: 14, d: 22, h: 24, color: DARK, y: -32, z: 26 },
    // Fore + aft main turrets.
    { w: 30, d: 32, h: 12, color: METAL, y: -26, z: -106 },
    { w: 30, d: 32, h: 12, color: METAL, y: -26, z: 106 },
  ];

  return (
    <Model3D
      boxes={boxes}
      label="Armour · 3D view"
      ariaLabel={`3D armour model of ${vehicle.name}: sides are belt armour, top is deck armour`}
      height={260}
      shadowW={300}
      initialPitch={-30}
      className={className}
    >
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="Belt" value={armor?.beltMm} unit="mm" />
        <Readout label="Deck" value={armor?.deckMm} unit="mm" />
        <Readout label="Citadel" value={armor?.citadel} />
      </div>
      <p className="mt-2 text-[0.7rem] leading-relaxed text-faint">
        Hull sides show belt armour and the top shows deck armour, coloured by thickness (thin → thick: red, amber,
        green). The citadel — the armoured box around magazines and machinery — is listed above.
      </p>
    </Model3D>
  );
}
