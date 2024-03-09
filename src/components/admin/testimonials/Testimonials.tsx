'use client';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';
import React from 'react';
import { Testimonial } from '@/types/testimonials';
import TestimonialCard from './TestimonialCard';
import PageTitle from '../ui/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getTestimonials } from '@/api/testimonials';
import { testimonials } from './data';

const Testimonials = () => {
  const { data } = useQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });

  console.log(data);
  return (
    <section className=" w-full max-w-[1553px] px-[24px] pt-[40px]">
      <div className="mb-[50px]">
        <PageTitle title="Відгуки" />
      </div>
      <Link
        href="/admin/testimonials/add"
        className="mb-[50px]  flex min-h-[100px] w-[286px]  items-center gap-[16px] rounded-[6px] p-[20px] [border:2px_solid_#fefffe]">
        <PlusIcon className="stroke-[#4DC760]" />
        <p className="font-sans text-[20px] leading-[1.3] text-[#4DC760] ">
          Додати відгук
        </p>
      </Link>

      <div className="custom-scrollbar  max-h-[728px] w-full max-w-[1529px] overflow-y-auto">
        <ul>
          {data?.map((item: Testimonial) => (
            <li key={item.id}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
