'use client'; // Error components must be Client Components

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const t = useTranslations('Error');
  return (
    <div className="flex  w-full flex-col items-center justify-center  bg-graphite pb-[100px] pt-[50px] text-white">
      <span className="font-regular font-mont text-[180px]">
        404
      </span>
      <p className="mb-[64px] font-tahoma text-[24px] font-semibold">
        {error.message}
      </p>
      <Link href="/">
        <button className="h-[54px] w-[272px] rounded-[5px] bg-black font-tahoma text-[20px] font-bold text-white">
          {t('button')}
        </button>
      </Link>
    </div>
  );
}
