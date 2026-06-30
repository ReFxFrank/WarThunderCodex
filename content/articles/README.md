# Articles (MDX)

Long-form prose — mechanics, getting-started, guides — lives here as `.mdx` files.
Authored in Phase 2 onward. They are loaded and validated by `lib/articles.ts`.

## Layout

Organize by category folder, e.g.:

```
content/articles/
  mechanics/penetration.mdx
  getting-started/first-battle.mdx
```

Files beginning with `_` (e.g. `_template.mdx`) are ignored by the loader.

## Frontmatter contract

Every article needs YAML frontmatter satisfying the `Article` schema in
`lib/schema.ts`. Build fails on invalid frontmatter.

```mdx
---
slug: penetration
title: How penetration works
category: mechanics
summary: An original, one-paragraph overview of the page.
relatedVehicleIds: []        # optional
relatedWeaponIds: []         # optional
relatedArticleSlugs: []      # optional
sources:                     # at least one; Tier 1 for in-game facts
  - label: Official wiki — Ammunition
    url: https://wiki.warthunder.com/Ammunition
    tier: 1
    retrievedAt: 2026-06-30
lastUpdated: 2026-06-30
---

Body in **MDX**. All prose must be original (§1). Facts may be reported;
wording must be our own.
```

## Rules

- Original prose only — never copy sentences from wiki/forum sources.
- In-game values stay separate from real-world history.
- Cite Tier-1 sources for any in-game fact; date-stamp with `lastUpdated`.
