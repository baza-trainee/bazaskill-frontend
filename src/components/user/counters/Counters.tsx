'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ICounters } from '@/types/counters';

import { getCounters } from '@/api/counters';
import { constants } from '@/constants';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

interface Counters {
  id: number;
  count: number;
  title: string;
}

function CountersComp() {
  const t = useTranslations('Main');
  const [isVisible, setIsVisible]
    = useState<boolean>(false);

  const { data, isFetching } = useQuery<ICounters[], Error>(
    {
      queryKey: [constants.counters.FETCH_COUNTERS],
      queryFn: getCounters,
    },
  );

  const counters: Counters[] = [
    {
      id: 1,
      count:
        isFetching || !data?.length
          ? 0
          : +(data as ICounters[])[0].liveProject,
      title: t('counters.live_projects'),
    },
    {
      id: 2,
      count:
        isFetching || !data?.length
          ? 0
          : +(data as ICounters[])[0].technologies,
      title: t('counters.technologies'),
    },
    {
      id: 3,
      count:
        isFetching || !data?.length
          ? 0
          : +(data as ICounters[])[0].libraries,
      title: t('counters.libraries'),
    },
    {
      id: 4,
      count:
        isFetching || !data?.length
          ? 0
          : +(data as ICounters[])[0].members,
      title: t('counters.participants'),
    },
    {
      id: 5,
      count:
        isFetching || !data?.length
          ? 0
          : +(data as ICounters[])[0].employed,
      title: t('counters.employed'),
    },
  ];

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <section className="container py-[48px] lg:py-[91px]">
      <div className="relative mx-auto hidden justify-center md:flex xl:hidden">
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
              item => item.id === id,
            );
            if (!counter)
              return null;
            const title
              = id === 4
                ? counter.title.replace('залучених ', '')
                : counter.title;
            return (
              <SwiperSlide key={id} className="text-center">
                <div className="">
                  <h3 className="text-[40px] font-bold text-white">
                    <CountUp
                      key={id}
                      end={counter.count || 0}
                      duration={2}
                      redraw={true}
                      formattingFn={value => `${value}+`}
                    />
                  </h3>
                  <p className="custom-line-height   text-2xl text-white md:text-xl">
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
          <ul className="flex grow flex-col justify-between gap-[24px] text-center font-bold text-white md:hidden md:gap-1 xl:flex xl:flex-row 3xl:gap-[10px] 4xl:gap-[44px] 5xl:gap-[110px] ">
            {counters.map((item, index) => (
              <li
                className="p-[25px] md:p-[16px] lg:p-[23px] "
                key={index}
              >
                <h3 className="text-[40px] font-bold leading-10 ">
                  {isVisible
                    ? (
                        <CountUp
                          key={item.id}
                          end={item.count}
                          duration={2}
                          redraw={true}
                          formattingFn={value => `${value}+`}
                        />
                      )
                    : (
                        0
                      )}
                </h3>
                <p className="text-xl xl:text-2xl">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        )}
      </VisibilitySensor>
    </section>
  );
}

export default CountersComp;
