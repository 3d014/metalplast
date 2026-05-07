import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metalplast.ba';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: '%s | Metalplast',
      default: 'Metalplast',
    },
    openGraph: {
      siteName: 'Metalplast',
      locale,
      type: 'website',
      images: [{ url: '/generic_nasa_proizvodnja.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      languages: {
        bs: `${siteUrl}/bs`,
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
