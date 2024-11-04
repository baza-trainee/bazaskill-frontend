'use client';
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/formatData";
import Image from "next/image";
import { useSwiperSlide } from "swiper/react";
import { PropsJuniorCard } from "../Types";

export default function JuniorCard({data}: PropsJuniorCard): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();

  const [ isOpen, setIsopen ] = useState<boolean>(false)

  const swiperSlide = useSwiperSlide();

  useEffect(()=>{
    if(!swiperSlide.isActive){setIsopen(false)}
  },[swiperSlide.isActive])
 
  return(
    <div className="flex items-center justify-center">
      <div className="bg-secondaryGray rounded-2xl px-3 sm:px-5 py-6 md:px-6 w-full max-w-[540px]">
        <div className="relative w-full h-[346px] sm:h-[430px] sm+:h-[450px] md:h-[470px] rounded-md overflow-hidden p-4">
          
          { !isOpen &&  
            <Image 
              src={data.img} 
              fill alt={data.name} 
              className="brightness-[60%] object-cover object-top" 
              sizes="100%" />
          }

          <div 
            className={clsx("absolute z-10 bottom-0 left-0 text-white font-normal md:font-semibold px-1 p-1 md:px-6 md:pt-6 flex flex-col h-full md:h-fit overflow-y-auto", 
            isOpen && 'bg-gradient-to-r from-green/20 to-yellow/20' )} 
            onClick={()=>{isOpen && setIsopen(false)}}>

            <h3 className="text-xl md:text-2xl font-bold md:mb-6 -order-2 md:order-none">{data.name}</h3>

            <p className="text-base md:text-xl mb-4 md:mb-0">{data.role}</p>
            <p className="text-sm md:mb-5 -order-1 md:order-none">
              {formatDate(data.date, locale)}
            </p>
       
            <p className={clsx("text-sm md:text-xl mb-3 md:mb-6 mt-auto md:mt-0 ", !isOpen && 'line-clamp-4 md:line-clamp-2')}>  
              {data.description}
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