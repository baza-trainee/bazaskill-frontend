import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import LayoutProvider from '@/components/providers/LayoutProvider';
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
  title: 'BazaSkill',
  description: 'BazaSkill official page',
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body
        className={`${open_sans.variable} ${tahoma.variable} ${mont.variable}`}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
