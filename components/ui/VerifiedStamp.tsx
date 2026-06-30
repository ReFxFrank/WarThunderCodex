import { cn } from "@/lib/cn";

/**
 * The "Verified <date> · Update <name>" line — a first-class UI element so the
 * age of the data is always visible (§9). When a date is missing it reads as
 * unverified rather than pretending freshness.
 */
export function VerifiedStamp({
  lastVerified,
  gameVersion,
  className,
}: {
  lastVerified?: string | null;
  gameVersion?: string | null;
  className?: string;
}) {
  const verified = Boolean(lastVerified);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-data text-[0.7rem]",
        verified ? "text-muted" : "text-faint",
        className,
      )}
    >
      <span
        className={cn("inline-block h-1.5 w-1.5 rounded-full", verified ? "bg-ok pulse-dot" : "bg-faint")}
        aria-hidden
      />
      {verified ? (
        <>
          <span>Verified {lastVerified}</span>
          {gameVersion && (
            <>
              <span className="text-faint">·</span>
              <span>Update {gameVersion}</span>
            </>
          )}
        </>
      ) : (
        <span>Unverified — no source date recorded</span>
      )}
    </span>
  );
}
