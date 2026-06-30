import { cn } from "@/lib/cn";

const TIER_INFO: Record<number, { label: string; cls: string }> = {
  1: { label: "Tier 1 · official", cls: "text-ok border-[color:rgba(91,214,160,0.4)]" },
  2: { label: "Tier 2 · community", cls: "text-caution border-[color:rgba(255,210,74,0.4)]" },
  3: { label: "Tier 3 · real-world", cls: "text-muted border-hairline" },
};

/** Labels a source by its trust tier (§2 source tiers). */
export function TierBadge({ tier, className }: { tier: number; className?: string }) {
  const info = TIER_INFO[tier] ?? TIER_INFO[3];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded border bg-[rgba(8,10,13,0.5)] px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wider",
        info.cls,
        className,
      )}
    >
      {info.label}
    </span>
  );
}
