import { z } from "zod";
import {
  vehicleSchema,
  weaponSchema,
  ammoSchema,
  missileSchema,
  glossaryTermSchema,
  type Vehicle,
  type Weapon,
  type Ammo,
  type Missile,
  type GlossaryTerm,
} from "@/lib/schema";
import { vehicles } from "@/content/data/vehicles";
import { weapons } from "@/content/data/weapons";
import { ammo } from "@/content/data/ammo";
import { missiles } from "@/content/data/missiles";
import { glossary } from "@/content/data/glossary";

/**
 * Pure content validation — schema checks plus cross-collection referential
 * integrity. Returns a structured report and never throws, so the CLI can print
 * a readable summary. lib/content.ts wraps this and throws at import time so a
 * bad record fails the build.
 */

export interface ContentIssue {
  collection: string;
  id?: string;
  message: string;
}

export interface RawContent {
  vehicles: unknown[];
  weapons: unknown[];
  ammo: unknown[];
  missiles: unknown[];
  glossary: unknown[];
}

export interface ValidationReport {
  ok: boolean;
  issues: ContentIssue[];
  counts: Record<string, number>;
  data: {
    vehicles: Vehicle[];
    weapons: Weapon[];
    ammo: Ammo[];
    missiles: Missile[];
    glossary: GlossaryTerm[];
  };
}

export const rawContent: RawContent = { vehicles, weapons, ammo, missiles, glossary };

function validateArray<T>(
  collection: string,
  items: unknown[],
  schema: z.ZodType<T>,
  idOf: (item: T) => string,
  issues: ContentIssue[],
): T[] {
  const valid: T[] = [];
  const seen = new Set<string>();
  items.forEach((raw, i) => {
    const result = schema.safeParse(raw);
    if (!result.success) {
      const guessId =
        raw && typeof raw === "object" && "id" in raw ? String((raw as { id: unknown }).id) : `#${i}`;
      for (const issue of result.error.issues) {
        issues.push({
          collection,
          id: guessId,
          message: `${issue.path.join(".") || "(root)"}: ${issue.message}`,
        });
      }
      return;
    }
    const id = idOf(result.data);
    if (seen.has(id)) {
      issues.push({ collection, id, message: `duplicate id "${id}"` });
    }
    seen.add(id);
    valid.push(result.data);
  });
  return valid;
}

export function runValidation(raw: RawContent = rawContent): ValidationReport {
  const issues: ContentIssue[] = [];

  const v = validateArray("vehicles", raw.vehicles, vehicleSchema, (x) => x.id, issues);
  const w = validateArray("weapons", raw.weapons, weaponSchema, (x) => x.id, issues);
  const a = validateArray("ammo", raw.ammo, ammoSchema, (x) => x.id, issues);
  const m = validateArray("missiles", raw.missiles, missileSchema, (x) => x.id, issues);
  const g = validateArray("glossary", raw.glossary, glossaryTermSchema, (x) => x.term, issues);

  // --- referential integrity ---------------------------------------------
  const vehicleIds = new Set(v.map((x) => x.id));
  const weaponIds = new Set(w.map((x) => x.id));
  const ammoIds = new Set(a.map((x) => x.id));

  const ref = (collection: string, id: string, kind: string, target: string, set: Set<string>) => {
    if (target && !set.has(target)) {
      issues.push({ collection, id, message: `references unknown ${kind} "${target}"` });
    }
  };

  for (const veh of v) {
    if (veh.class === "ground") {
      if (veh.firepower.mainGunId) ref("vehicles", veh.id, "weapon", veh.firepower.mainGunId, weaponIds);
      for (const ammoId of veh.firepower.ammoTypeIds) ref("vehicles", veh.id, "ammo", ammoId, ammoIds);
    } else if (veh.class === "aviation") {
      for (const fix of veh.armament.fixed) ref("vehicles", veh.id, "weapon", fix.weaponId, weaponIds);
    }
  }
  for (const weap of w) {
    for (const ammoId of weap.ammoTypeIds) ref("weapons", weap.id, "ammo", ammoId, ammoIds);
    for (const vid of weap.usedBy) ref("weapons", weap.id, "vehicle", vid, vehicleIds);
  }

  return {
    ok: issues.length === 0,
    issues,
    counts: {
      vehicles: v.length,
      weapons: w.length,
      ammo: a.length,
      missiles: m.length,
      glossary: g.length,
    },
    data: { vehicles: v, weapons: w, ammo: a, missiles: m, glossary: g },
  };
}
