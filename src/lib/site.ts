// Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every deployment; NEXT_PUBLIC_SITE_URL overrides it.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);
