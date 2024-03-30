'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const AdminPage: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      redirect('/admin/candidates');
    } else redirect('/login');
  }, []);

  return null;
};

export default AdminPage;
