'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getCounters } from '@/api/counters';
import { constants } from '@/constants';
import type { ICounters } from '@/types/counters';

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
  const [hasCounted, setHasCounted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const { data, isFetching } = useQuery<ICounters[], Error>({
    queryKey: [constants.counters.FETCH_COUNTERS],
    queryFn: getCounters,
  });

  const counters: Counters[] = [
    {
      id: 1,
      count: isFetching || !data?.length ? 0 : +data[0].liveProject,
      title: t('counters.candidates'),
    },
    {
      id: 2,
      count: isFetching || !data?.length ? 0 : +data[0].technologies,
      title: t('counters.partners'),
    },
    {
      id: 3,
      count: isFetching || !data?.length ? 0 : +data[0].libraries,
      title: t('counters.visitors'),
    },
    {
      id: 4,
      count: isFetching || !data?.length ? 0 : +data[0].members,
      title: t('counters.specialities'),
    },
  ];

  return (
    <section
      className="container py-[48px] lg:py-[91px]"
      aria-labelledby="counters-heading"
    >
      <h2 id="counters-heading" className="sr-only">
        {t('counters.heading')}
      </h2>
      <div
        className="relative mx-auto hidden justify-center md+:flex xl:hidden"
        role="region"
        aria-label="Swiper counters navigation"
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={10}
          navigation={{
            prevEl: '.prev-counters',
            nextEl: '.next-counters',
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="countersSlide max-h-full max-w-[1006px]"
        >
          {counters.map(({ id, count, title }) => (
            <SwiperSlide key={id} className="text-center">
              <div>
                <h3 className="text-[40px] font-bold text-white">
                  <CountUp
                    end={count}
                    duration={2}
                    start={hasCounted ? count : 0}
                    redraw={true}
                    formattingFn={(value) => `${value}+`}
                  />
                </h3>
                <p className="custom-line-height text-2xl text-white md:text-xl">
                  {id === 4 ? title.replace('залучених ', '') : title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="prev-counters swiper-button-prev absolute left-0"
          aria-label="Previous counters"
        />
        <button
          className="next-counters swiper-button-next absolute right-0"
          aria-label="Next counters"
        />
      </div>

      <div ref={ref}>
        <ul
          className="flex grow flex-col justify-between gap-[24px] text-center font-bold text-white sm+:hidden xl:flex xl:flex-row"
        >
          {counters.map(({ id, count, title }) => (
            <li className="p-[25px] md:p-[16px] lg:p-[23px]" key={id}>
              <h3 className="text-[40px] font-bold leading-10">
                {inView ? (
                  <CountUp
                    end={count}
                    duration={2}
                    start={0}
                    redraw={true}
                    formattingFn={(value) => `${value}+`}
                  />
                ) : (
                  0
                )}
              </h3>
              <p className="text-xl xl:text-2xl">{title}</p>
            </li>
          ))}
        </ul>

        <ul
          className="hidden flex-wrap items-center justify-center gap-[24px] text-center font-bold text-white sm+:flex md+:hidden"
        >
          {counters.map(({ id, count, title }) => (
            <li
              className="min-w-[40vw] p-[25px] md:p-[16px] lg:p-[23px]"
              key={id}
            >
              <h3 className="text-[40px] font-bold leading-10">
                {inView ? (
                  <CountUp
                    end={count}
                    duration={2}
                    start={0}
                    redraw={true}
                    formattingFn={(value) => `${value}+`}
                  />
                ) : (
                  0
                )}
              </h3>
              <p className="text-xl xl:text-2xl">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CountersComp;
