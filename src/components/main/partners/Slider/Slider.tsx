/* eslint-disable @next/next/no-img-element */
import { RefObject, useRef } from 'react';
import {
  Swiper,
  SwiperRef,
  SwiperSlide,
} from 'swiper/react';
import useSwiperParams from './useSwiperParams';
import useSliderControls from '@/hooks/useSliderControls';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import ButtonRight from '@/components/icons/ButtonRight';
import ButtonLeft from '@/components/icons/ButtonLeft';
import { TPartner } from '@/types/partners';

interface SliderProps {
  partners: TPartner[];
}

const Slider: React.FC<SliderProps> = ({
  partners,
}: SliderProps) => {
  const sliderRef: RefObject<SwiperRef> = useRef(null);
  const swiperParams = useSwiperParams();
  const { handlePrev, handleNext } =
    useSliderControls(sliderRef);

  return (
    <div className="relative">
      <Swiper
        key={'partnersSlider'}
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
        className="xs:max-w-[280px] sm:max-w-[380px] md:max-w-[618px] xl:max-w-[986px] 2xl:max-w-[1006px] 3xl:max-w-[1006px] 4xl:max-w-[1139px] 5xl:max-w-[1450px]"
      >
        {partners.map((partner) => (
          <SwiperSlide
            key={partner.id}
            className="partnerSlide z-[999] flex min-h-[250px] items-center justify-center overflow-hidden p-2 sm:max-w-[280]
            md:max-w-[190px] xl:max-w-[302px] 4xl:max-w-[324px] 5xl:max-w-[340px]"
          >
            <a
              href={partner.partner_url}
              target="_blank"
              rel="nofollow"
            >
              <img
                src={partner.image_url}
                alt={partner.name}
                className={`w-[${swiperParams.imageWidth}] h-[${swiperParams.imageHeight}] sliderImage`}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="prev-partners absolute left-0 top-[40%] z-20 hidden translate-y-[-40%] cursor-pointer sm:hidden md:block"
        onClick={handlePrev}
      >
        <ButtonLeft className="fill-white" />
      </button>
      <button
        type="button"
        className="next-partners absolute right-0 top-[40%] z-20 hidden translate-y-[-40%] cursor-pointer sm:hidden md:block"
        onClick={handleNext}
      >
        <ButtonRight className="fill-white" />
      </button>
    </div>
  );
};

export default Slider;
