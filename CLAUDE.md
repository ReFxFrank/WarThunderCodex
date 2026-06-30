@AGENTS.md

# War Thunder Codex — working notes for Claude

This is a premium, accuracy-first knowledge base for War Thunder, built in phases.
Read this before continuing work in a new session.

## Non-negotiable rules (these override convenience)

1. **No fabricated stats.** Every in-game numeric value on a vehicle/weapon/ammo/missile
   entry must come from a cited source captured in that entry's `sources` array. If a value
   can't be found, set it to `null`, add the field name to `unverified[]`, and let the UI
   render it as a visible gap. A confident wrong number is the worst possible outcome.
2. **In-game ≠ real-world.** Keep balanced in-game stats separate from historical prose,
   each clearly labeled. Never blend a real-world figure into an in-game stat table.
3. **Date-stamp everything.** Every entry carries `lastVerified` (ISO) and `gameVersion`.
4. **Original prose.** Report facts freely; write all descriptions/tactics/mechanics in our
   own words. Prefer hand-rolled SVG schematics to scraped images.
5. **Verify live before hardcoding** nation list, rank ceilings, modes, and BR ceiling —
   the game changes every patch.

## Source tiers (record `tier` on every SourceRef)

- Tier 1 — official: `wiki.warthunder.com`, `old-wiki.warthunder.com`, `warthunder.com/en/news`.
- Tier 2 — community meta (label unofficial): thunderskill, statshark.
- Tier 3 — real-world history only (never for in-game stat fields).

## Build phases (stop for review at each boundary)

- Phase 0 ✅ Scaffold & identity (design tokens, layout, instrument primitives, home, stubs).
- Phase 1 — Content engine: TS types + Zod schemas, typed loaders w/ build-time validation,
  MDX pipeline, search index, `scripts/validate` CLI.
- Phase 2 — Knowledge backbone: mechanics + getting-started articles, full glossary.
- Phase 3 — Vehicle system: detail template + instrument cluster (3 class variants),
  armor-schematic SVG, nation hubs, class browsers.
- Phase 4 — Weapons system: weapon/ammo/missile pages, comparison tool.
- Phase 5 — Seed dataset (~10–15 vehicles/nation, fully sourced) + import scaffold + workflow.
- Phase 6 — Polish & ship: perf, a11y, reduced-motion, responsive QA, deploy docs.

## Conventions

- Routes in `app/`, primitives in `components/ui`, layout in `components/layout`.
- Design tokens + utilities (`.glass`, `.font-data`, `.label-tag`, `.power-on`, atmosphere,
  reduced-motion handling) live in `app/globals.css`. Keep boldness in the instrument cluster;
  keep everything else quiet (glass cards, hairlines, disciplined spacing).
- Static export (`output: "export"`); build → `./out`. `next build` does NOT lint in Next 16
  — run `npm run lint` separately.
- Branch: `claude/war-thunder-codex-9c58ex`.
