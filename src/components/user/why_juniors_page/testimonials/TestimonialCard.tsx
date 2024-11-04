'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { formatDate } from '@/lib/formatData';
import { Testimonial } from './Types';

export default function TestimonialCard(
  {data}: {data: Testimonial}
): JSX.Element {
  const locale: string = useLocale();

  return (
    <div className='flex items-center justify-center'>
      <div className="w-full max-w-[600px] flex flex-col bg-gradient-to-r from-green/20 to-yellow/20 rounded-2xl px-6 md:px-8 py-6 gap-6 text-white">

        <div className="flex gap-6 items-center sm:items-start ">
          <div className='relative w-[20vw] h-[20vw] min-w-[60px] min-h-[60px] max-w-[122px] max-h-[122px] rounded-md sm:rounded-[20px] sm:rounded-br-none overflow-hidden '>
            <Image
              src={data.image_url}
              alt={data.name_ua}
              fill
              sizes="100%" 
              objectFit="cover" 
              objectPosition="top"
            />
          </div>
      
          <div className="text-start py-3">
            <h4 className="font-tahoma font-bold text-xl md:text-2xl sm:mb-6">
              {data.name_ua}
            </h4>
    
            <p className="text-sm font-normal">
              {formatDate(data.date, locale)}
            </p>
          </div>
        </div>

        <p className="text-sm md:text-xl font-normal">
          {data.review_ua}
        </p>
      </div>
    </div>
  );
}