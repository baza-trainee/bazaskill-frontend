'use client';
import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const WithAuth = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
      } else setIsShow(true);
    };
    getUser();
  }, [router]);

  return <>{isShow && children}</>;
};
