import type { NextConfig } from "next";

/**
 * GitHub Pages is a static host. This config emits a fully static `out/`
 * folder (no Node server, no image optimizer).
 *
 * User site (https://USERNAME.github.io):
 *   leave NEXT_PUBLIC_BASE_PATH unset.
 *
 * Project site (https://USERNAME.github.io/REPO):
 *   set NEXT_PUBLIC_BASE_PATH=/REPO in `.env.local` and in the
 *   GitHub Actions workflow env. Example: /Nofolio
 */
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(repoBase
    ? {
        basePath: repoBase,
        assetPrefix: repoBase,
      }
    : {}),
};

export default nextConfig;
