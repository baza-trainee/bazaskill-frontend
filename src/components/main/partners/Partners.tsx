'use client';

import React from 'react';
import Slider from './Slider/Slider';
import partnersData from './partnersData';
import { useTranslations } from 'next-intl';

const Partners: React.FC = () => {
  const t = useTranslations('Main.partners');
  return (
    <div className="4lx:max-w-[1536px] container xs:max-w-[320px] sm:max-w-[420px] md:max-w-[768px] xl:max-w-[1280px] 2xl:max-w-[1368px] 3xl:max-w-[1440px] 5xl:max-w-[1920px]">
      <div
        className="mb-[53px] mt-[10px]
          text-center
          font-tahoma
          text-[24px]
          font-bold
          not-italic
          text-white
          md:text-2xl
          lg:text-[40px]"
      >
        {t('title')}
      </div>
      <div>
        <Slider partners={partnersData} />
      </div>
    </div>
  );
};

export default Partners;
