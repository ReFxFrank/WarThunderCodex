# Adding data to the Codex — the per-entry workflow

This is the repeatable process for growing the dataset toward full-roster coverage
**without re-architecting anything**. It applies to vehicles, weapons, ammunition,
and missiles. The golden rule sits above everything else:

> **Never guess a number.** Every in-game value must come from a cited Tier-1
> source. If you can't confirm it, leave it `null` and list the field in
> `unverified[]`. A visible gap is required; a confident wrong number is a build
> failure.

## Source tiers

| Tier | Use for | Examples |
| ---- | ------- | -------- |
| **1 — official** | all in-game stat fields | `wiki.warthunder.com`, `old-wiki.warthunder.com`, `warthunder.com/en/news` (devblogs/changelogs) |
| **2 — community** | "is it strong at its BR" context only, always labeled unofficial | thunderskill, statshark |
| **3 — real-world** | the optional history prose + real photos only — **never** an in-game stat | Wikipedia, Wikimedia Commons |

Record `tier`, a `label`, the `url`, and `retrievedAt` (ISO date) on every source.
Set `lastVerified` (ISO) and `gameVersion` (the update name, e.g. `Heavy Cavalry (2.57)`)
on every record.

---

## Path A — add one vehicle by hand

1. **Scaffold a schema-valid stub** so you start valid:

   ```bash
   npm run import -- --kind vehicle --class ground --id is-2 --name "IS-2" \
     --nation ussr --subclass "Heavy tank" --rank IV
   ```

   Paste the printed object into the right file (one array per file):
   `content/data/vehicles/index.ts`. (Weapons/ammo/missiles go in their sibling
   `content/data/**` files.)

2. **Open the vehicle's official wiki page** (`wiki.warthunder.com/unit/<code>`).
   Read the stat card and fill in:
   - `battleRatings` (AB/RB/SB),
   - mobility / flight / hull figures,
   - firepower (reload stock & aced, depression/elevation, traverse, ammo count),
   - armour (hull & turret front/side/rear — keep strings like `"80 + 20 ERA"`).

   For anything the page doesn't clearly show, **keep it `null` and leave the field
   name in `unverified[]`**. (The wiki sometimes renders AB/RB/SB cells as one
   concatenated string — if you can't split it cleanly, null it.)

3. **Write original prose** — `summary`, `prosCons`, `playstyle`, optional
   `history`. Report facts; never copy wiki wording.

4. **Wire references**: set `firepower.mainGunId` (ground) / `armament.fixed[].weaponId`
   (air) to the gun's id, and `ammoTypeIds` to its shells. Seed those weapon/ammo
   records too (Path A again, `--kind weapon|ammo`). Dangling references are
   non-fatal warnings, so you can add them in any order.

5. **Replace the TODO source** with the real wiki URL + today's `retrievedAt`, set
   `gameVersion`, and `lastVerified`.

6. **Validate**:

   ```bash
   npm run validate   # schema + referential integrity; exits non-zero on real errors
   npm run build      # final guard — build fails on malformed content
   ```

---

## Path B — research-assisted batch (the workflow)

For batches, the research→write→**verify** workflow does the live sourcing and
adversarial fact-check, then a generator merges the result.

1. Edit the vehicle list in `scratchpad`'s workflow script (or author a new spec):
   each item is `{ id, name, nation, class, subclass, mainGunId | fixedArmament }`,
   plus the `weapons` they use. Keep ids consistent between vehicles and weapons.
2. Run the workflow (it writes a JSON result file). Each vehicle is researched,
   written to the schema, then independently verified — every figure re-checked
   against the wiki or nulled and flagged.
3. Generate + **merge** into the dataset (does not clobber prior entries):

   ```bash
   node scripts/gen-vehicles-from-workflow.mjs <workflow-output.json>   # vehicles + weapons
   node scripts/gen-ammo-from-workflow.mjs     <workflow-output.json>   # ammo + missiles
   ```
4. Reconcile any verifier-corrected ids (e.g. a gun's real designation differing
   from your spec), then `npm run validate && npm run build`.

> The merge generators read the existing array and merge by `id`, so batches
> accumulate. Run them per batch; commit each batch.

---

## Adding a real-world photo (optional, history only)

Real photos are allowed because the vehicles are real — under strict conditions:

- **Public Domain or CC-BY / CC-BY-SA only.** No CC-NC/ND, no "all rights
  reserved", no game art/screenshots.
- **Self-host** it (download into `public/vehicles/<id>.jpg`) — never hotlink.
- **Credit** it: `media: [{ src, alt, credit: "<author> · <license> · <source>", type: "image" }]`.
- It renders **only in the "Real-world history" region**, separate from in-game stats.

`scripts/integrate-photos.mjs` automates download + crediting from a verified
manifest (see its header).

---

## Growing toward full coverage

The roster is ~2,500 vehicles and changes every patch, so this is ongoing:

- Work in **batches** (a nation's tree, or a BR bracket across nations). Commit each.
- Re-confirm the nation list, rank ceilings, modes, and BR ceiling against live
  official sources before relying on them — the game moves every patch (§12).
- Keep every entry sourced and date-stamped; let `unverified[]` carry the honest gaps.

## File map

```
content/data/vehicles/index.ts   weapons/index.ts   ammo/index.ts   missiles/index.ts
content/data/glossary.ts         content/articles/**.mdx
lib/schema.ts                    # the source of truth (Zod + types)
lib/validate-content.ts          # schema + referential checks
scripts/import.ts                # stub generator (npm run import)
scripts/validate.ts              # npm run validate
scripts/gen-*-from-workflow.mjs  # merge workflow output → typed data
scripts/integrate-photos.mjs     # download + credit real-world photos
```
