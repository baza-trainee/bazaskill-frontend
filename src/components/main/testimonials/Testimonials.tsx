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
          className="testimonials max-w-[88%] 5xl:max-w-[1524px]">
          {testimonials.map((item: Testimonials) => (
            <SwiperSlide
              className="testimonials_slide max-w-[100%] 5xl:max-w-[745px]"
              key={item.id}>
              <div className="flex w-[100%] flex-col items-center justify-between gap-[10px] md:flex-row 5xl:justify-end 5xl:gap-[24px]">
                <div className="flex items-center gap-[12px] xl:gap-[36px]  5xl:flex-col">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={122}
                    height={122}
                    className="h-[90px] w-[90px] rounded-[8px] xl:h-[122px] xl:w-[122px]"
                  />
                  <div className="text-start">
                    <h4 className="font-tahoma font-bold tracking-[.72px] text-white md:mb-[15px] md:text-[20px]  xl:text-[24px] xl:leading-[1.5]">
                      {item.name}
                    </h4>
                    <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white md:mb-[5px] md:text-[calc(10px+(20-10)*((100vw-768px)/(1440-768)))] 5xl:text-[20px]">
                      {item.position}
                    </p>
                    <p className="font-open-sans text-[calc(10px+(14-10)*((100vw-768px)/(1440-768)))] font-normal text-white">
                      {item.data}
                    </p>
                  </div>
                </div>
                <p className="max-w-[calc(400px+(716-400)*((100vw-768px)/(1536-768)))] text-start font-open-sans text-[calc(12px+(24-12)*((100vw-320px)/(1920-320)))] font-normal  tracking-[.4px] text-white xl:text-xl 3xl:max-w-[716px] 5xl:max-w-[562px]">
                  {'“' + item.review + '”'}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className="prev absolute left-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer md:block"
          onClick={handlePrev}>
          <ButtonLeft className="fill-white" />
        </button>
        <button
          type="button"
          className="next absolute right-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer md:block"
          onClick={handleNext}>
          <ButtonRight className="fill-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
