'use client';

import { FC, useRef } from 'react';

import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

import './styles.css';

interface SliderProps extends SwiperOptions {
  data: any;
  showArrows?: boolean;
  title?: string;
  titleClassName?: string;
  nextElName?: string; // назва кнопки next !! Має бути унікальна для секції
  prevElName?: string; // назва кнопки prev !! Має бути унікальна для секції
  Component: FC<{ data: any; index?: number }>;
}

const Slider: FC<SliderProps> = ({
  data,
  Component,
  showArrows = true,
  title,
  titleClassName,
  nextElName,
  prevElName,
  ...options
}) => {
  const sliderRef = useRef(null);

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
    <div className="my-8 flex w-full flex-col items-center justify-center">
      {showArrows && (
        <nav
          className="relative mx-auto mb-6 flex h-fit w-full items-center justify-center py-4 pr-4 text-white"
          aria-label="Slider navigation"
        >
          {title && (
            <h2
              className={clsx(
                'w-full text-center font-tahoma text-2xl font-bold not-italic text-white lg:text-[40px]',
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          <div className="absolute right-0 top-0 hidden h-full items-center justify-center gap-4 pr-4 md:flex">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              aria-controls="slider"
              disabled={!sliderRef.current}
              className={clsx(
                'button-prev duration-300 hover:opacity-70 disabled:opacity-40',
                prevElName
              )}
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              aria-controls="slider"
              disabled={!sliderRef.current}
              className={clsx(
                'button-next duration-300 hover:opacity-70 disabled:opacity-40',
                nextElName
              )}
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        </nav>
      )}
      <Swiper
        id="slider"
        className="relative flex w-full items-center pb-9"
        spaceBetween={10}
        slidesPerView={1}
        {...options}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: nextElName ? `.${nextElName}` : null,
          prevEl: prevElName ? `.${prevElName}` : null
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          (sliderRef.current as any) = swiper;
        }}
      >
        {data.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <Component data={item} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
