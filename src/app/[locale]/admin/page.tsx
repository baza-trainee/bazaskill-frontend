'use client';
import Loader from '@/components/admin/ui/Loader';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const AdminPage: React.FC = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push('/admin/candidates');
  }, [router]);
  return <Loader />;
};

export default AdminPage;
