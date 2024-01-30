import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Partner from './partnerInterface';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

interface SliderProps {
  partners: Partner[];
}

const Slider: React.FC<SliderProps> = ({ partners }) => {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Swiper
          key={'partnersSlider'}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={50}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="partnerSlider mx-[80px]"
        >
          {partners.map((partner) => (
            <SwiperSlide
              key={partner.id}
              className="partnerSlide max-h-[135px] max-w-[320px]"
            >
              <Image
                src={partner.image}
                width={320}
                height={135}
                alt={partner.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev transform: translateY(30%) absolute h-[30px] w-[30px] text-white"></div>
      <div className="swiper-button-next transform: translateY(30%) absolute h-[30px] w-[30px] text-white"></div>
    </div>
  );
};

export default Slider;
