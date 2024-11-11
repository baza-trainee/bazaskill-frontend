'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ICard } from '@/types/cards';

import { getCards } from '@/api/cards';
import { constants } from '@/constants';

import useCentredSlides from './useCentredSlide';
import useSwiperParams from './useSliderParams';

import 'swiper/css';
import clsx from 'clsx';

function ContentCards() {
  const { swiperParams, cardParams } = useSwiperParams();
  const { centeredSlides } = useCentredSlides();

  const { data } = useQuery<ICard[], Error>({
    queryKey: [constants.cards.GET_CARDS],
    queryFn: getCards,
  });

  return (
    <section className="container py-[60px] ">
      <div className="">
        { data && Array.isArray(data) && 
          <Swiper
            speed={4000}
            slidesPerView="auto"
            spaceBetween={swiperParams.spaceBetween}
            centeredSlides={centeredSlides}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay]}
            className="w-full md:max-w-[688px] xl:max-w-[1152px] 2xl:max-w-[1240px] 3xl:max-w-screen-xl 4xl:max-w-[1376px] 5xl:max-w-[1680px]"
          >

          { data.map((card, index) => (
            <SwiperSlide
              key={card.id}
              className={clsx('flex rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6 text-white xs:max-w-48 xl:max-w-[218px]', 
              index % 2 === 0 ? 'mt-[46px]' : 'mb-[46px]')}
            >
              <div
                className="flex flex-col items-center"
              >
                <Image
                  src={card.image_url}
                  alt={card.name}
                  width={cardParams.imageWidth}
                  height={cardParams.imageHeight}
                  className="mb-6 aspect-square rounded-full object-cover text-center grayscale"
                />
                <span className=" flex-col pb-2 text-lg font-bold">
                  {card.name}
                </span>
                <span className="flex-col text-lg">
                  {card.specialization}
                </span>
              </div>
            </SwiperSlide>
              ))
          }
          </Swiper>
        }

      </div>
    </section>
  );
}

export default ContentCards;