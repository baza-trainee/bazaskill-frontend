'use client';

import Image from 'next/image';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@/lib/formatData';

interface IStoryPreviewProps {
  currentValues: {
    name_ua: string;
    name_en: string;
    name_pl: string;
    text_ua: string;
    text_en: string;
    text_pl: string;
    date: string;
    speciality: string;
  };
  image: string;
}

export default function JuniorCardPreview({
  currentValues,
  image
}: IStoryPreviewProps): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();

  return (
    <div className="flex items-center justify-center">
      <div className="h-[336px] w-[442px] max-w-[442px]  rounded-2xl bg-secondaryGray p-4">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={image ? image : '/images/gallery-placeholder.jpg'}
            fill
            alt={currentValues.name_ua}
            sizes="100%"
            objectFit="cover"
            objectPosition="top"
            className="brightness-[60%]"
          />

          <div
            className={clsx(
              'absolute bottom-0 left-0 z-10 flex h-full flex-col overflow-y-auto p-1 px-1 font-normal text-white md:h-fit md:px-6 md:pt-6 md:font-semibold'
            )}
          >
            <h3 className="-order-2 text-xl font-bold md:order-none md:mb-6 md:text-2xl">
              {currentValues.name_ua}
            </h3>

            <p className="mb-4 text-base md:mb-0 md:text-xl">{currentValues.speciality}</p>
            <p className="-order-1 text-sm md:order-none md:mb-5">
              {formatDate(new Date(Date.now()), locale)}
            </p>

            <p
              className={clsx(
                'mb-3 mt-auto text-sm md:mb-6 md:mt-0 md:text-xl ',
                'line-clamp-4 md:line-clamp-2'
              )}
            >
              {currentValues.text_ua}
            </p>

            <button
              type="button"
              className="main-gradient mb-1 flex min-w-[230px] items-center justify-center rounded-md px-1 py-4 text-xl text-black sm:max-w-[240px] md:mb-6"
            >
              {t('btn_details')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
