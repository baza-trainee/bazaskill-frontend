'use client';
import { useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import Loader from '@/components/admin/ui/Loader';

const AdminPage: React.FC = () => {
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      redirect('/login');
    } else redirect('/admin/candidates');
  }, []);

  return <Loader />;
};

export default AdminPage;
