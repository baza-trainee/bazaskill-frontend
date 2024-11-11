'use client';
import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export function WithAuth({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
      }
      else {
        setIsShow(true);
      }
    };
    getUser();
  }, [router]);

  return <>{isShow && children}</>;
}
