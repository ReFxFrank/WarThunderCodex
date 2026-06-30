"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type MiniSearchType from "minisearch";
import { cn } from "@/lib/cn";

/**
 * Client-side global search (⌘K). The index is built at compile time and emitted
 * as a static /search-index.json; we lazy-load MiniSearch + the index on first
 * open, rehydrate it, and run an instant, backend-free search over every content
 * type. No network round-trip per keystroke.
 */

interface Hit {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  url: string;
}

const TYPE_LABEL: Record<string, string> = {
  vehicle: "Vehicle",
  weapon: "Weapon",
  ammo: "Ammo",
  missile: "Missile",
  article: "Article",
  glossary: "Glossary",
};

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  const miniRef = useRef<MiniSearchType<Hit> | null>(null);
  const startedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Lazy-load MiniSearch + the prebuilt index exactly once. Called from the open
  // handlers (not an effect) and guarded by a ref so it stays referentially
  // stable and never fires setState synchronously inside an effect.
  const ensureIndex = useCallback(async () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setStatus("loading");
    try {
      const [{ default: MiniSearch }, res] = await Promise.all([
        import("minisearch"),
        fetch("/search-index.json"),
      ]);
      const data = await res.json();
      miniRef.current = MiniSearch.loadJSON(JSON.stringify(data.index), {
        fields: data.options.fields,
        storeFields: data.options.storeFields,
      });
      setStatus("ready");
    } catch {
      startedRef.current = false;
      setStatus("error");
    }
  }, []);

  const openDialog = useCallback(() => {
    setOpen(true);
    ensureIndex();
  }, [ensureIndex]);

  // Global ⌘K / Ctrl+K to open, Esc handled per-dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ensureIndex();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ensureIndex]);

  // On open: focus the input and lock body scroll (no state changes here).
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Run the query whenever it or the index changes.
  useEffect(() => {
    const q = query.trim();
    if (!q || !miniRef.current) {
      setHits([]);
      setActive(0);
      return;
    }
    const results = miniRef.current.search(q, {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 3, subtitle: 2 },
    });
    setHits(results.slice(0, 24) as unknown as Hit[]);
    setActive(0);
  }, [query, status]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setHits([]);
  }, []);

  const go = useCallback(
    (hit?: Hit) => {
      if (!hit) return;
      close();
      router.push(hit.url);
    },
    [close, router],
  );

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, hits.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(hits[active]);
    }
  };

  // Keep the active row in view.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  return (
    <>
      {/* Desktop trigger */}
      <button
        type="button"
        onClick={openDialog}
        className="hidden items-center gap-2 rounded border border-hairline bg-[rgba(8,10,13,0.5)] px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-ink lg:flex"
        aria-label="Search the Codex"
      >
        <SearchGlyph />
        <span>Search</span>
        <kbd className="font-data rounded border border-hairline px-1 text-[0.6rem]">⌘K</kbd>
      </button>

      {/* Mobile trigger */}
      <button
        type="button"
        onClick={openDialog}
        className="rounded border border-hairline p-2 text-muted hover:text-ink lg:hidden"
        aria-label="Search the Codex"
      >
        <SearchGlyph />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* backdrop — opaque enough to fully obscure the page even where the
              browser drops backdrop-filter (notably mobile Chrome). */}
          <button
            type="button"
            aria-label="Close search"
            onClick={close}
            className="absolute inset-0 cursor-default bg-[rgba(3,5,7,0.86)] backdrop-blur-sm"
          />

          {/* Solid (not glass) panel: a translucent + backdrop-blur panel let the
              page bleed through wherever the blur failed, which read as broken. */}
          <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[var(--radius-panel)] border border-[color:var(--hairline-strong)] bg-[var(--bg-raised)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-2 border-b border-hairline px-3">
              <SearchGlyph />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search vehicles, weapons, ammo, mechanics…"
                className="h-12 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-faint"
                role="combobox"
                aria-expanded={hits.length > 0}
                aria-controls="search-results"
                aria-autocomplete="list"
              />
              <kbd className="font-data hidden rounded border border-hairline px-1.5 py-0.5 text-[0.6rem] text-faint sm:block">
                ESC
              </kbd>
            </div>

            <div className="max-h-[55vh] overflow-y-auto">
              {status === "loading" && (
                <p className="px-4 py-6 text-center text-sm text-faint">Loading index…</p>
              )}
              {status === "error" && (
                <p className="px-4 py-6 text-center text-sm text-alert">Search index failed to load.</p>
              )}
              {status === "ready" && query.trim() && hits.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-faint">
                  No matches for “{query.trim()}”.
                </p>
              )}
              {!query.trim() && status !== "loading" && (
                <p className="px-4 py-6 text-center text-sm text-faint">
                  Type to search the entire Codex.
                </p>
              )}
              {hits.length > 0 && (
                <ul id="search-results" ref={listRef} role="listbox" className="py-1">
                  {hits.map((hit, i) => (
                    <li key={hit.id} data-idx={i} role="option" aria-selected={i === active}>
                      <button
                        type="button"
                        onClick={() => go(hit)}
                        onMouseEnter={() => setActive(i)}
                        className={cn(
                          "flex w-full items-center gap-3 px-4 py-2 text-left",
                          i === active ? "bg-[rgba(245,165,36,0.10)]" : "",
                        )}
                      >
                        <span className="label-tag w-16 shrink-0 text-[0.6rem] text-accent">
                          {TYPE_LABEL[hit.type] ?? hit.type}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm text-ink">{hit.title}</span>
                          {hit.subtitle && (
                            <span className="block truncate text-xs text-muted">{hit.subtitle}</span>
                          )}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
