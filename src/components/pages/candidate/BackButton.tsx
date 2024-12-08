'use client';

import { useRouter } from 'next/navigation';

import ArrowIcon from '@/components/shared/icons/ArrowIcon';

function BackToPrevious() {
  const router = useRouter();

  return (
    <div className="flex w-fit cursor-pointer pb-[40px]" onClick={() => router.back()}>
      <ArrowIcon className="flex size-[24px] rotate-90 items-center justify-center" fill="#fff" />
      <span className="ml-2.5 text-white">Назад</span>
    </div>
  );
}

export default BackToPrevious;
