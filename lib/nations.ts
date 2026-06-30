// Nation metadata used for chips, edges, and nation hubs.
//
// NOTE (§12 of the build brief): the playable-nation list must be confirmed
// against live official sources before top-level claims are treated as final.
// As of the seed grounding there are 10 playable nations; a Korean tree has
// been announced but is not yet in-game, so it is intentionally absent here.

export type Nation =
  | "usa"
  | "germany"
  | "ussr"
  | "britain"
  | "japan"
  | "china"
  | "italy"
  | "france"
  | "sweden"
  | "israel";

export interface NationMeta {
  id: Nation;
  name: string;
  /** CSS custom property holding this nation's subtle accent color. */
  accentVar: string;
  /** A short emoji flag, used only as a lightweight chip glyph. */
  flag: string;
}

export const NATIONS: NationMeta[] = [
  { id: "usa", name: "USA", accentVar: "var(--nation-usa)", flag: "🇺🇸" },
  { id: "germany", name: "Germany", accentVar: "var(--nation-germany)", flag: "🇩🇪" },
  { id: "ussr", name: "USSR", accentVar: "var(--nation-ussr)", flag: "🇷🇺" },
  { id: "britain", name: "Great Britain", accentVar: "var(--nation-britain)", flag: "🇬🇧" },
  { id: "japan", name: "Japan", accentVar: "var(--nation-japan)", flag: "🇯🇵" },
  { id: "china", name: "China", accentVar: "var(--nation-china)", flag: "🇨🇳" },
  { id: "italy", name: "Italy", accentVar: "var(--nation-italy)", flag: "🇮🇹" },
  { id: "france", name: "France", accentVar: "var(--nation-france)", flag: "🇫🇷" },
  { id: "sweden", name: "Sweden", accentVar: "var(--nation-sweden)", flag: "🇸🇪" },
  { id: "israel", name: "Israel", accentVar: "var(--nation-israel)", flag: "🇮🇱" },
];

export const NATION_MAP: Record<Nation, NationMeta> = Object.fromEntries(
  NATIONS.map((n) => [n.id, n]),
) as Record<Nation, NationMeta>;
