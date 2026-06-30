import { z } from "zod";
import { NATIONS, type Nation } from "@/lib/nations";

/**
 * Zod schemas mirroring the data model in §5 of the build brief. These are the
 * single source of truth: TS types are inferred from them, and all content is
 * validated against them at build time (lib/content.ts) so a malformed record
 * fails the build rather than shipping a wrong number.
 */

// --- shared primitives ----------------------------------------------------

/** ISO calendar date, e.g. "2026-06-30". Kept strict so date stamps are real. */
export const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "must be an ISO date (YYYY-MM-DD)");

const nationIds = NATIONS.map((n) => n.id) as [Nation, ...Nation[]];
export const nationSchema = z.enum(nationIds);

export const rankSchema = z.enum(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]);

export const vehicleClassSchema = z.enum(["aviation", "ground", "naval"]);

export const sourceRefSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  retrievedAt: isoDate,
});

export const battleRatingsSchema = z.object({
  arcade: z.number().nullable(),
  realistic: z.number().nullable(),
  simulator: z.number().nullable(),
});

/**
 * Provenance carried by every primary record. The accuracy bar (§1) lives here:
 * at least one source, an explicit verification date and patch, and a list of
 * field names that could not be confirmed.
 */
const provenance = {
  sources: z.array(sourceRefSchema).min(1, "every entry needs at least one source"),
  unverified: z.array(z.string()),
  lastVerified: isoDate,
  gameVersion: z.string().min(1),
};

export const acquisitionSchema = z.enum([
  "tech-tree",
  "premium",
  "squadron",
  "event",
  "gift",
  "battle-pass",
]);

export const mediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  credit: z.string().optional(),
  type: z.enum(["schematic", "image"]),
});

// --- vehicles -------------------------------------------------------------

const vehicleBase = {
  id: z.string().min(1),
  name: z.string().min(1),
  nation: nationSchema,
  subclass: z.string().min(1),
  rank: rankSchema,
  battleRatings: battleRatingsSchema,
  acquisition: z.array(acquisitionSchema).min(1),
  releaseUpdate: z.string().optional(),
  summary: z.string().min(1),
  prosCons: z.object({ pros: z.array(z.string()), cons: z.array(z.string()) }),
  playstyle: z.string().min(1),
  history: z.string().optional(),
  media: z.array(mediaSchema),
  ...provenance,
};

export const aviationVehicleSchema = z.object({
  ...vehicleBase,
  class: z.literal("aviation"),
  flight: z.object({
    maxSpeedKph: z.number().nullable(),
    maxSpeedAltM: z.number().nullable(),
    climbMps: z.number().nullable(),
    turnTimeSec: z.number().nullable(),
    structuralLimitKph: z.number().nullable(),
    ceilingM: z.number().nullable(),
    engineCount: z.number().nullable(),
  }),
  armament: z.object({
    fixed: z.array(z.object({ weaponId: z.string(), count: z.number() })),
    suspended: z.array(z.string()).optional(),
  }),
  sensors: z
    .object({ radar: z.string().optional(), irst: z.boolean().optional(), rwr: z.boolean().optional() })
    .optional(),
  countermeasures: z.string().optional(),
});

export const groundVehicleSchema = z.object({
  ...vehicleBase,
  class: z.literal("ground"),
  mobility: z.object({
    maxFwdKph: z.number().nullable(),
    maxRevKph: z.number().nullable(),
    enginePowerHp: z.number().nullable(),
    weightTons: z.number().nullable(),
    powerToWeight: z.number().nullable(),
    reverseGears: z.number().nullable(),
    neutralSteering: z.boolean().nullable(),
  }),
  firepower: z.object({
    mainGunId: z.string().nullable(),
    reloadBaseSec: z.number().nullable(),
    reloadAcedSec: z.number().nullable(),
    vertGuidanceDeg: z.tuple([z.number(), z.number()]).optional(),
    turretTraverseDegSec: z.number().nullable().optional(),
    ammoCapacity: z.number().nullable().optional(),
    ammoTypeIds: z.array(z.string()),
  }),
  armor: z.object({
    hullMm: z
      .object({ front: z.string().optional(), side: z.string().optional(), rear: z.string().optional() })
      .optional(),
    turretMm: z
      .object({ front: z.string().optional(), side: z.string().optional(), rear: z.string().optional() })
      .optional(),
    crewCount: z.number().nullable().optional(),
    era: z.boolean().optional(),
    composite: z.boolean().optional(),
    aps: z.union([z.string(), z.literal(false)]).optional(),
  }),
  optics: z
    .object({
      thermalsGen: z.number().optional(),
      rangefinder: z.boolean().optional(),
      lws: z.boolean().optional(),
    })
    .optional(),
});

