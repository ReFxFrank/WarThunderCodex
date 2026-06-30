import { cn } from "@/lib/cn";

type GlassCardProps<T extends React.ElementType> = {
  as?: T;
  /** Adds the hover-lift + accent edge glow (for clickable cards). */
  interactive?: boolean;
  /** Uses the more opaque glass for dense, data-heavy panels. */
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * The base surface of the whole site: translucent gunmetal glass over a blur,
 * a hairline border, and a faint inner glow. Everything quiet lives on these.
 */
export function GlassCard<T extends React.ElementType = "div">({
  as,
  interactive = false,
  strong = false,
  className,
  children,
  ...rest
}: GlassCardProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  return (
    <Tag
      className={cn(
        "glass",
        strong && "glass-strong",
        interactive && "lift",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
