'use client';

import Image from 'next/image';
import React from 'react';

import type { TestimonialPreview } from '@/types/testimonials';

import './testimonial.css';

function EditTestimonialCard({ item }: { item: TestimonialPreview }) {
  const altText = item.name_ua || 'Testimonial image';
  return (
    <div className="flex items-center justify-between  py-2.5  pr-[15px] [border-bottom:1px_solid_#787878]  [border-top:1px_solid_#787878]   5xl:py-[30px] 5xl:pr-[35px]">
      <div className="flex gap-10 5xl:gap-[129px]">
        <div className="flex items-center gap-6 ">
          <div className="size-[90px] grayscale 5xl:size-[122px]">
            {item.file ? (
              <Image
                src={
                  typeof item.file === 'string'
                    ? item.file
                    : URL.createObjectURL(item.file)
                }
                alt={altText}
                width={122}
                height={122}
                className="size-[90px] rounded-[8px] object-cover 5xl:size-[122px]"
              />
            ) : (
              item.images_url && (
                <Image
                  src={item.images_url}
                  alt={altText}
                  width={122}
                  height={122}
                  className="size-[90px] rounded-[8px] object-cover 5xl:size-[122px]"
                />
              )
            )}
          </div>
          <div className="w-[129px] text-start font-['Tahoma',_sans-serif] 4xl:w-[159px]">
            <h4 className=" w-full font-tahoma text-lg font-bold tracking-[.72px] text-white 5xl:text-2xl ">
              {item.name_ua}
            </h4>
            <p className="font-open-sans text-[16px] font-normal tracking-[.4px] text-white 5xl:text-xl">
              {item.position}
            </p>
            <p className="font-open-sans text-sm font-normal text-white">
              {item.date}
            </p>
          </div>
        </div>
        <p className="w-[380px] px-8 py-[22px] text-start  text-lg font-normal leading-[1.4] tracking-normal text-white  xl:w-[620px] 3xl:w-[716px] 5xl:text-xl">
          {`“${item.review_ua}”`}
        </p>
      </div>
    </div>
  );
}

export default EditTestimonialCard;
