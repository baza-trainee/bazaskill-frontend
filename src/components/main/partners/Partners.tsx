'use client';

import React from 'react';
import Slider from './Slider';
import partnersData from './partnersData';

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto my-[60px] w-full">
      <div
        className="mb-[43px]
          text-center
          font-tahoma
          text-[40px]
          font-bold
          not-italic
          text-white"
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
