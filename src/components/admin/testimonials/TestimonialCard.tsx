'use client';
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonials';
import Link from 'next/link';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';

const TestimonialCard = ({
  item,
}: {
  item: Testimonial;
}) => {
  return (
    <div className="flex  items-center gap-[248px] pr-[35px]">
      <div className="flex gap-[129px]">
        <div className="flex items-center gap-[24px] ">
          <Image
            src={item.image}
            alt={item.name}
            width={122}
            height={122}
            className=" rounded-[8px] "
          />
          <div className="w-[159px] text-start">
            <h4 className="font-tahoma font-bold tracking-[.72px] text-white ">
              {item.name}
            </h4>
            <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white">
              {item.position}
            </p>
            <p className="font-open-sans font-normal text-white">
              {item.data}
            </p>
          </div>
        </div>
      </div>
      <p className="w-[716px] px-[32px] py-[22px] text-start font-sans text-[20px] font-normal leading-[1.4]  tracking-[0px] text-white">
        {'“' + item.review + '”'}
      </p>
      <div className="flex gap-[32px]">
        <Link href={'/admin/testimonials/edit'}>
          <WriteIcon className="h-[32px] w-[32px] fill-white" />
        </Link>
        <button
          type="button"
          onClick={() => console.log(item.id)}>
          <TrashIcon className="h-[32px] w-[32px] fill-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
