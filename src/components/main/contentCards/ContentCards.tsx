'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { cards } from './data';
import 'swiper/css';

const ContentCards = () => {
  return (
    <section className="relaive container py-[60px]">
      <div className="">
        <Swiper
          speed={4000}
          slidesPerView={5}
          spaceBetween={45}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] 
              bg-[#2C2C2C] p-6 odd:mt-[46px] even:mb-[46px]"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={117}
                  height={117}
                  className="justify-content pb-6 text-center"
                />
                <span className="flex-col pb-2 text-lg font-bold text-white">
                  {cards[0].name}
                </span>
                <span className="flex-col text-lg text-white">
                  {cards[0].stack}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ContentCards;
