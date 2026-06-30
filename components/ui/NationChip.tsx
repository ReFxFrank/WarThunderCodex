import { cn } from "@/lib/cn";
import { NATION_MAP, type Nation } from "@/lib/nations";

/**
 * A nation flag chip with a subtle nation-colored left edge. The color is used
 * only here and on card edges — never as a page-level theme.
 */
export function NationChip({
  nation,
  className,
  withName = true,
}: {
  nation: Nation;
  className?: string;
  withName?: boolean;
}) {
  const meta = NATION_MAP[nation];
  if (!meta) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border-l-2 bg-[rgba(8,10,13,0.5)] py-0.5 pl-1.5 pr-2 text-xs",
        className,
      )}
      style={{ borderLeftColor: meta.accentVar }}
    >
      <span aria-hidden>{meta.flag}</span>
      {withName && <span className="text-muted">{meta.name}</span>}
    </span>
  );
}
