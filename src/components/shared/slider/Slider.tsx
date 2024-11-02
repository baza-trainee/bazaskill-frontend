'use client';
import { FC, useEffect, useRef, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';
import clsx from 'clsx';


interface SliderProps extends SwiperOptions{
  data: any;
  showArrows?: boolean;
  slidesToView?: number;
  title?: string;
  Component: FC<{ data: any, index?: number }>;
};

const Slider: FC<SliderProps> = ({ data, Component, showArrows=true, slidesToView, title , ...options}) => {
  const sliderRef = useRef(null);
  // const [ slidesPerView, setSlidesPerView ] = useState(1);
  const [ isClient, setIsClient ] = useState(false)

  // const isDesktopOrLaptop = useMediaQuery({ query: `(min-width: ${minWidth}px)` });
  // const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${minWidth}px)` });

  useEffect(() => {
    setIsClient(true)
  }, [])

  // useEffect(() => {
  //   if (isDesktopOrLaptop) {
  //     setSlidesPerView(2);
  //   }
  //   if (isTabletOrMobile) {
  //     setSlidesPerView(1);
  //   }
  // }, [isDesktopOrLaptop, isTabletOrMobile]);

  const handlePrev = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slideNext();
    }
  };

  return (
    <>
    {isClient &&    <div className="my-8 flex flex-col w-full items-center justify-center">
     {showArrows &&  <nav
        className="mx-auto flex w-full items-center justify-center mb-6 text-white pr-4 relative h-fit py-4"
        aria-label="Slider navigation"
      >

        {title &&  <h2
          className="font-tahoma text-2xl font-bold not-italic text-white lg:text-[40px]"
          >
            {title}
          </h2>
        }

        <div className={clsx("h-full items-center justify-center gap-4 pr-4 absolute right-0 top-0 hidden md:flex")}>
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            aria-controls="slider"
            className="cursor-pointer duration-300 hover:opacity-70"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            aria-controls="slider"
            className="cursor-pointer duration-300 hover:opacity-70"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </nav>
      }
      <Swiper
        id='slider'
        className="relative flex w-full items-center pb-9"
        spaceBetween={10}
        // slidesPerView={slidesToView ? slidesToView : slidesPerView}
        slidesPerView={1}
        {...options}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          (sliderRef.current as any) = swiper;
        }}
      >
        {data.map((item:any, i:number) => (
          <SwiperSlide key={i}>
            <Component data={item} index={i} />
          </SwiperSlide>
        ))}
        
      
      </Swiper>
    </div>}
 </>
  );
};

export default Slider;