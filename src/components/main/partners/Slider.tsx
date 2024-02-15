import React from 'react';
import {
  RefObject,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import Image from 'next/image';
import {
  Swiper,
  SwiperRef,
  SwiperSlide,
} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Partner from './partnerInterface';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import ButtonRight from '@/components/icons/ButtonRight';
import ButtonLeft from '@/components/icons/ButtonLeft';

interface SliderProps {
  partners: Partner[];
}

const Slider: React.FC<SliderProps> = ({ partners }) => {
  const sliderRef: RefObject<SwiperRef> = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slideNext();
  }, []);

  const [swiperParams, setSwiperParams] = useState({
    spaceBetween: 24,
    imageWidth: 302,
    imageHeight: 135,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      console.log('Window Width:', windowWidth);
      if (windowWidth >= 320 && windowWidth < 420) {
        setSwiperParams({
          spaceBetween: 0,
          imageWidth: 280,
          imageHeight: 84,
        });
      } else if (windowWidth >= 420 && windowWidth < 768) {
        setSwiperParams({
          spaceBetween: 0,
          imageWidth: 380,
          imageHeight: 135,
        });
      } else if (windowWidth >= 768 && windowWidth < 1280) {
        setSwiperParams({
          spaceBetween: 24,
          imageWidth: 190,
          imageHeight: 86,
        });
      } else if (
        windowWidth >= 1280 &&
        windowWidth < 1368
      ) {
        setSwiperParams({
          spaceBetween: 40,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1368 &&
        windowWidth < 1440
      ) {
        setSwiperParams({
          spaceBetween: 50,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1440 &&
        windowWidth < 1536
      ) {
        setSwiperParams({
          spaceBetween: 50,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1536 &&
        windowWidth < 1920
      ) {
        setSwiperParams({
          spaceBetween: 84,
          imageWidth: 324,
          imageHeight: 153,
        });
      } else if (windowWidth >= 1920) {
        setSwiperParams({
          spaceBetween: 215,
          imageWidth: 340,
          imageHeight: 152,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <Swiper
        key={'partnersSlider pl-[100px]'}
        modules={[Navigation, Pagination]}
        slidesPerView={'auto'}
        spaceBetween={swiperParams.spaceBetween}
        navigation={{
          prevEl: '.prev-partners',
          nextEl: '.next-partners',
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="xs:max-w-[280] sm:max-w-[380px] md:max-w-[618px] xl:max-w-[986px] 2xl:max-w-[1006px] 3xl:max-w-[1006px] 4xl:max-w-[1139px] 5xl:max-w-[1450px]"
      >
        {partners.map((partner) => (
          <SwiperSlide
            key={partner.id}
            className="partnerSlide sm:max-w-[280] md:max-w-[190px] xl:max-w-[302px] 4xl:max-w-[324px] 5xl:max-w-[340px]"
          >
            <Image
              src={partner.image}
              width={swiperParams.imageWidth}
              height={swiperParams.imageHeight}
              alt={partner.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="prev-partners absolute left-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer sm:hidden md:block"
        onClick={handlePrev}
      >
        <ButtonLeft className="fill-white" />
      </button>
      <button
        type="button"
        className="next-partners absolute right-0 top-[24%] z-20 hidden translate-y-[-24%] cursor-pointer sm:hidden md:block"
        onClick={handleNext}
      >
        <ButtonRight className="fill-white" />
      </button>
    </div>
  );
};

export default Slider;
