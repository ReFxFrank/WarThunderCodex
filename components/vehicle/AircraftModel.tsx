"use client";

import { Model3D, type ModelBox } from "@/components/vehicle/Model3D";
import { isHelicopter } from "@/lib/vehicle";
import type { AviationVehicle } from "@/lib/schema";

const METAL = "#4a545e";
const DARK = "#2a3138";
const GLASS = "#6fa3bd";

// A boxy but recognisable airframe. +z is the nose (so the "Front" button faces
// the camera at the nose). Aircraft don't carry tank-style armour maps in War
// Thunder, so this is a shape/recognition model, not an armour view.
function planeBoxes(): ModelBox[] {
  return [
    { w: 16, d: 150, h: 18, color: METAL }, // fuselage (length along z)
    { w: 12, d: 26, h: 13, color: METAL, z: 86 }, // nose
    { w: 11, d: 26, h: 8, color: GLASS, glassy: true, y: -12, z: 14 }, // canopy
    { w: 150, d: 38, h: 5, color: METAL, z: -4, y: 3 }, // main wings
    { w: 52, d: 18, h: 4, color: METAL, z: -64 }, // tailplane
    { w: 4, d: 20, h: 22, color: METAL, z: -64, y: -19 }, // vertical fin
  ];
}

function heliBoxes(): ModelBox[] {
  return [
    { w: 24, d: 60, h: 30, color: METAL, z: 8 }, // cabin
    { w: 20, d: 16, h: 16, color: GLASS, glassy: true, z: 42, y: 4 }, // cockpit glass
    { w: 7, d: 92, h: 8, color: METAL, z: -42, y: -6 }, // tail boom (back = -z)
    { w: 3, d: 16, h: 22, color: METAL, z: -86, y: -14 }, // tail fin
    { w: 9, d: 4, h: 26, color: DARK, z: -90, y: -14 }, // tail rotor
    { w: 5, d: 5, h: 12, color: DARK, y: -28, z: 8 }, // rotor mast
    { w: 184, d: 7, h: 2, color: DARK, y: -35, z: 8 }, // main rotor blade A
    { w: 7, d: 184, h: 2, color: DARK, y: -35, z: 8 }, // main rotor blade B
    { w: 3, d: 58, h: 3, color: DARK, x: -13, y: 22, z: 6 }, // skid L
    { w: 3, d: 58, h: 3, color: DARK, x: 13, y: 22, z: 6 }, // skid R
  ];
}

export function AircraftModel({ vehicle, className }: { vehicle: AviationVehicle; className?: string }) {
  const heli = isHelicopter(vehicle);
  return (
    <Model3D
      boxes={heli ? heliBoxes() : planeBoxes()}
      label={heli ? "Airframe · 3D view" : "Airframe · 3D view"}
      ariaLabel={`3D model of ${vehicle.name}`}
      height={260}
      shadowW={heli ? 200 : 260}
      initialYaw={-32}
      initialPitch={-18}
      className={className}
    >
      <p className="mt-3 text-[0.7rem] leading-relaxed text-faint">
        A scale 3D model for recognition — drag to orbit. War Thunder aircraft don&apos;t use a tank-style armour map
        (protection is limited to pilot plating and bulletproof glass), so this view shows the airframe, not armour.
      </p>
    </Model3D>
  );
}
