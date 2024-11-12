'use client';

import Image from 'next/image';
import React from 'react';

import { useLocale } from 'next-intl';

import { transformDate } from '@/helpers/transformDate';
import { formatDate } from '@/lib/formatData';
import { Testimonial } from '@/types/testimonials';

export default function TestimonialCard({
  data
}: {
  data: Testimonial;
}): JSX.Element {
  const locale: string = useLocale();

  return (
    <div className="flex items-center justify-center">
      <div className="flex min-h-[265px] w-full max-w-[600px] flex-col gap-6 rounded-2xl bg-gradient-to-r from-green/20 to-yellow/20 px-6 py-6 text-white sm:min-h-[260px] md:min-h-[335px] md:px-8 xl:min-h-[310px] 2xl:min-h-[360px]">
        <div className="flex items-center gap-6 sm:items-start ">
          <div className="relative h-[20vw] max-h-[122px] min-h-[60px] w-[20vw] min-w-[60px] max-w-[122px] overflow-hidden rounded-md sm:rounded-[20px] sm:rounded-br-none">
            <Image
              src={data.image_url}
              alt={data.name_en}
              fill
              sizes="100%"
              className="object-cover object-top"
            />
          </div>

          <div className="py-3 text-start">
            <h3 className="font-tahoma text-xl font-bold sm:mb-6 md:text-2xl">
              {locale === 'ua'
                ? data.name_ua
                : locale === 'ua'
                  ? data.name_pl
                  : data.name_en}
            </h3>

            <p className="text-sm font-normal">
              {formatDate(transformDate(data.date), locale)}
            </p>
          </div>
        </div>

        <p className="text-sm font-normal md:text-xl">
          {locale === 'ua'
            ? data.review_ua
            : locale === 'ua'
              ? data.review_pl
              : data.review_en}
        </p>
      </div>
    </div>
  );
}