export const navalVehicleSchema = z.object({
  ...vehicleBase,
  class: z.literal("naval"),
  hull: z.object({
    displacementTons: z.number().nullable().optional(),
    lengthM: z.number().nullable().optional(),
    crew: z.number().nullable().optional(),
  }),
  propulsion: z.object({ maxKnots: z.number().nullable() }),
  armament: z.object({
    mainBattery: z.string().optional(),
    secondary: z.string().optional(),
    aa: z.string().optional(),
    torpedoes: z.string().optional(),
    depthCharges: z.boolean().optional(),
  }),
  armor: z
    .object({ beltMm: z.string().optional(), deckMm: z.string().optional(), citadel: z.string().optional() })
    .optional(),
  survivability: z.string().optional(),
});

export const vehicleSchema = z.discriminatedUnion("class", [
  aviationVehicleSchema,
  groundVehicleSchema,
  navalVehicleSchema,
]);

// --- weapons & projectiles ------------------------------------------------

export const weaponSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  type: z.enum(["cannon", "autocannon", "machine-gun", "naval-gun", "rocket-pod"]),
  caliberMm: z.number().nullable(),
  fireRateRpm: z.number().nullable().optional(),
  muzzleVelocityMps: z.number().nullable().optional(),
  ammoTypeIds: z.array(z.string()),
  usedBy: z.array(z.string()),
  notes: z.string(),
  ...provenance,
});

export const ammoTypeSchema = z.enum([
  "AP",
  "APHE",
  "APC",
  "APCBC",
  "APCR",
  "APDS",
  "APFSDS",
  "HEAT",
  "HEATFS",
  "HESH",
  "HE",
  "SAP",
  "shrapnel",
  "AP-tracer",
  "incendiary",
  "other",
]);

export const ammoSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  type: ammoTypeSchema,
  penetration: z.array(
    z.object({ rangeM: z.number(), penMm: z.number(), angleDeg: z.number() }),
  ),
  velocityMps: z.number().nullable().optional(),
  explosiveMassTntEqG: z.number().nullable().optional(),
  ricochetAnglesDeg: z.object({ min: z.number(), max: z.number() }).optional(),
  normalizationDeg: z.number().nullable().optional(),
  fuseSensitivityMm: z.number().nullable().optional(),
  fuseDelayM: z.number().nullable().optional(),
  mechanics: z.string(),
  ...provenance,
});

export const missileSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  kind: z.enum(["air-to-air", "air-to-ground", "atgm", "sam", "naval"]),
  guidance: z.enum(["IR", "SARH", "ARH", "SACLOS", "beam-riding", "laser", "TV", "inertial+datalink"]),
  maxRangeM: z.number().nullable().optional(),
  minRangeM: z.number().nullable().optional(),
  maxMach: z.number().nullable().optional(),
  overloadG: z.number().nullable().optional(),
  seekerFovDeg: z.number().nullable().optional(),
  allAspect: z.boolean().optional(),
  irccm: z.boolean().optional(),
  flareResistanceNote: z.string().optional(),
  notes: z.string(),
  ...provenance,
});

// --- articles & glossary --------------------------------------------------

export const articleCategorySchema = z.enum([
  "getting-started",
  "mechanics",
  "economy",
  "aviation",
  "ground",
  "naval",
  "weapons",
  "glossary",
]);

/** Frontmatter contract for MDX articles (the body lives in the .mdx file). */
export const articleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  category: articleCategorySchema,
  summary: z.string().min(1),
  relatedVehicleIds: z.array(z.string()).optional(),
  relatedWeaponIds: z.array(z.string()).optional(),
  relatedArticleSlugs: z.array(z.string()).optional(),
  sources: z.array(sourceRefSchema).min(1),
  lastUpdated: isoDate,
});

export const glossaryTermSchema = z.object({
  term: z.string().min(1),
  aka: z.array(z.string()).optional(),
  definition: z.string().min(1),
  seeAlso: z.array(z.string()).optional(),
});

// --- inferred TS types ----------------------------------------------------

export type SourceRef = z.infer<typeof sourceRefSchema>;
export type BattleRatings = z.infer<typeof battleRatingsSchema>;
export type Acquisition = z.infer<typeof acquisitionSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type AviationVehicle = z.infer<typeof aviationVehicleSchema>;
export type GroundVehicle = z.infer<typeof groundVehicleSchema>;
export type NavalVehicle = z.infer<typeof navalVehicleSchema>;
export type Vehicle = z.infer<typeof vehicleSchema>;
export type Weapon = z.infer<typeof weaponSchema>;
export type AmmoType = z.infer<typeof ammoTypeSchema>;
export type Ammo = z.infer<typeof ammoSchema>;
export type Missile = z.infer<typeof missileSchema>;
export type ArticleCategory = z.infer<typeof articleCategorySchema>;
export type Article = z.infer<typeof articleSchema>;
export type GlossaryTerm = z.infer<typeof glossaryTermSchema>;
export type Rank = z.infer<typeof rankSchema>;
export type VehicleClass = z.infer<typeof vehicleClassSchema>;
