import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonials';

const TestimonialCard = ({
  item,
}: {
  item: Testimonial;
}) => {
  return (
    <div className="flex w-[100%] flex-col items-center justify-between gap-[10px] md:flex-row 5xl:justify-end 5xl:gap-[24px]">
      <div className="flex items-center gap-[12px] xl:gap-[36px]  5xl:flex-col">
        <Image
          src={item.image}
          alt={item.name}
          width={122}
          height={122}
          className="h-[90px] w-[90px] rounded-[8px] xl:h-[122px] xl:w-[122px]"
        />
        <div className="text-start">
          <h4 className="font-tahoma font-bold tracking-[.72px] text-white md:mb-[15px] md:text-[20px]  xl:text-[24px] xl:leading-[1.5]">
            {item.name}
          </h4>
          <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white md:mb-[5px] md:text-[calc(10px+(20-10)*((100vw-768px)/(1440-768)))] 5xl:text-[20px]">
            {item.position}
          </p>
          <p className="font-open-sans text-[calc(10px+(14-10)*((100vw-768px)/(1440-768)))] font-normal text-white">
            {item.data}
          </p>
        </div>
      </div>
      <p className="max-w-[calc(400px+(716-400)*((100vw-768px)/(1536-768)))] text-start font-open-sans text-[calc(12px+(24-12)*((100vw-320px)/(1920-320)))] font-normal  tracking-[.4px] text-white xl:text-xl 3xl:max-w-[716px] 5xl:max-w-[562px]">
        {'“' + item.review + '”'}
      </p>
    </div>
  );
};

export default TestimonialCard;
