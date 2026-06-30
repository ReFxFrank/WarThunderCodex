type VehicleClass = "aviation" | "ground" | "naval";

/**
 * Minimal, original line-icons for the three vehicle classes. Hand-rolled SVG
 * (no icon dependency) keeps the linework consistent with the schematics.
 */
export function ClassIcon({
  kind,
  size = 20,
  className,
}: {
  kind: VehicleClass;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    role: "img" as const,
    "aria-label": `${kind} class`,
  };
  switch (kind) {
    case "aviation":
      return (
        <svg {...common}>
          <path d="M12 3c1 0 1.5 1.2 1.5 3v3l7 4v2l-7-2v3l2 1.5V21l-3.5-1L8.5 21v-1.5L10.5 18v-3l-7 2v-2l7-4V6c0-1.8.5-3 1.5-3Z" />
        </svg>
      );
    case "ground":
      return (
        <svg {...common}>
          <rect x="3" y="13" width="14" height="5" rx="1" />
          <path d="M6 13v-2h6l3 2" />
          <path d="M15 11h6l-1 2h-3" />
          <circle cx="6" cy="19" r="1.2" />
          <circle cx="10" cy="19" r="1.2" />
          <circle cx="14" cy="19" r="1.2" />
        </svg>
      );
    case "naval":
      return (
        <svg {...common}>
          <path d="M3 14h17l-2 5H6.5L3 14Z" />
          <path d="M6 14v-3h7l2 3" />
          <path d="M9 11V8h2v3" />
          <path d="M3 14c2 1.2 4 1.2 6 0s4-1.2 6 0" opacity="0.5" />
        </svg>
      );
  }
}
