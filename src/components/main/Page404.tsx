'use client';
import React from 'react';

const Page404 = () => {
  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full flex-col items-center justify-center  bg-graphite text-white">
      <span className="font-regular font-mont text-[180px]">
        404
      </span>
      <p className="mb-[64px] font-tahoma text-[24px] font-semibold">
        Вибачте, сторінка, яку ви шукаєте, переміщена або
        видалена
      </p>
      <button className="main-gradient h-[54px] w-[272px] rounded-[5px] font-tahoma text-[20px] font-bold uppercase text-black">
        На головну
      </button>
    </div>
  );
};

export default Page404;
