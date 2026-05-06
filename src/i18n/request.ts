import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

const messageMap = {
  bs: () => import('../../messages/bs.json'),
  en: () => import('../../messages/en.json'),
  de: () => import('../../messages/de.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await messageMap[locale as keyof typeof messageMap]()).default,
  };
});