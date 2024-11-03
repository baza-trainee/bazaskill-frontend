'use client';

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/formatData";
import Image from "next/image";

interface IStoryPreviewProps {
    currentValues: {
      name_ua: string;
      name_en: string;
      name_pl: string;
      text_ua: string;
      text_en: string;
      text_pl: string;
      role: string;
      speciality: string;
    };
    image: string;
  }

export default function JuniorCardPreview({
    currentValues,
    image,
  }: IStoryPreviewProps): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-secondaryGray rounded-2xl p-4  h-[336px] w-[442px] max-w-[442px]">
        <div className="relative w-full h-full rounded-md overflow-hidden">
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
            className={clsx("absolute z-10 bottom-0 left-0 text-white font-normal md:font-semibold px-1 p-1 md:px-6 md:pt-6 flex flex-col h-full md:h-fit overflow-y-auto")}>

            <h3 className="text-xl md:text-2xl font-bold md:mb-6 -order-2 md:order-none">{currentValues.name_ua}</h3>

            <p className="text-base md:text-xl mb-4 md:mb-0">{currentValues.role}{' '}{currentValues.speciality}</p>
            <p className="text-sm md:mb-5 -order-1 md:order-none">
              {formatDate(new Date(Date.now()), locale) }
            </p>

            <p className={clsx("text-sm md:text-xl mb-3 md:mb-6 mt-auto md:mt-0 ",'line-clamp-4 md:line-clamp-2')}>
              {currentValues.text_ua}
            </p>

            <button type="button"
              className="min-w-[230px] sm:max-w-[240px] flex items-center justify-center px-1 py-4 main-gradient text-black rounded-md mb-1 md:mb-6 text-xl">
              {t("btn_details")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}