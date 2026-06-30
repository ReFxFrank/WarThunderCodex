import { buildSerializedIndex } from "@/lib/search";

// Emit the prebuilt search index as a static file at build time. With
// `output: "export"`, this is written to out/search-index.json for the
// client-side search to fetch once and rehydrate (no backend).
export const dynamic = "force-static";

export async function GET() {
  const body = await buildSerializedIndex();
  return new Response(body, {
    headers: { "content-type": "application/json" },
  });
}
