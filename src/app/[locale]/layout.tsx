import type { Metadata } from 'next';
import ReactQueryProvider from './providers/ReactQueryProvider';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale,
} from 'next-intl/server';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import LayoutProvider from './providers/LayoutProvider';
import { GoogleTagManager } from '@next/third-parties/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
  display: 'swap',
});

const tahoma = localFont({
  src: [
    {
      path: '../../../public/fonts/Tahoma.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Tahoma-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-tahoma',
});

const mont = localFont({
  src: [
    {
      path: '../../../public/fonts/Mont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-mont',
});

interface MainPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: MainPageProps): Promise<Metadata> {
  return {
    title: {
      default: `Baza Skill - ${
        params.locale === 'ua'
          ? 'рекрутинг junior спеціалістів'
          : params.locale === 'en'
            ? 'recruiting junior specialists'
            : 'rekrutacja młodszych specjalistów'
      }`,
      template: '%s',
    },
    description: `BazaSkill ${
      params.locale === 'ua'
        ? 'Знайдіть нових зірок ★ серед junior-розробників! Ваш надійний провідник у світі ІТ талантів. Перевірені junior для роботи вже сьогодні ☎ +380956621073'
        : params.locale === 'en'
          ? 'Find new stars ★ among junior developers! Your trusted guide to the world of IT talent. Checked juniors for work today ☎ +380956621073'
          : 'Znajdź nowe gwiazdy ★ wśród młodszych programistów! Twój zaufany przewodnik po świecie talentów IT. Sprawdziliśmy dzisiaj juniorów do pracy ☎ +380956621073'
    }`,
    icons: {
      icon: ['/favicon.ico?v=1'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          href={`/favicon.ico`}
          type="image/vnd"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16605851615"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16605851615');`}
        </Script>
      </head>
      <GoogleTagManager
        gtmId={process.env.GOOGLE_TAG_MANAGER_ID!}
      />
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
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <ReactQueryProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <LayoutProvider>
              <main className="min-h-[100vh] bg-graphite">
                {children}
              </main>
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
