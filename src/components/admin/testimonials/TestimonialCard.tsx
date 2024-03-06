'use client';
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonials';
import Link from 'next/link';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import './testimonial.css';

const TestimonialCard = ({
  item,
}: {
  item: Testimonial;
}) => {
  return (
    <div className="flex  items-center py-[30px]  pr-[35px] [border-bottom:1px_solid_#787878]   [border-top:1px_solid_#787878] xl:gap-[248px]">
      <div className="flex xl:gap-[129px]">
        <div className="flex items-center gap-[24px] ">
          <Image
            src={item.image_url}
            alt={item.name_ua}
            width={122}
            height={122}
            className=" rounded-[8px] "
          />
          <div className="w-[159px] text-start font-['Tahoma',_sans-serif]">
            <h4 className=" w-full w-full font-tahoma font-bold tracking-[.72px] text-white 4xl:text-[24px] ">
              {item.name_ua}
            </h4>
            <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white 4xl:text-[20px]">
              {item.position}
            </p>
            <p className="font-open-sans font-normal text-white 4xl:text-[14px]">
              {item.data}
            </p>
          </div>
        </div>
        <p className="w-full max-w-[716px] px-[32px] py-[22px] text-start font-['Open_Sans',_sans-serif] font-normal leading-[1.4] tracking-[0px]  text-white 4xl:text-[20px]">
          {'“' + item.review_ua + '”'}
        </p>
      </div>
      <div className="flex gap-[32px]">
        <Link href={`/admin/testimonials/edit/${item.id}}`}>
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
