import { IImage } from '@/types/gallery';
import Image from 'next/image';
import React from 'react';
('./helpList.css');

interface HelpListProps {
  photos: IImage[];
}

const HelpList: React.FC<HelpListProps> = ({ photos }) => {
  return (
    <div className="mx-auto xs:w-[280px] sm:w-[380px] md:w-[293px] xl:w-[508px] 2xl:w-[592px] 4xl:w-[604px] 5xl:w-[708px]  ">
      <ul className="flex flex-wrap justify-center xs:gap-[20px] md:gap-[24px] xl:gap-[16px] 2xl:gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]">
        {photos.map((photo, index) => (
          <li
            key={index}
            className="  zoom overflow-hidden rounded-[100px] filter hover:scale-105 hover:cursor-pointer"
          >
            <Image
              src={photo.image_url}
              width={117}
              height={117}
              alt="specialist"
              className="zoom hover:scale-103 xs:h-[80px] xs:w-[80px] xl:h-[112px] xl:w-[112px] 2xl:h-[117px]  2xl:w-[117px] 5xl:h-[132px] 5xl:w-[132px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpList;
