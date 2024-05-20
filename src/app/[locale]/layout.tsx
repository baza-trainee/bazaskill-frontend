import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import { Providers } from './provider';
import dynamic from 'next/dynamic';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

const DynamicHeader = dynamic(
  () => import('@/components/main/header/Header')
);
const DynamicFooter = dynamic(
  () => import('@/components/main/footer/Footer')
);

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

export const metadata: Metadata = {
  title: {
    default: 'BazaSkill',
    template: '%s',
  },
  description: 'BazaSkill page',
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${open_sans.variable} ${tahoma.variable} ${mont.variable}`}
      >
        <Providers locale={locale}>
          <header className="bg-graphite">
            <DynamicHeader />
          </header>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <main>{children}</main>
            <footer className="bg-graphite">
              <DynamicFooter />
            </footer>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
