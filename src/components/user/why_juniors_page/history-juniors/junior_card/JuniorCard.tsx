'use client';
import { useEffect, useState } from "react";
import { useSwiperSlide } from "swiper/react";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { formatDate } from "@/lib/formatData";
import { IStory } from "@/types/stories";

export default function JuniorCard({data}: {data: IStory}): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();

  const [ isOpen, setIsopen ] = useState<boolean>(false)

  const swiperSlide = useSwiperSlide();

  useEffect(()=>{
    if(!swiperSlide.isActive){setIsopen(false)}
  },[swiperSlide.isActive])
 
  return(
    <div className="flex items-center justify-center">
      <div className="bg-secondaryGray rounded-2xl px-3 
        sm:px-5 py-6 md:px-6 w-full max-w-[670px] 4xl:px-16">
        <div className="relative w-full h-[346px] sm:h-[430px] sm+:h-[450px] md:h-[470px] rounded-md overflow-hidden p-4">
          
          <Image 
            src={data.image_url}
            alt={data.name_en} 
            fill 
            className={clsx("brightness-[60%] object-cover object-top",isOpen && 'invisible')}
            sizes="100%" />

          <div 
            className={clsx("absolute z-10 bottom-0 left-0 text-white font-normal md:font-semibold px-1 p-1 md:px-6 md:pt-6 flex flex-col h-full overflow-y-auto scrollbar custom-scrollbar w-full", 
            isOpen ? 'bg-gradient-to-r from-green/20 to-yellow/20 h-full':'md:h-fit')} 
            onClick={()=>{isOpen && setIsopen(false)}}>

            <h3 className="text-xl md:text-2xl font-bold md:mb-6 -order-2 md:order-none">
              { locale === 'ua' ? data.name_ua : 
                locale === 'ua' ? data.name_pl : 
                data.name_en
              }
            </h3>

            <p className="text-base md:text-xl mb-4 md:mb-0">
              {data.speciality}
            </p>
            <p className="text-sm md:mb-5 -order-1 md:order-none">
              {formatDate(data.created_at, locale)}
            </p>
       
            <p className={clsx("whitespace-pre-wrap text-sm md:text-xl mb-3 md:mb-6 mt-auto md:mt-0", 
              !isOpen && 'line-clamp-4 md:line-clamp-2')}>  
              { locale === 'ua' ? data.text_ua : 
                locale === 'ua' ? data.text_pl : 
                data.text_en
              }
            </p>

            {!isOpen && 
              <button type="button" 
                className="min-w-[230px] sm:max-w-[240px] flex items-center justify-center px-1 py-4 main-gradient text-black rounded-md mb-1 md:mb-6 text-xl" 
                onClick={()=>{setIsopen(true)}}>
                  {t("btn_details")}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}