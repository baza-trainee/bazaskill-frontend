'use client';

import { usePathname } from 'next/navigation';

import Footer from '@/components/shared/footer/Footer';
import Header from '@/components/shared/header/Header';

export default function LayoutProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noClientPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login') ||
    pathname.split('/').includes('docs');

  if (noClientPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
