// Site-wide configuration: identity, navigation, and the honest data-status
// surface that the home page and every stat block read from.

export const SITE = {
  name: "War Thunder Codex",
  short: "WT Codex",
  tagline: "A research-driven field manual for War Thunder.",
  description:
    "An unofficial, accuracy-first knowledge base for War Thunder — vehicles, " +
    "weapons, ammunition, and mechanics, every in-game value sourced and " +
    "date-stamped. Not affiliated with Gaijin Entertainment.",
  disclaimer:
    "War Thunder Codex is an unofficial fan project. It is not affiliated " +
    "with or endorsed by Gaijin Entertainment. “War Thunder,” vehicle " +
    "names, and related marks are the property of their respective owners.",
} as const;

// The data-status surface. This is treated as first-class UI: the site must
// wear the age of its data honestly. These values describe the dataset target
// and current state, not a fabricated stat — they are updated as content lands.
export const DATA_STATUS = {
  // The patch/update content is being verified against (confirmed live on
  // warthunder.com/en/news, June 2026).
  targetGameVersion: "Heavy Cavalry (2.57)",
  // Phase tracking so the front page is honest about what exists yet. Live
  // dataset counts come from the content engine (getContentCounts), not here.
  phase: "All 10 nations represented · dataset growing toward full roster",
} as const;

export interface NavLink {
  href: string;
  label: string;
  /** Short description shown on the home page entry-point cards. */
  blurb?: string;
}

// Primary navigation, mirroring the information architecture (§6).
export const PRIMARY_NAV: NavLink[] = [
  {
    href: "/getting-started",
    label: "Getting started",
    blurb: "Modes, controls, your first nation, and the early grind.",
  },
  {
    href: "/mechanics",
    label: "Mechanics",
    blurb: "Penetration, armor, the damage model, matchmaking, economy.",
  },
  {
    href: "/ground",
    label: "Ground",
    blurb: "Tanks and SPAA — armor schematics and firepower readouts.",
  },
  {
    href: "/aviation",
    label: "Aviation",
    blurb: "Fighters, bombers, and jets — performance envelopes.",
  },
  {
    href: "/naval",
    label: "Naval",
    blurb: "Boats to battleships — gunnery, torpedoes, citadels.",
  },
  {
    href: "/weapons",
    label: "Weapons",
    blurb: "Gun families, the rounds they fire, and who carries them.",
  },
  {
    href: "/ammunition",
    label: "Ammunition",
    blurb: "Shell types and the post-penetration mechanics behind them.",
  },
  {
    href: "/missiles",
    label: "Missiles",
    blurb: "Air-to-air, ATGM, and SAM families with guidance notes.",
  },
  {
    href: "/compare",
    label: "Compare",
    blurb: "Put two or three same-class vehicles side by side.",
  },
  {
    href: "/glossary",
    label: "Glossary",
    blurb: "Every acronym the rest of the site links into.",
  },
  {
    href: "/about",
    label: "About",
    blurb: "What this is, how it is sourced, and the disclaimer.",
  },
];

// A trimmed set used in the header bar (the long list lives on the home grid).
export const HEADER_NAV: NavLink[] = PRIMARY_NAV.filter((l) =>
  ["/getting-started", "/mechanics", "/ground", "/aviation", "/naval", "/weapons", "/glossary"].includes(
    l.href,
  ),
);
