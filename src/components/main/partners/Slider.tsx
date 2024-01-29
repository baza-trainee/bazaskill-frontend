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
          className="mx-[80px]"
        >
          {partners.map((partner) => (
            <SwiperSlide
              key={partner.id}
              className="max-h-[135px] max-w-[320px]"
            >
              <Image
                src={partner.image}
                width={320}
                height={135}
                alt={partner.alt}
                onError={(e) =>
                  console.error('Image failed to load', e)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Slider;
