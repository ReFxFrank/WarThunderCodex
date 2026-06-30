import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Codex is a static knowledge base. We export a fully static site that
  // nginx can serve directly from a folder (see README for the VPS deploy).
  output: "export",
  // Static export can't use the on-demand image optimizer, so images ship as-is.
  // We prefer hand-rolled SVG schematics anyway (see §1 of the build brief).
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so nginx serves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
