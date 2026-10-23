export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://rezanoel.github.io/Nofolio";

/** Prefix a public-root path so it still works under /repo-name on GitHub Pages. */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
