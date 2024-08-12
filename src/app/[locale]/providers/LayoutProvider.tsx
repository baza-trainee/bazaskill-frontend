'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/main/footer/Footer';
import Header from '@/components/main/header/Header';

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login') ||
    pathname.split('/').includes('docs');

  return (
    <>
      {!isAdminPage ? <Header /> : null}
      {children}
      {!isAdminPage ? <Footer /> : null}
    </>
  );
}
