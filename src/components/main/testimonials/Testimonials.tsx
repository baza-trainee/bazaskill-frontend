'use client';

import { RefObject, useCallback, useRef } from 'react';
import {
  Swiper,
  SwiperRef,
  SwiperSlide,
} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { testimonials } from './data';
import { Testimonial } from '@/types/testimonials';
import TestimonialCard from './TestimonialCard';
import ButtonRight from '@/components/icons/ButtonRight';
import ButtonLeft from '@/components/icons/ButtonLeft';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials_styles.css';

const Testimonials = () => {
  const sliderRef: RefObject<SwiperRef> = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="container relative py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-[24px] font-bold tracking-[1.08px] text-white md:text-4xl">
        Відгуки
      </h3>
      <div className="relative xl:mx-auto xl:max-w-[1280px]  5xl:max-w-[1681px]">
        <Swiper
          key={'testimonials'}
          slidesPerView={'auto'}
          spaceBetween={34}
          loop={true}
          pagination={{
            clickable: true,
          }}
          ref={sliderRef}
          navigation={{
            prevEl: '.prev-testimonials',
            nextEl: '.next-testimonials',
          }}
          modules={[Pagination, Navigation]}
          className="testimonials max-w-[88%] 5xl:max-w-[1524px]"
        >
          {testimonials.map((item: Testimonial) => (
            <SwiperSlide
              className="testimonials_slide max-w-[100%] 5xl:max-w-[745px]"
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
    </section>
  );
};

export default Testimonials;
