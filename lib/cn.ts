// Minimal className joiner — keeps component markup readable without pulling in
// a dependency for something this small.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
