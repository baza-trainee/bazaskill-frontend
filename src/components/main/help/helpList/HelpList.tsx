import Image from 'next/image';
import React from 'react';

interface HelpListProps {
  photos: string[];
}

const HelpList: React.FC<HelpListProps> = ({ photos }) => {
  return (
    <div className="mx-auto xs:w-[280px] sm:w-[380px] md:w-[293px] xl:w-[508px] 2xl:w-[592px] 4xl:w-[604px] 5xl:w-[708px]  ">
      <ul className=" flex  flex-wrap justify-center xs:gap-[20px] md:gap-[24px] xl:gap-[16px] 2xl:gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]">
        {photos.map((photo) => (
          <li
            key={photo}
            className="overflow-hidden rounded-[100px] "
          >
            <Image
              src={photo}
              width={117}
              height={117}
              alt="specialist"
              className=" xs:h-[80px] xs:w-[80px]  xl:h-[112px] xl:w-[112px] 2xl:h-[117px] 2xl:w-[117px]  5xl:h-[132px] 5xl:w-[132px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpList;
