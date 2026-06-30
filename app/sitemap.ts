import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import {
  getAllVehicles,
  getAllWeapons,
  getAllAmmo,
  getAllMissiles,
} from "@/lib/content";
import { getAllArticles } from "@/lib/article-fs";
import { NATIONS } from "@/lib/nations";

// Static sitemap, generated at build time (output: "export" emits sitemap.xml).
// Enumerates every static route plus every content detail page.
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, "");
  const url = (path: string) => `${base}${path}`;

  const staticPaths = [
    "/",
    "/getting-started",
    "/mechanics",
    "/ground",
    "/aviation",
    "/helicopters",
    "/naval",
    "/weapons",
    "/ammunition",
    "/missiles",
    "/compare",
    "/glossary",
    "/about",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: url(p),
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));

  for (const n of NATIONS) entries.push({ url: url(`/nations/${n.id}`), priority: 0.6 });
  for (const v of getAllVehicles()) entries.push({ url: url(`/vehicle/${v.id}`), priority: 0.6 });
  for (const w of getAllWeapons()) entries.push({ url: url(`/weapon/${w.id}`), priority: 0.5 });
  for (const a of getAllAmmo()) entries.push({ url: url(`/ammo/${a.id}`), priority: 0.5 });
  for (const m of getAllMissiles()) entries.push({ url: url(`/missile/${m.id}`), priority: 0.5 });
  for (const { meta } of await getAllArticles())
    entries.push({ url: url(`/mechanics/${meta.slug}`), priority: 0.6 });

  return entries;
}
