import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static HTML in /out, deployable to any static host.
  output: "export",
  // Keep Wix-style URLs: /ourphilosophy (no trailing slash).
  trailingSlash: false,
  // Static export: responsive widths are pre-generated at build time (scripts/image-variants.mjs)
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1600, 2560],
    imageSizes: [96, 256, 400],
  },
  // one branded 404 page for both language root layouts
  experimental: { globalNotFound: true },
};

export default nextConfig;
