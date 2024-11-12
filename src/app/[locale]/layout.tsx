import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

import LayoutProvider from '@/components/providers/LayoutProvider';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import type { PageProps } from '@/types';

import './globals.css';

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
  display: 'swap'
});

const tahoma = localFont({
  src: [
    {
      path: '../fonts/Tahoma.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Tahoma-Bold.woff2',
      weight: '800',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-tahoma'
});

const mont = localFont({
  src: [
    {
      path: '../fonts/Mont-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-mont'
});

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata'
  });

  return {
    title: {
      default: t('main_title'),
      template: '%s'
    },
    description: t('main_description'),
    icons: {
      icon: ['/favicon.ico?v=1'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png']
    },
    manifest: '/site.webmanifest'
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/vnd" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16605851615"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16605851615');`}
        </Script>
      </head>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      <body
        className={`${open_sans.variable} ${tahoma.variable} ${mont.variable}`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          ></iframe>
        </noscript>
        <ReactQueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LayoutProvider>
              <main className="min-h-screen bg-graphite">{children}</main>
            </LayoutProvider>
            <NextTopLoader
              color="#4DC760"
              height={2}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #4DC760,0 0 5px #4DC760"
            />
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
