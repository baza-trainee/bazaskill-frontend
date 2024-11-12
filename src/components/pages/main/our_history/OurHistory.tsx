'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import OurHistoryAnimation from './OurHistoryAnimation';
import OurHistoryText from './OurHistoryText';

const OurHistory = () => {
  const t = useTranslations('Main.history');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <section
          className="flex flex-col gap-[48px] px-4 py-[48px] 
      pt-[100px] sm+:px-[80px] sm+:pt-[60px] lg:gap-[24px] xl:grid xl:grid-cols-2 
      xl:px-[80px] xl:pt-[100px]"
          aria-labelledby="history-title"
        >
          <h2
            id="history-title"
            className="text-center font-tahoma text-[24px] font-bold 
          text-white md:mb-[28px] md:text-2xl lg:mb-[48px] xl:hidden 2xl:text-[40px]"
          >
            {t('title')}
          </h2>
          <OurHistoryAnimation />
          <OurHistoryText />
        </section>
      )}
    </>
  );
};

export default OurHistory;
