# War Thunder Codex

A premium, accuracy-first, research-driven knowledge base for the game **War Thunder** —
vehicles, weapons, ammunition, and the mechanics underneath, presented with a backlit
instrument-panel visual identity.

> **Unofficial fan project.** Not affiliated with or endorsed by Gaijin Entertainment.
> "War Thunder," vehicle names, and related marks are the property of their respective owners.

## What makes this different

1. **Accuracy.** Every in-game value (battle ratings, armor, penetration, speed, reload, …)
   traces to a real source and is date-stamped. Values that cannot be verified are marked
   _unverified_ and rendered as a visible gap — never guessed.
2. **Craft.** The UI is built to feel like a backlit instrument cluster / classified field
   manual, not a generic docs template. The visual identity is part of the deliverable.

The full build brief lives in the project history; the sourcing policy is summarized on the
in-app [About page](./app/about/page.tsx).

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**, statically generated (`output: "export"`).
- **Tailwind CSS v4** with a custom token layer (the design system) in `app/globals.css`.
- **Fonts** via `next/font` (self-hosted at build): Saira Condensed (display),
  IBM Plex Sans (body), JetBrains Mono (data readouts).
- Content will live in-repo as typed data + MDX (Phase 1 onward) — no database.

## Project structure

```
app/                     # App Router routes (home, mechanics, class browsers, about, …)
  globals.css            # design tokens + glass/atmosphere/motion utilities
  layout.tsx             # fonts, header, footer, atmosphere, metadata
components/
  layout/                # SiteHeader, SiteFooter, Atmosphere, Container
  ui/                    # GlassCard, Gauge, BrReticle, StatusPill, NationChip, …
lib/
  site.ts                # site config, navigation, data-status surface
  nations.ts             # nation metadata (chips, accents)
  cn.ts                  # className helper
content/                 # (Phase 1) typed data + MDX articles
scripts/                 # (Phase 1) schema validation + import scaffolding
```

## Local development

Requires Node.js 20.9+ (Next 16 minimum).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build → static export in ./out
npm run start    # serve the production build locally (next start)
npm run lint     # ESLint (next build does NOT lint in Next 16)
npm run validate # schema + referential-integrity check over all content
```

## Content engine

Content is file-based and validated against Zod schemas (`lib/schema.ts`) at build time —
a malformed record or a dangling cross-reference **fails the build**.

- **Structured data** (vehicles, weapons, ammo, missiles, glossary) lives under
  `content/data/**` as typed TS modules, loaded via `lib/content.ts`.
- **Articles** are MDX under `content/articles/**` with schema-checked frontmatter
  (`lib/articles.ts`); see `content/articles/README.md` for the frontmatter contract.
- **Search** is a client-side MiniSearch index built at compile time over every content
  type and emitted to `/search-index.json` (`lib/search.ts`).

Run `npm run validate` for a readable report; it exits non-zero on any issue, so it can gate CI.

## Building for production

```bash
npm run build
```

This produces a fully static site in `./out` (HTML + `_next/` assets, self-hosted fonts).
No Node.js runtime is required to serve it.

## Deploying to the VPS (nginx, static root)

The Codex is a static site, so the simplest robust deploy is to serve `./out` directly with
nginx — no app server, no process to keep alive.

1. **Build** locally or in CI, then sync the output to the server:

   ```bash
   npm ci && npm run build
   rsync -avz --delete ./out/ deploy@your-vps:/var/www/war-thunder-codex/
   ```

2. **nginx site config** (`/etc/nginx/sites-available/war-thunder-codex`):

   ```nginx
   server {
     listen 80;
     server_name codex.example.com;
     root /var/www/war-thunder-codex;

     # Clean URLs: the export uses trailingSlash, so /about/ → /about/index.html
     index index.html;

     location / {
       try_files $uri $uri/ $uri.html /404.html;
     }

     # Long-cache the immutable build assets
     location /_next/static/ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }

     error_page 404 /404.html;
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/war-thunder-codex /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

   Add TLS with certbot (`sudo certbot --nginx -d codex.example.com`) once DNS resolves.

### Alternative: Node server behind systemd

If you later need server features that preclude static export, switch to a standalone Node
build and run it under systemd. Sketch:

```ini
# /etc/systemd/system/war-thunder-codex.service
[Unit]
Description=War Thunder Codex (Next.js)
After=network.target

[Service]
WorkingDirectory=/srv/war-thunder-codex
ExecStart=/usr/bin/node node_modules/next/dist/bin/next start -p 3000
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

…then reverse-proxy `localhost:3000` from nginx. The static-root path above is preferred while
the site remains fully static.

## Build status

This repository is being built in phases (deliberately, stopping for review at each boundary):

- [x] **Phase 0 — Scaffold & identity.** Design tokens, layout, instrument primitives
      (glass card, gauge, BR reticle, pills, nation chip), home page, placeholder routes,
      About page with sourcing policy, static export verified.
- [x] **Phase 1 — Content engine.** TS types + Zod schemas (`lib/schema.ts`), typed loaders
      with build-time validation that fails on bad data (`lib/content.ts`,
      `lib/validate-content.ts`), MDX pipeline (`lib/articles.ts`), compile-time search index
      emitted as a static file (`lib/search.ts` → `/search-index.json`), and the
      `npm run validate` CLI.
- [x] **Phase 2 — Knowledge backbone.** 16 original mechanics + getting-started articles and an
      87-term glossary, each researched against and cited to live Tier-1 official sources,
      adversarially fact-checked (every citation re-fetched), and date-stamped to Heavy Cavalry (2.57).
- [ ] **Phase 3 — Vehicle system.** Detail template + instrument cluster, nation hubs, browsers.
- [ ] **Phase 4 — Weapons system.** Weapon / ammo / missile pages, comparison tool.
- [ ] **Phase 5 — Seed dataset + tooling.** Curated, fully-sourced vehicle set + import scaffold.
- [ ] **Phase 6 — Polish & ship.** Performance, a11y, responsive QA, final deploy docs.

## Accuracy & sourcing

No fabricated stats. Every vehicle / weapon / ammo / missile entry will carry at least one
source reference plus `lastVerified` and `gameVersion`. In-game values are kept strictly
separate from real-world history, all prose is original, and build-time schema validation
(Phase 1) will fail the build on malformed content.
