'use client';

import Image from 'next/image';
import { getCards } from '@/api/cards';
import { ICard } from '@/types/cards';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import useSwiperParams from './useSliderParams';
import useCentredSlides from './useCentredSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ContentCards = () => {
  const { swiperParams, cardParams } = useSwiperParams();
  const { centeredSlides } = useCentredSlides();

  const { data } = useQuery<ICard[], Error>({
    queryKey: [constants.cards.GET_CARDS],
    queryFn: getCards,
  });

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
          {data &&
            Array.isArray(data) &&
            data.map((card, index) => (
              <SwiperSlide
                key={card.id}
                className={`flex rounded-md border border-[#7EFE92] bg-[#000000]
                          p-6 text-white xs:max-w-48 
                          xl:max-w-[218px]
                          ${index % 2 == 0 ? 'mt-[46px]' : 'mb-[46px]'}`}
              >
                <div
                  className={`flex flex-col items-center`}
                >
                  <Image
                    src={card.image_url}
                    alt={card.name}
                    width={cardParams.imageWidth}
                    height={cardParams.imageHeight}
                    className="mb-6 aspect-square rounded-full object-cover text-center"
                  />
                  <span className=" flex-col pb-2 text-lg font-bold">
                    {card.name}
                  </span>
                  <span className="flex-col text-lg">
                    {card.specialization}
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
