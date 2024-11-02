import { formatDate } from "@/lib/formatData";
import clsx from "clsx";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwiperSlide } from "swiper/react";

interface Props {
  data: {
    id: string;
    img: string;
    name: string;
    role: string;
    date: string;
    description: string;
  }
}

export default function JuniorCard({data}: Props): JSX.Element {
  const locale: string = useLocale();

  const [ isOpen, setIsopen ] = useState<boolean>(false)

  const swiperSlide = useSwiperSlide();

  useEffect(()=>{
    if(!swiperSlide.isActive){setIsopen(false)}
  },[swiperSlide.isActive])
 
  return(
    <div className="flex items-center justify-center">
      <div className="bg-secondaryGray rounded-2xl p-6">
        <div className="relative w-[540px] h-[470px] rounded-md overflow-hidden p-4">
       { !isOpen &&  <Image src={data.img} fill alt={data.name} className="brightness-[60%]" sizes="100%"/>}

          <div className={clsx("absolute z-10 bottom-0 left-0 text-white font-semibold p-6", 
          isOpen && 'h-full bg-gradient-to-r from-green/20 to-yellow/20' )} 
          onClick={()=>{isOpen && setIsopen(false)}}>

            <h3 className="text-2xl font-bold mb-6">{data.name}</h3>

            <p className="text-xl">{data.role}</p>
            <p className="text-sm mb-5">{formatDate(data.date, locale)}</p>
       
            <p className={clsx("text-xl mb-6", !isOpen && 'line-clamp-2')}>  
              {data.description}
            </p>

            {!isOpen && <button type="button" 
                className="min-w-[230px] flex items-center justify-center px-6 py-4 main-gradient text-black rounded-md mb-6 text-xl" onClick={()=>{setIsopen(true)}}>
                  Докладніше
              </button>
            }

          </div>
        </div>
      </div>
    </div>
  )
}