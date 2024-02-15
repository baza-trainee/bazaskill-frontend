'use client';

import React from 'react';
import Slider from './Slider';
import partnersData from './partnersData';

const Partners: React.FC = () => {
  return (
    <div className="container">
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
