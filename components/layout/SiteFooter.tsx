import Link from "next/link";
import { PRIMARY_NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-hairline bg-[rgba(8,10,13,0.5)]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="font-display text-lg font-semibold tracking-wider text-ink">
              WAR THUNDER <span className="text-accent">CODEX</span>
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-faint">{SITE.disclaimer}</p>
          </div>

          <nav className="text-sm">
            <div className="label-tag mb-2">Browse</div>
            <ul className="space-y-1.5">
              {PRIMARY_NAV.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="text-sm">
            <div className="label-tag mb-2">Reference</div>
            <ul className="space-y-1.5">
              {PRIMARY_NAV.slice(6).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="seam my-6" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-faint sm:flex-row sm:items-center">
          <span>
            Unofficial fan project · not affiliated with or endorsed by Gaijin Entertainment.
          </span>
          <span className="font-data">Accuracy first · every stat sourced &amp; date-stamped</span>
        </div>
      </div>
    </footer>
  );
}
