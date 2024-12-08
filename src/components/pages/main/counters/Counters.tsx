'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCounters } from '@/utils/api/counters';
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

function CounterSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-32 bg-gray-300 rounded"></div>
    </div>
  );
}

function CountersComp() {
  const t = useTranslations('Main');
  const [hasCounted, setHasCounted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [isMounted, setIsMounted] = useState(false);

  const { data, isFetching } = useQuery<ICounters[], Error>({
    queryKey: [constants.counters.FETCH_COUNTERS],
    queryFn: getCounters
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const counters: Counters[] = [
    { id: 1, count: Number(data?.[0]?.liveProject) ?? 0, title: t('counters.candidates') },
    { id: 2, count: Number(data?.[0]?.technologies) ?? 0, title: t('counters.partners') },
    { id: 3, count: Number(data?.[0]?.libraries) ?? 0, title: t('counters.visitors') },
    { id: 4, count: Number(data?.[0]?.members) ?? 0, title: t('counters.specialities') }
  ];

  return (
    <section className="container py-12 lg:py-24" aria-labelledby="counters-heading">
      <h2 id="counters-heading" className="sr-only">
        {t('counters.heading')}
      </h2>

      {isMounted && (
        <>
          <div
            className="relative mx-auto hidden justify-center  md+:flex lg:hidden"
            role="region"
            aria-label="Swiper counters navigation"
          >
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              navigation={{
                prevEl: '.prev-counters',
                nextEl: '.next-counters'
              }}
              loop={true}
              className="countersSlide max-h-full max-w-[1006px]"
            >
              {counters.map(({ id, count, title }) => (
                <SwiperSlide key={id} className="text-center h-32">
                  {isFetching ? (
                    <CounterSkeleton />
                  ) : (
                    <div>
                      <h3 className="text-4xl font-bold text-white">
                        <CountUp
                          end={count}
                          duration={2}
                          start={hasCounted ? count : 0}
                          redraw={true}
                          formattingFn={(value) => `${value}+`}
                        />
                      </h3>
                      <p className="text-xl text-white">
                        {id === 4 ? title.replace('залучених ', '') : title}
                      </p>
                    </div>
                  )}
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
              className="grid grid-cols-1 sm:grid-cols-2 md+:hidden lg:grid lg:grid-cols-4 gap-6 
            text-center font-bold text-white"
            >
              {counters.map(({ id, count, title }) => (
                <li key={id} className="p-6 h-32">
                  {isFetching ? (
                    <CounterSkeleton />
                  ) : (
                    <>
                      <h3 className="text-4xl font-bold leading-10">
                        {inView ? (
                          <CountUp
                            end={count}
                            duration={2}
                            start={0}
                            redraw={true}
                            formattingFn={(value) => `${value}+`}
                          />
                        ) : (
                          '0+'
                        )}
                      </h3>
                      <p className="text-xl">{title}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

export default CountersComp;
