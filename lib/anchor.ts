/** Normalizes a term into a URL/DOM-safe anchor id (no whitespace). */
export function anchorId(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
