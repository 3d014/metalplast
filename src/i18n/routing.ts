import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['bs', 'en', 'de'],
  defaultLocale: 'bs',
  localeDetection: false,
});
