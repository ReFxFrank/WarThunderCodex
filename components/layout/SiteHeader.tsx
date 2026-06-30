"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { HEADER_NAV, SITE } from "@/lib/site";
import { SearchDialog } from "@/components/search/SearchDialog";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-[rgba(11,14,17,0.72)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        {/* Mark */}
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-wider text-ink">
              WAR THUNDER <span className="text-accent">CODEX</span>
            </span>
            <span className="label-tag text-[0.55rem]">Field manual · unofficial</span>
          </span>
        </Link>

        {/* Primary nav (desktop) */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {HEADER_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded px-2.5 py-1.5 text-sm transition-colors",
                isActive(link.href) ? "text-accent" : "text-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + mobile toggle */}
        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <SearchDialog />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded border border-hairline p-2 text-muted hover:text-ink lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-hairline bg-[rgba(11,14,17,0.96)] px-4 py-2 lg:hidden">
          {HEADER_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded px-2 py-2 text-sm",
                isActive(link.href) ? "text-accent" : "text-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
          <span className="block px-2 pb-2 pt-1 text-[0.7rem] text-faint">{SITE.tagline}</span>
        </nav>
      )}
    </header>
  );
}

/** A compact reticle mark used as the brand glyph. */
function BrandMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0" aria-hidden>
      <circle cx="14" cy="14" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.9" />
      <circle cx="14" cy="14" r="4" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="14" y1="1" x2="14" y2="7" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="14" y1="21" x2="14" y2="27" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="1" y1="14" x2="7" y2="14" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="21" y1="14" x2="27" y2="14" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
}
