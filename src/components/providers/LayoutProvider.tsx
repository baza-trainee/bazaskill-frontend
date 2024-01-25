'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/main/Header';
import Footer from '@/components/main/Footer';

const LayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isAdminPage = pathname.split('/').includes('admin');

  return (
    <>
      {!isAdminPage && (
        <header>
          <Header />
        </header>
      )}
      <main> {children}</main>
      {!isAdminPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default LayoutProvider;
