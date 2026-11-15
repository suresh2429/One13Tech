export function absoluteUrl(url: string, Astro: any) {
  const parsedUrl = new URL(url, Astro.url.href);

  // Preserve external URLs.
  const siteOrigin = Astro.site
    ? new URL(Astro.site).origin
    : Astro.url.origin;

  if (parsedUrl.origin !== siteOrigin) {
    return parsedUrl.href;
  }

  // Apply Astro's configured deployment base path.
  const basePath = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");

  if (
    basePath &&
    parsedUrl.pathname !== basePath &&
    !parsedUrl.pathname.startsWith(`${basePath}/`)
  ) {
    parsedUrl.pathname = `${basePath}${parsedUrl.pathname.startsWith("/") ? "" : "/"}${parsedUrl.pathname}`;
  }

  return parsedUrl.href;
}