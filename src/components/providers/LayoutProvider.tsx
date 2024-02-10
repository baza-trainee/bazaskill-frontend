'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/main/header/Header';
import Footer from '@/components/main/footer/Footer';
import { Providers } from '@/app/[locale]/provider';

const LayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isAdminPage = pathname.split('/').includes('admin');

  return (
    <Providers>
      {!isAdminPage && (
        <header className="bg-graphite">
          {/* <Header /> */}
        </header>
      )}
      <main>{children}</main>
      {!isAdminPage && <footer>{/* <Footer /> */}</footer>}
    </Providers>
  );
};

export default LayoutProvider;
