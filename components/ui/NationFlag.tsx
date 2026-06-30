import { cn } from "@/lib/cn";
import type { Nation } from "@/lib/nations";

/**
 * Hand-rolled SVG nation flags. Emoji flags don't render on Windows (they fall
 * back to the 2-letter country code), so we draw simplified, recognizable flags
 * that look identical on every platform. viewBox is 20×14.
 */

function star(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 5; i++) {
    const ao = (Math.PI / 2) * -1 + (i * 2 * Math.PI) / 5;
    const ai = ao + Math.PI / 5;
    pts.push(`${cx + r * Math.cos(ao)},${cy + r * Math.sin(ao)}`);
    pts.push(`${cx + r * 0.4 * Math.cos(ai)},${cy + r * 0.4 * Math.sin(ai)}`);
  }
  return pts.join(" ");
}

const FLAGS: Record<Nation, React.ReactNode> = {
  usa: (
    <>
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#b22234" />
      ))}
      <rect width="9" height="7" fill="#3c3b6e" />
      {[1.8, 4.5, 7.2].map((x) => [1.6, 3.6, 5.2].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.5" fill="#fff" />))}
    </>
  ),
  germany: (
    <>
      <rect width="20" height="14" fill="#000" />
      <rect y="4.67" width="20" height="4.67" fill="#d00" />
      <rect y="9.33" width="20" height="4.67" fill="#ffce00" />
    </>
  ),
  ussr: (
    <>
      <rect width="20" height="14" fill="#c8102e" />
      <polygon points={star(5, 4.5, 2.6)} fill="#ffd700" />
    </>
  ),
  britain: (
    <>
      <rect width="20" height="14" fill="#012169" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" strokeWidth="2.6" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#c8102e" strokeWidth="1" />
      <rect x="7.5" width="5" height="14" fill="#fff" />
      <rect y="4.5" width="20" height="5" fill="#fff" />
      <rect x="8.5" width="3" height="14" fill="#c8102e" />
      <rect y="5.5" width="20" height="3" fill="#c8102e" />
    </>
  ),
  japan: (
    <>
      <rect width="20" height="14" fill="#fff" />
      <circle cx="10" cy="7" r="3.6" fill="#bc002d" />
    </>
  ),
  china: (
    <>
      <rect width="20" height="14" fill="#de2910" />
      <polygon points={star(4.5, 4, 2.4)} fill="#ffde00" />
      <polygon points={star(8.5, 2, 0.8)} fill="#ffde00" />
      <polygon points={star(9.5, 4.5, 0.8)} fill="#ffde00" />
    </>
  ),
  italy: (
    <>
      <rect width="6.67" height="14" fill="#009246" />
      <rect x="6.67" width="6.67" height="14" fill="#fff" />
      <rect x="13.33" width="6.67" height="14" fill="#ce2b37" />
    </>
  ),
  france: (
    <>
      <rect width="6.67" height="14" fill="#0055a4" />
      <rect x="6.67" width="6.67" height="14" fill="#fff" />
      <rect x="13.33" width="6.67" height="14" fill="#ef4135" />
    </>
  ),
  sweden: (
    <>
      <rect width="20" height="14" fill="#006aa7" />
      <rect x="6" width="2.6" height="14" fill="#fecc00" />
      <rect y="5.7" width="20" height="2.6" fill="#fecc00" />
    </>
  ),
  israel: (
    <>
      <rect width="20" height="14" fill="#fff" />
      <rect y="1.5" width="20" height="2" fill="#0038b8" />
      <rect y="10.5" width="20" height="2" fill="#0038b8" />
      <polygon points={`10,4 12.16,7.75 7.84,7.75`} fill="none" stroke="#0038b8" strokeWidth="0.7" />
      <polygon points={`10,10 12.16,6.25 7.84,6.25`} fill="none" stroke="#0038b8" strokeWidth="0.7" />
    </>
  ),
};

export function NationFlag({
  nation,
  width = 20,
  className,
}: {
  nation: Nation;
  width?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={(width * 14) / 20}
      viewBox="0 0 20 14"
      className={cn("inline-block shrink-0 rounded-[2px]", className)}
      style={{ overflow: "hidden" }}
      role="img"
      aria-label={`${nation} flag`}
    >
      {FLAGS[nation]}
      <rect x="0.25" y="0.25" width="19.5" height="13.5" rx="1.5" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
    </svg>
  );
}
