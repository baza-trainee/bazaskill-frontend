'use client';

import Link from 'next/link';
import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getPartners } from '@/api/partners';
import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';
import { constants } from '@/constants';
import type { TPartner } from '@/types/partners';

import Loader from '../../../shared/loader/Loader';
import PageTitle from '../ui/PageTitle';
import PartnersCard from './PartnersCard';

function Partners() {
  const { data } = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS],
    queryFn: getPartners
  });

  if (!data) {
    return <Loader />;
  }
  return (
    <section className="no-scrollbar h-screen max-h-screen w-full overflow-auto p-[24px]">
      <PageTitle title="Партнери" />

      <div className="mt-[80px] flex flex-wrap gap-[25px]">
        <Link
          href="/admin/partners/add"
          className="flex size-[286px] flex-col items-center justify-center rounded-[6px] border-4 border-[#fefffe]"
        >
          <PlusIcon className="size-[123px] stroke-[#4DC760]" />
          <p className="ml-[10px] font-sans text-[20px] leading-[1.3] text-[#4DC760]">
            Додати партнера
          </p>
        </Link>
        {data?.map((item: TPartner) => (
          <li key={item.id} className="list-none">
            <PartnersCard showName={false} isEditing={false} item={item} />
          </li>
        ))}
      </div>
    </section>
  );
}

export default Partners;
