'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Cards {
  id: number;
  image: string;
  name: string;
  stack: string;
}

const cards: Cards[] = [
  {
    id: 0,
    image: '/contentCards/pic (2).png',
    name: 'Viktor',
    stack: 'Full Stack',
  },
  {
    id: 1,
    image: '/contentCards/pic (3).png',
    name: 'Viktoria',
    stack: 'PM',
  },
  {
    id: 2,
    image: '/contentCards/pic (4).png',
    name: 'Tania',
    stack: 'Designer',
  },
  {
    id: 3,
    image: '/contentCards/pic (9).png',
    name: 'Sofia',
    stack: 'Back-end',
  },
  {
    id: 4,
    image: '/contentCards/pic (5).png',
    name: 'Valentyna',
    stack: 'Full Stack',
  },
];

const ContentCards = () => {
  return (
    <section className="relaive container py-[60px]">
      <div className="ml-2">
        <Swiper
          key={'contentCards'}
          slidesPerView={5}
          spaceBetween={45}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide
            key={cards[0].id}
            className="mb-[46px] flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[0].image}
                alt={cards[0].name}
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
          <SwiperSlide
            key={cards[1].id}
            className="mt-[46px] flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[1].image}
                alt={cards[1].name}
                width={117}
                height={117}
                className="justify-content pb-6 text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold text-white">
                {cards[1].name}
              </span>
              <span className="flex-col text-lg text-white">
                {cards[1].stack}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={cards[2].id}
            className="mb-[46px]flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[2].image}
                alt={cards[2].name}
                width={117}
                height={117}
                className="justify-content pb-6 text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold text-white">
                {cards[2].name}
              </span>
              <span className="flex-col text-lg text-white">
                {cards[2].stack}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={cards[3].id}
            className="mt-[46px] flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[3].image}
                alt={cards[3].name}
                width={117}
                height={117}
                className="justify-content pb-6 text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold text-white">
                {cards[3].name}
              </span>
              <span className="flex-col text-lg text-white">
                {cards[3].stack}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={cards[4].id}
            className="mb-[46px]flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[4].image}
                alt={cards[4].name}
                width={117}
                height={117}
                className="justify-content pb-6 text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold text-white">
                {cards[4].name}
              </span>
              <span className="flex-col text-lg text-white">
                {cards[4].stack}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={cards[2].id}
            className="mt-[46px] flex min-h-[242px] max-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={cards[2].image}
                alt={cards[2].name}
                width={117}
                height={117}
                className="justify-content pb-6 text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold text-white">
                {cards[2].name}
              </span>
              <span className="flex-col text-lg text-white">
                {cards[2].stack}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ContentCards;
