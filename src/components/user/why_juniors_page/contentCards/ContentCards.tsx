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

function ContentCards() {
  const { swiperParams, cardParams } = useSwiperParams();
  const { centeredSlides } = useCentredSlides();

  const { data } = useQuery<ICard[], Error>({
    queryKey: [constants.cards.GET_CARDS],
    queryFn: getCards,
  });

  return (
    <section
      className="container py-[60px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl 4xl:max-w-screen-4xl 5xl:max-w-screen-5xl"
      aria-labelledby="content-cards-title"
    >
      <h2 id="content-cards-title" className="sr-only">
        Content Cards
      </h2>
      <div className="md:mx-[10px] xl:mx-14 2xl:mx-[3px] 3xl:mx-[3px] 4xl:mx-[31px] 5xl:ml-[25px] 5xl:mr-[47px]">
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
          className="xs:max-w-[280px] sm:max-w-[380px] md:max-w-[688px] xl:max-w-[1152px] 2xl:max-w-[1240px] 3xl:max-w-screen-xl 4xl:max-w-[1376px] 5xl:max-w-[1680px]"
          aria-roledescription="carousel"
          aria-labelledby="content-cards-title"
        >
          {data &&
            Array.isArray(data) &&
            data.map((card) => (
              <SwiperSlide
                key={card.id}
                className={`flex rounded-md border border-[#7EFE92] bg-[#2C2C2C]
                            p-6 text-white xs:max-w-48 
                            xl:max-w-[218px]`}
                role="group"
                aria-labelledby={`card-title-${card.id}`}
                aria-describedby={`card-desc-${card.id}`}
              >
                <article className="flex flex-col items-center" role="article">
                  <Image
                    src={card.image_url}
                    alt={`${card.name}, ${card.specialization}`}
                    width={cardParams.imageWidth}
                    height={cardParams.imageHeight}
                    className="mb-6 aspect-square rounded-full object-cover text-center grayscale"
                    role="img"
                  />
                  <h3 id={`card-title-${card.id}`} className="pb-2 text-lg font-bold">
                    {card.name}
                  </h3>
                  <p id={`card-desc-${card.id}`} className="text-lg">
                    {card.specialization}
                  </p>
                </article>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ContentCards;
