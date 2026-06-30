import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="label-tag mb-3 text-alert">Signal lost · 404</div>
      <h1 className="font-display text-5xl font-semibold tracking-wide text-ink sm:text-6xl">
        Off the map
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        This route isn&apos;t in the manual. It may have moved, or it hasn&apos;t been charted yet.
        Head back to the home panel and pick a section.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-[#16100a] shadow-[var(--glow-accent)] transition-transform hover:-translate-y-0.5"
      >
        Return to base →
      </Link>
    </Container>
  );
}
