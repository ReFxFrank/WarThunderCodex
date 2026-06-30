import { cn } from "@/lib/cn";

/** A single instrument readout: a monospace value with a small caps label. */
export function Readout({
  label,
  value,
  unit,
  unverified,
  className,
}: {
  label: string;
  value: number | string | null | undefined;
  unit?: string;
  unverified?: boolean;
  className?: string;
}) {
  const has = value !== null && value !== undefined && value !== "" && !(typeof value === "number" && !Number.isFinite(value));
  const display = has ? (typeof value === "number" && Math.abs(value) >= 1000 ? value.toLocaleString("en-US") : String(value)) : "—";
  return (
    <div className={cn("rounded border border-hairline bg-[rgba(8,10,13,0.45)] px-3 py-2", className)}>
      <div className="label-tag mb-0.5">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className={cn("font-data text-lg", has ? "text-ink" : "text-faint")}>{display}</span>
        {has && unit && <span className="font-data text-[0.7rem] text-muted">{unit}</span>}
      </div>
      {!has && (
        <div className="text-[0.6rem] text-faint" title="Not verified against a source">
          {unverified ? "needs verification" : "no data"}
        </div>
      )}
    </div>
  );
}

/** A label/value row for the dense in-game stat tables. */
export function StatRow({
  label,
  value,
  unit,
  unverified,
}: {
  label: string;
  value: number | string | null | undefined;
  unit?: string;
  unverified?: boolean;
}) {
  const has = value !== null && value !== undefined && value !== "" && !(typeof value === "number" && !Number.isFinite(value));
  return (
    <div className="flex items-center justify-between gap-4 border-b border-hairline py-1.5">
      <span className="text-sm text-muted">{label}</span>
      <span className={cn("font-data text-sm", has ? "text-ink" : "text-faint")} title={!has && unverified ? "needs verification" : undefined}>
        {has ? (typeof value === "number" && Math.abs(value) >= 1000 ? value.toLocaleString("en-US") : String(value)) : "—"}
        {has && unit ? ` ${unit}` : ""}
      </span>
    </div>
  );
}

export function StatTable({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div>
      {title && <div className="label-tag mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
