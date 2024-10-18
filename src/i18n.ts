import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
export const locales = ['ua', 'en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocale))
    notFound();

  return {
    messages: (
      await import(`../messages/${baseLocale}.json`)
    ).default,
  };
});

export const localePrefix = undefined;

export const pathnames = {
  '/': '/',
};
