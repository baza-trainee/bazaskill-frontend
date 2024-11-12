import { notFound } from 'next/navigation';

import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['ua', 'en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

export const localePrefix = undefined;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/why-juniors': '/why-juniors',
  '/candidates': '/candidates',
  '/contacts': '/contacts'
};
