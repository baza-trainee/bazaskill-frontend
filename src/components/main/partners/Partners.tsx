'use client';

import React from 'react';
import Slider from './Slider/Slider';
import partnersData from './partnersData';

const Partners: React.FC = () => {
  return (
    <div className="4lx:max-w-[1536px] container xs:max-w-[320px] sm:max-w-[420px] md:max-w-[768px] xl:max-w-[1280px] 2xl:max-w-[1368px] 3xl:max-w-[1440px] 5xl:max-w-[1920px]">
      <div
        className="mb-[43px]
          text-center
          font-tahoma
          text-[24px]
          font-bold
          not-italic
          text-white
          sm:text-[35px]
          md:text-[40px]"
      >
        Наші партнери
      </div>
      <div>
        <Slider partners={partnersData} />
      </div>
    </div>
  );
};

export default Partners;
