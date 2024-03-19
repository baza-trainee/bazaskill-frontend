import React from 'react';
import Link from 'next/link';

import PageTitle from '../ui/PageTitle';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';

const Posts = () => {
  return (
    <div className="pl-[24px] pt-[20px]">
      <PageTitle title={'Статті та поради'} />
      <section className="pt-[50px]">
        <article className="flex h-[336px] w-[442px] flex-col items-center justify-center rounded-[10px] border-[2px] border-[#7EFE92]">
          <Link
            href={'/admin/posts/add'}
            className="flex flex-col items-center"
          >
            <PlusIcon />
            <p className="font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати статтю
            </p>
          </Link>
        </article>
        <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
          <svg width={28} height={28}>
            <use href="/Icons/sprite.svg#icon-drop"></use>
          </svg>
        </button>
        <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
          <svg width={28} height={28}>
            <use href="/Icons/sprite.svg#icon-pen"></use>
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Posts;
