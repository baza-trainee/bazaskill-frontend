import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Footer from '@/components/main/footer/Footer';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import { getSpecializationsWithStack } from '@/api/specialization';
import Header from '@/components/main/header/Header';
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });

  return (
    <html lang={locale}>
      <body
        className={`${open_sans.variable} ${tahoma.variable} ${mont.variable}`}>
        <Providers>
          <header className="bg-graphite">
            <HydrationBoundary
              state={dehydrate(queryClient)}>
              <Header />
            </HydrationBoundary>
          </header>

          <main>{children}</main>

          <footer className="bg-graphite">
            <Footer />
          </footer>
        </Providers>
        {/* <LayoutProvider>{children}</LayoutProvider> */}
      </body>
    </html>
  );
}
