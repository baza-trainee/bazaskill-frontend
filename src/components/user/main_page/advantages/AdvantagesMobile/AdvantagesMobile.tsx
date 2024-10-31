import type { RefObject } from 'react';
import type { SwiperRef } from 'swiper/react';
import type { TAdvantages } from '@/types';

import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonLeft from '@/components/shared/icons/ButtonLeft';
import ButtonRight from '@/components/shared/icons/ButtonRight';
import useSliderControls from '@/hooks/useSliderControls';

import useSwiperParams from './useSwiperParams';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

interface SliderProps {
  cardData: TAdvantages[];
}

const AdvantagesMobile: React.FC<SliderProps> = ({
  cardData,
}: SliderProps) => {
  const sliderRef: RefObject<SwiperRef> = useRef(null);
  const swiperParams = useSwiperParams();
  const { handlePrev, handleNext } = useSliderControls(sliderRef);

  return (
    <div className="relative md:hidden">
      <Swiper
        key="partnersSlider"
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={swiperParams.spaceBetween}
        navigation={{
          prevEl: '.prev-partners',
          nextEl: '.next-partners',
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="xs:max-w-[280px] sm:max-w-[380px] md:max-w-[618px] xl:max-w-[986px] 2xl:max-w-[1006px] 3xl:max-w-[1006px] 4xl:max-w-[1139px] 5xl:max-w-[1450px]"
      >
        {cardData.map((item, i) => (
          <SwiperSlide key={item.id} className={`bg-gradient-to-b from-green to-graphite rounded-lg p-[2px] w-[302px] h-[495px] ${i % 2 === 0 && 'lg:mt-[240px]'}`}>
            <article className="bg-graphite overflow-hidden rounded-lg w-full h-full p-6 flex flex-col justify-start text-white">
              <img
                src={item.icon}
                alt='article icon'
                className="mb-[20px] w-[119px] mx-auto"
              />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[16px] leading-[26px]">
                {item.text}
              </p>
            </article>
          </SwiperSlide>))}
      </Swiper>
      <button
        type="button"
        className="prev-partners absolute left-0 top-[40%] z-20 hidden translate-y-[-40%] cursor-pointer sm:hidden md:block"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ButtonLeft className="fill-white" />
      </button>
      <button
        type="button"
        className="next-partners absolute right-0 top-[40%] z-20 hidden translate-y-[-40%] cursor-pointer sm:hidden md:block"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ButtonRight className="fill-white" />
      </button>
    </div>
  );
};

export default AdvantagesMobile;
