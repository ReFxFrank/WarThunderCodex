import { cn } from "@/lib/cn";

/**
 * A section heading with a monospace eyebrow tag, in the field-manual voice.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-5", className)}>
      {eyebrow && <div className="label-tag mb-1.5 text-accent">{eyebrow}</div>}
      <h2 className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">{title}</h2>
      {children && <p className="mt-2 max-w-2xl text-sm text-muted">{children}</p>}
    </div>
  );
}
