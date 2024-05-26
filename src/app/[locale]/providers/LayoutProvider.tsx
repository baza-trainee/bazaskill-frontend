'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const DynamicHeader = dynamic(
  () => import('@/components/main/header/Header')
);
const DynamicFooter = dynamic(
  () => import('@/components/main/footer/Footer')
);

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname
    .split('/')
    .includes('admin' || 'login');

  return (
    <>
      {!isAdminPage ? <DynamicHeader /> : null}
      {children}
      {!isAdminPage ? <DynamicFooter /> : null}
    </>
  );
}
