'use client';

import Image from 'next/image';
import useSwiperParams from './useSliderParams';
import useCentredSlides from './useCentredSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { cards } from './data';
import 'swiper/css';

const ContentCards = () => {
  const { swiperParams, cardParams } = useSwiperParams();
  const { centeredSlides } = useCentredSlides();

  return (
    <section className="container py-[60px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[768px] xl:max-w-[1280px] 2xl:max-w-[1368px] 3xl:max-w-[1440px] 4xl:max-w-[1536px] 5xl:max-w-[1920px]">
      <div className="md:mx-[10px] xl:mx-14 2xl:mx-[3px] 3xl:mx-[3px] 4xl:mx-[31px] 5xl:ml-[25px] 5xl:mr-[47px]">
        <Swiper
          speed={4000}
          slidesPerView={'auto'}
          spaceBetween={swiperParams.spaceBetween}
          centeredSlides={centeredSlides}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          className="xs:max-w-[280px] sm:max-w-[380px] md:max-w-[688px] xl:max-w-[1152px] 2xl:max-w-[1240px] 3xl:max-w-[1280px] 4xl:max-w-[1376px] 5xl:max-w-[1680px]"
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className={`flex rounded-md border border-[#7EFE92] bg-[#2C2C2C]
                          p-6 text-white xs:max-w-48 
                          xl:max-w-[218px]
                          ${card.id % 2 == 0 ? 'mt-[46px]' : 'mb-[46px]'}`}
            >
              <div className={`flex flex-col items-center`}>
                <Image
                  src={card.image}
                  alt={card.name}
                  width={cardParams.imageWidth}
                  height={cardParams.imageHeight}
                  className="justify-content pb-6 text-center"
                />
                <span className="flex-col pb-2 text-lg font-bold">
                  {card.name}
                </span>
                <span className="flex-col text-lg">
                  {card.stack}
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
