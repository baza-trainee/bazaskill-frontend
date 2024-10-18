'use client';

import type { RefObject } from 'react';
import type {
  SwiperRef,
} from 'swiper/react';

import { useCallback, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import type { Testimonial } from '@/types/testimonials';

import ButtonLeft from '@/components/shared/icons/ButtonLeft';
import ButtonRight from '@/components/shared/icons/ButtonRight';

import TestimonialCard from './TestimonialCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials_styles.css';

function TestimonialSlider({
  data,
}: {
  data: Testimonial[];
}) {
  const sliderRef: RefObject<SwiperRef> = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current)
      return;

    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current)
      return;

    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);

  return (
    <div className="relative xl:mx-auto xl:max-w-screen-xl  5xl:max-w-[1681px]">
      <Swiper
        key="testimonials"
        slidesPerView="auto"
        spaceBetween={34}
        pagination={{
          clickable: true,
        }}
        loop={true}
        ref={sliderRef}
        navigation={{
          prevEl: '.prev-testimonials',
          nextEl: '.next-testimonials',
        }}
        modules={[Pagination, Navigation]}
        className="testimonials max-w-[88%] 5xl:max-w-[1524px]"
      >
        {data?.map((item: Testimonial) => (
          <SwiperSlide
            className="testimonials_slide max-w-full 5xl:max-w-[745px]"
            key={item.id}
          >
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="prev absolute left-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer md:block"
        onClick={handlePrev}
      >
        <ButtonLeft className="fill-white" />
      </button>
      <button
        type="button"
        className="next absolute right-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer md:block"
        onClick={handleNext}
      >
        <ButtonRight className="fill-white" />
      </button>
    </div>
  );
}

export default TestimonialSlider;
