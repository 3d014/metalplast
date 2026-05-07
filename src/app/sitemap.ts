import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const pages = ['', '/about', '/services', '/products', '/gallery', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metalplast.ba';

  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1 : 0.8,
    })),
  ) as MetadataRoute.Sitemap;
}
