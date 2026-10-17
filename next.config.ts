import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static HTML in /out, deployable to any static host.
  output: "export",
  // Keep Wix-style URLs: /ourphilosophy (no trailing slash).
  trailingSlash: false,
  images: { unoptimized: true },
  // one branded 404 page for both language root layouts
  experimental: { globalNotFound: true },
};

export default nextConfig;
