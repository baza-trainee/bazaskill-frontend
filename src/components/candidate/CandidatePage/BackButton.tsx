'use client';

import { useRouter } from 'next/navigation';
import ArrowIcon from '@/components/icons/ArrowIcon';

const BackToPrevious = () => {
  const router = useRouter();

  return (
    <div
      className="flex w-fit cursor-pointer pb-[40px]"
      onClick={() => router.back()}
    >
      <ArrowIcon
        className="flex h-[24px] w-[24px] rotate-90 items-center justify-center"
        fill="#fff"
      />
      <span className="ml-2.5 text-white">Назад</span>
    </div>
  );
};

export default BackToPrevious;
