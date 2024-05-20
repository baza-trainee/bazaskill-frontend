'use client';

import dynamic from 'next/dynamic';
import { RefObject, useCallback, useRef } from 'react';
import {
  Swiper,
  SwiperRef,
  SwiperSlide,
} from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Navigation, Pagination } from 'swiper/modules';
import { Testimonial } from '@/types/testimonials';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getTestimonials } from '@/api/testimonials';
import ButtonRight from '@/components/icons/ButtonRight';
import ButtonLeft from '@/components/icons/ButtonLeft';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials_styles.css';

const DynamicCard = dynamic(
  () => import('./TestimonialCard'),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Testimonials = () => {
  const t = useTranslations('Main.testimonials');
  const sliderRef: RefObject<SwiperRef> = useRef(null);

  const { data } = useQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });

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
      <h3 className="mb-[50px] text-center font-tahoma text-[24px] font-bold tracking-[1.08px] text-white md:text-2xl lg:text-[40px]">
        {t('title')}
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
          {data &&
            Array.isArray(data) &&
            data?.map((item: Testimonial) => (
              <SwiperSlide
                className="testimonials_slide max-w-[100%] 5xl:max-w-[745px]"
                key={item.id}
              >
                <DynamicCard item={item} />
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
