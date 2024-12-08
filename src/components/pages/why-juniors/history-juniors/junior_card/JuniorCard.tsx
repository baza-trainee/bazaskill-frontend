'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useSwiperSlide } from 'swiper/react';

import CloseIcon from '@/components/shared/icons/CloseIcon';
import { formatDate } from '@/lib/formatData';
import { IStory } from '@/types/stories';

export default function JuniorCard({ data }: { data: IStory }): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();

  const [isOpen, setIsopen] = useState<boolean>(false);

  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if (!swiperSlide.isActive) {
      setIsopen(false);
    }
  }, [swiperSlide.isActive]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-full max-w-[670px] rounded-2xl 
        bg-secondaryGray px-3 py-6 sm:px-5 md:px-6 4xl:px-16"
      >
        <div className="relative h-[346px] w-full overflow-hidden rounded-md p-4 sm:h-[430px] sm+:h-[450px] md:h-[470px]">
          <Image
            src={data.image_url}
            alt={data.name_en}
            fill
            className={clsx('object-cover object-top brightness-[60%]', isOpen && 'invisible')}
            sizes="100%"
          />

          <div
            className={clsx(
              'custom-scrollbar absolute bottom-0 left-0 z-10 flex h-full w-full flex-col overflow-y-auto p-1 px-1 font-normal text-white scrollbar md:px-6 md:pt-6 md:font-semibold',
              isOpen ? 'h-full bg-gradient-to-r from-green/20 to-yellow/20' : 'md:h-fit'
            )}
          >
            <h3 className="-order-2 text-xl font-bold md:order-none md:mb-6 md:text-2xl">
              {locale === 'ua' ? data.name_ua : locale === 'ua' ? data.name_pl : data.name_en}
            </h3>

            <p className="mb-4 text-base md:mb-0 md:text-xl">{data.speciality}</p>
            <p className="-order-1 text-sm md:order-none md:mb-5">
              {formatDate(data.created_at, locale)}
            </p>

            <p
              className={clsx(
                'mb-3 mt-auto whitespace-pre-wrap text-sm md:mb-6 md:mt-0 md:text-xl',
                !isOpen && 'line-clamp-4 md:line-clamp-2'
              )}
            >
              {locale === 'ua' ? data.text_ua : locale === 'ua' ? data.text_pl : data.text_en}
            </p>

            {isOpen && (
              <button
                type="button"
                onClick={() => {
                  isOpen && setIsopen(false);
                }}
                className="absolute right-2 top-2 p-1 duration-300 hover:opacity-70"
              >
                <CloseIcon fill="#FEFFFE" />
              </button>
            )}

            {!isOpen && (
              <button
                type="button"
                className="main-gradient mb-1 flex min-w-[230px] items-center justify-center rounded-md px-1 py-4 text-xl text-black sm:max-w-[240px] md:mb-6"
                onClick={() => {
                  setIsopen(true);
                }}
              >
                {t('btn_details')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
