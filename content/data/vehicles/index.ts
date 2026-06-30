import type { Vehicle } from "@/lib/schema";

/**
 * The vehicle roster. Per the scaling plan (§3), the dataset grows one file per
 * nation (e.g. `usa.ts` exporting a `Vehicle[]`) and they are spread in here.
 * Empty until Phase 5 seeds the curated, fully-sourced set.
 *
 * Example for Phase 5:
 *   import { usa } from "./usa";
 *   export const vehicles: Vehicle[] = [...usa, ...germany, ...];
 */
export const vehicles: Vehicle[] = [];
