'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { cards } from './data';
import 'swiper/css';

const ContentCards = () => {
  const [swiperParams, setSwiperParams] = useState({
    spaceBetween: 24,
    containerClass: 'container',
  });

  const [cardParms, setCardParams] = useState({
    imageWidth: 80,
    imageHeight: 80,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 320 && windowWidth < 420) {
        setSwiperParams({
          spaceBetween: 24,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80,
        });
      } else if (windowWidth >= 420 && windowWidth < 768) {
        setSwiperParams({
          spaceBetween: 24,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80,
        });
      } else if (windowWidth >= 768 && windowWidth < 1280) {
        setSwiperParams({
          spaceBetween: 46,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80,
        });
      } else if (
        windowWidth >= 1280 &&
        windowWidth < 1368
      ) {
        setSwiperParams({
          spaceBetween: 56,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 112,
          imageHeight: 112,
        });
      } else if (
        windowWidth >= 1368 &&
        windowWidth < 1440
      ) {
        setSwiperParams({
          spaceBetween: 36,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117,
        });
      } else if (
        windowWidth >= 1440 &&
        windowWidth < 1536
      ) {
        setSwiperParams({
          spaceBetween: 46,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117,
        });
      } else if (
        windowWidth >= 1536 &&
        windowWidth < 1920
      ) {
        setSwiperParams({
          spaceBetween: 56,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117,
        });
      } else if (windowWidth >= 1920) {
        setSwiperParams({
          spaceBetween: 60,
          containerClass: 'mx-auto',
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container py-[60px]">
      <div className=" md:mx-[10px] xl:mx-14 2xl:mx-[3px] 3xl:mx-[3px] 4xl:mx-[31px] 5xl:ml-[25px] 5xl:mr-[47px]">
        <Swiper
          speed={4000}
          slidesPerView={'auto'}
          spaceBetween={swiperParams.spaceBetween}
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
              className={`flex rounded-md border border-[#7EFE92] bg-[#2C2C2C]
                          p-6 text-white xs:max-w-48 
                          xl:max-w-[218px]
                          ${card.id % 2 == 0 ? 'mt-[46px]' : 'mb-[46px]'}`}
            >
              <div className={`flex flex-col items-center`}>
                <Image
                  src={card.image}
                  alt={card.name}
                  width={cardParms.imageWidth}
                  height={cardParms.imageHeight}
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
