'use client';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { partners } from './data';
import { Partners } from '@/types/partners';
import PartnersCard from './PartnersCard';
import PageTitle from '../ui/PageTitle';
import { constants } from '@/constants';
import { getPartners } from '@/api/partners';

const Partners = () => {
  const { data } = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS],
    queryFn: getPartners,
  });

  console.log('data', data);
  return (
    <section className="no-scrollbar h-[100vh] max-h-[100vh] w-full overflow-auto p-[24px]">
      <PageTitle title="Партнери" />

      <div className="flex flex-wrap gap-[25px]">
        <Link
          href="/admin/partners/add"
          className="flex h-[286px] w-[286px] flex-col items-center justify-center rounded-[6px] border-4 border-[#fefffe]"
        >
          <PlusIcon className="h-[123px] w-[123px] stroke-[#4DC760]" />
          <p className="ml-[10px] font-sans text-[20px] leading-[1.3] text-[#4DC760]">
            Додати партнера
          </p>
        </Link>
        {partners.map((item: Partners) => (
          <li key={item.id} className="list-none">
            <PartnersCard item={item} />
          </li>
        ))}
      </div>
    </section>
  );
};

export default Partners;
