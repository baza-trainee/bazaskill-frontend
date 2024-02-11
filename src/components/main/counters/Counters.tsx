'use client';
import { useState } from 'react';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

interface Counters {
  id: number;
  count: number;
  title: string;
}

const Counters = () => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const counters: Counters[] = [
    {
      id: 1,
      count: 39,
      title: 'живих проєктів',
    },
    {
      id: 2,
      count: 350,
      title: 'залучених учасників',
    },
    {
      id: 3,
      count: 82,
      title: 'працевлаштованих',
    },
    {
      id: 4,
      count: 12,
      title: 'технологій',
    },
    {
      id: 5,
      count: 9,
      title: 'бібліотек',
    },
  ];

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <div className="relative mx-auto hidden justify-center py-[48px] md:flex xl:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={10}
          navigation={{
            prevEl: '.prev-counters',
            nextEl: '.next-counters',
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="countersSlide max-h-full max-w-[1006px]"
        >
          {counters.map(({ id }) => {
            const counter = counters.find(
              (item) => item.id === id
            );
            if (!counter) return null;
            const title =
              id === 2
                ? counter.title.replace('залучених ', '')
                : counter.title;
            return (
              <SwiperSlide key={id} className="text-center">
                <div>
                  <h3 className="text-[40px] font-bold text-white">
                    <CountUp
                      key={id}
                      end={counter.count || 0}
                      duration={2}
                      redraw={true}
                      formattingFn={(value) => `${value}+`}
                    />
                  </h3>
                  <p className="text-2xl text-white">
                    {title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="prev-counters swiper-button-prev transform: translateY(50%) absolute left-0 h-[21px] w-[12px] text-white"></div>
        <div className="next-counters swiper-button-next transform: translateY(50%) right- absolute h-[21px] w-[12px] text-white"></div>
      </div>

      <VisibilitySensor
        partialVisibility
        onChange={handleVisibilityChange}
        offset={{ bottom: 100 }}
      >
        {() => (
          <ul className="row container flex grow flex-col justify-between gap-1 py-[48px] text-center font-bold text-white md:hidden xl:flex xl:flex-row 3xl:gap-[10px] 4xl:gap-[44px] 5xl:gap-[110px] ">
            {counters.map((item, index) => (
              <li className="p-6" key={index}>
                <h3 className="text-[40px] font-bold">
                  {isVisible ? (
                    <CountUp
                      key={item.id}
                      end={item.count}
                      duration={2}
                      redraw={true}
                      formattingFn={(value) => `${value}+`}
                    />
                  ) : (
                    0
                  )}
                </h3>
                <p className="text-2xl">{item.title}</p>
              </li>
            ))}
          </ul>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Counters;
