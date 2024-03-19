'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const AdminPage: React.FC = () => {
  useEffect(() => {
    redirect('/admin/candidates');
  }, []);

  return null;
};

export default AdminPage;
