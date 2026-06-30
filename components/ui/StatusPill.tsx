import { cn } from "@/lib/cn";

type Tone = "neutral" | "accent" | "ok" | "alert" | "caution";

const TONES: Record<Tone, string> = {
  neutral: "text-muted border-hairline",
  accent: "text-accent border-[color:var(--accent-dim)]",
  ok: "text-ok border-[color:rgba(91,214,160,0.4)]",
  alert: "text-alert border-[color:rgba(255,92,92,0.4)]",
  caution: "text-caution border-[color:rgba(255,210,74,0.4)]",
};

// Maps acquisition types (§5) to a tone so premium / squadron / event read
// distinctly at a glance.
const ACQUISITION_TONE: Record<string, Tone> = {
  "tech-tree": "neutral",
  premium: "caution",
  squadron: "ok",
  event: "accent",
  gift: "accent",
  "battle-pass": "accent",
};

export function StatusPill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border bg-[rgba(8,10,13,0.5)] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Convenience wrapper that colors an acquisition tag by its type. */
export function AcquisitionPill({ type }: { type: string }) {
  return <StatusPill tone={ACQUISITION_TONE[type] ?? "neutral"}>{type.replace("-", " ")}</StatusPill>;
}
