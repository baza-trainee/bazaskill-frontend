'use client';

import Image from 'next/image';
import { RefObject, useCallback, useRef } from 'react';
import {
  Swiper,
  SwiperRef,
  SwiperSlide,
} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img from '../../../../public/img/testimonials_image.jpg';
import ButtonRight from '@/components/icons/ButtonRight';
import ButtonLeft from '@/components/icons/ButtonLeft';
import './testimonials_styles.css';

interface Testimonials {
  id: number;
  name: string;
  position: string;
  review: string;
  data: string;
  image: string;
}

const testimonials: Testimonials[] = [
  {
    id: 1,
    name: 'Ірина',
    position: 'учасниця, QA',
    review:
      'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
    data: 'травень, 2023',
    image: img.src,
  },
  {
    id: 2,
    name: 'Юлія',
    position: 'учасниця, Full Stack Developer',
    review:
      'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
    data: 'червень, 2023',
    image: img.src,
  },
  {
    id: 3,
    name: 'Ольга',
    position: 'учасниця, UI/UX',
    review:
      'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
    data: 'липень, 2023',
    image: img.src,
  },
];
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
    <section className="relaive container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-4xl font-bold tracking-[1.08px] text-white">
        Відгуки
      </h3>
      <Swiper
        key={'testimonials'}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        ref={sliderRef}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Pagination, Navigation]}
        className="testimonials">
        {testimonials.map((item: Testimonials) => (
          <SwiperSlide
            className="testimonials_slide"
            key={item.id}>
            <div className="flex w-[88%] items-center justify-between 2xl:min-w-[1112px]">
              <div className="flex items-center gap-[36px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={122}
                  height={122}
                  className="rounded-[8px]"
                />
                <div className="text-start">
                  <h4 className="mb-[24px] font-tahoma text-2xl font-bold tracking-[.72px] text-white">
                    {item.name}
                  </h4>
                  <p className="font-open-sans text-xl font-normal tracking-[.4px] text-white">
                    {item.position}
                  </p>
                  <p className="font-open-sans text-sm font-normal text-white">
                    {item.data}
                  </p>
                </div>
              </div>
              <p className="w-[652px] text-start font-open-sans text-xl font-normal tracking-[.4px] text-white">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <button
          type="button"
          className="prev absolute left-0 top-[20%] z-20 translate-y-[-20%] cursor-pointer"
          onClick={handlePrev}>
          <ButtonLeft className="fill-white" />
        </button>
        <button
          type="button"
          className="next absolute right-0 top-[20%] z-20 translate-y-[-20%] cursor-pointer"
          onClick={handleNext}>
          <ButtonRight className="fill-white" />
        </button>
      </Swiper>
    </section>
  );
};

export default Testimonials;
