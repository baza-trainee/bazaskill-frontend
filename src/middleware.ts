import type { NextRequest, NextResponse } from 'next/server';

import createMiddleware from 'next-intl/middleware';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['ua', 'en', 'pl'],

  // Used when no locale matches
  defaultLocale: 'ua',
  localeDetection: false
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/', // Root path
    '/(ua|en|pl)/:path*', // Internationalized paths
    '/((?!_next|_vercel|.*\\..*).*)' // Exclude special paths and files with extensions
  ]
};
