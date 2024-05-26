import type { Metadata } from 'next';
import { Providers } from './provider';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale,
} from 'next-intl/server';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import LayoutProvider from './providers/LayoutProvider';

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-open-sans',
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
      default: 'BazaSkill',
      template: '%s',
    },
    description: `BazaSkill ${params.locale === 'ua' ? 'головна сторінка' : params.locale === 'en' ? 'main page' : 'strona główna'}`,
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
    <html lang="ua">
      <head>
        <link
          rel="icon"
          href={`/favicon.ico`}
          type="image/vnd"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${open_sans.variable} ${tahoma.variable} ${mont.variable}`}
      >
        <Providers locale={locale}>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <LayoutProvider>
              <main className="min-h-[100vh] bg-graphite">
                {children}
              </main>
            </LayoutProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
