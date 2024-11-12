'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

import AdvantagesMobile from './AdvantagesMobile/AdvantagesMobile';
import { benefitsData } from './data';

const Advantages = () => {
  const t = useTranslations('Main.advantages');
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <section
          className="flex w-full flex-col items-center justify-center gap-4 py-12 md:py-[60px] lg:py-[100px]"
          aria-labelledby="advantages-title"
        >
          <h2
            id="advantages-title"
            className="text-center font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:mb-[66px] lg:text-[40px]"
          >
            {t('title')}
          </h2>
          <div className="hidden flex-wrap items-start justify-center gap-8 md:flex">
            {benefitsData.map((item, index) => (
              <article
                key={item.id}
                className={clsx(
                  'h-[388px] w-[612px] rounded-2xl bg-gradient-to-b from-green to-graphite p-[2px] 5xl:w-[720px]',
                  index % 2 !== 0 && 'xl:mt-[240px]'
                )}
              >
                <div className="flex h-full w-full items-start justify-start gap-4 overflow-hidden rounded-2xl bg-graphite p-6 text-white">
                  <Image
                    src={item.icon}
                    alt="article icon"
                    role="img"
                    aria-hidden="true"
                    width={120}
                    height={120}
                    className="mx-auto w-[120px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-[24px] font-bold">
                      {t(item.title)}
                    </h3>
                    <p className="text-[20px] leading-[28px]">{t(item.text)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {isMobile && <AdvantagesMobile cardData={benefitsData} />}
        </section>
      )}
    </>
  );
};

export default Advantages;
