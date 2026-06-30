// Server/build-time module: builds the search index over validated content.
import MiniSearch from "minisearch";
import {
  getAllVehicles,
  getAllWeapons,
  getAllAmmo,
  getAllMissiles,
  getGlossary,
} from "@/lib/content";
import { getAllArticles } from "@/lib/article-fs";
import { NATION_MAP } from "@/lib/nations";

/**
 * The compile-time search index. We normalize every content type into a flat
 * SearchDoc, build a MiniSearch index, and serialize it (index + stored docs)
 * so the client can hydrate an instant, backend-free search (§9). Built once at
 * build time and emitted as a static JSON file (app/search-index.json/route.ts).
 */

export type SearchType = "vehicle" | "weapon" | "ammo" | "missile" | "article" | "glossary";

export interface SearchDoc {
  id: string; // unique across types, e.g. "vehicle:t-34-1942"
  type: SearchType;
  title: string;
  subtitle?: string;
  /** Concatenated searchable text (kept out of the stored payload to save bytes). */
  text: string;
  url: string;
}

/** Fields MiniSearch tokenizes. `text` carries the bulk of the body. */
export const SEARCH_FIELDS = ["title", "subtitle", "text"] as const;
/** Fields returned with each hit (note: `text` is intentionally omitted). */
export const STORE_FIELDS = ["type", "title", "subtitle", "url"] as const;

export const MINISEARCH_OPTIONS = {
  fields: SEARCH_FIELDS as unknown as string[],
  storeFields: STORE_FIELDS as unknown as string[],
  searchOptions: {
    boost: { title: 3, subtitle: 2 },
    prefix: true,
    fuzzy: 0.2,
  },
};

export async function buildSearchDocuments(): Promise<SearchDoc[]> {
  const docs: SearchDoc[] = [];

  for (const v of getAllVehicles()) {
    const nation = NATION_MAP[v.nation]?.name ?? v.nation;
    docs.push({
      id: `vehicle:${v.id}`,
      type: "vehicle",
      title: v.name,
      subtitle: `${nation} · ${v.subclass} · Rank ${v.rank}`,
      text: [v.summary, v.subclass, nation, v.class, ...v.prosCons.pros, ...v.prosCons.cons].join(" "),
      url: `/vehicle/${v.id}`,
    });
  }

  for (const w of getAllWeapons()) {
    docs.push({
      id: `weapon:${w.id}`,
      type: "weapon",
      title: w.name,
      subtitle: `${w.type}${w.caliberMm ? ` · ${w.caliberMm} mm` : ""}`,
      text: [w.notes, w.type].join(" "),
      url: `/weapon/${w.id}`,
    });
  }

  for (const a of getAllAmmo()) {
    docs.push({
      id: `ammo:${a.id}`,
      type: "ammo",
      title: a.name,
      subtitle: a.type,
      text: [a.mechanics, a.type].join(" "),
      url: `/ammo/${a.id}`,
    });
  }

  for (const m of getAllMissiles()) {
    docs.push({
      id: `missile:${m.id}`,
      type: "missile",
      title: m.name,
      subtitle: `${m.kind} · ${m.guidance}`,
      text: [m.notes, m.kind, m.guidance].join(" "),
      url: `/missile/${m.id}`,
    });
  }

  for (const g of getGlossary()) {
    docs.push({
      id: `glossary:${g.term}`,
      type: "glossary",
      title: g.term,
      subtitle: g.aka?.join(", "),
      text: [g.definition, ...(g.aka ?? [])].join(" "),
      url: `/glossary#${encodeURIComponent(g.term.toLowerCase())}`,
    });
  }

  for (const { meta } of await getAllArticles()) {
    docs.push({
      id: `article:${meta.slug}`,
      type: "article",
      title: meta.title,
      subtitle: meta.category,
      text: [meta.summary, meta.category].join(" "),
      url: `/mechanics/${meta.slug}`,
    });
  }

  return docs;
}

/** Builds a populated MiniSearch instance (server side). */
export async function buildSearchIndex(): Promise<MiniSearch<SearchDoc>> {
  const docs = await buildSearchDocuments();
  const mini = new MiniSearch<SearchDoc>(MINISEARCH_OPTIONS);
  mini.addAll(docs);
  return mini;
}

/** Serializes index + options for the client to rehydrate without a rebuild. */
export async function buildSerializedIndex(): Promise<string> {
  const mini = await buildSearchIndex();
  return JSON.stringify({
    options: { fields: SEARCH_FIELDS, storeFields: STORE_FIELDS },
    index: mini.toJSON(),
  });
}
