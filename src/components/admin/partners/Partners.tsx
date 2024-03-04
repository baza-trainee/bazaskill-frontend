import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';
import React from 'react';
import { partners } from './data';
import { Partners } from '@/types/partners';
import PartnersCard from './PartnersCard';

const Partners = () => {
  return (
    <section className="w-[1553px] pl-[40px] pt-[40px]">
      <h2 className="mb-[50px] font-['Tahoma',_sans-serif] text-[40px] font-bold  leading-[1.5] tracking-[1px] text-[#ffffff]">
        Партнери
      </h2>

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
