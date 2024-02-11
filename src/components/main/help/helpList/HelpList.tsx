import Image from 'next/image';
import React from 'react';

interface HelpListProps {
  photos: string[];
}

const HelpList: React.FC<HelpListProps> = ({ photos }) => {
  return (
    <div className="w-[592px] 5xl:w-[708px]  ">
      <ul className=" flex  flex-wrap justify-center gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]">
        {photos.map((photo) => (
          <li
            key={photo}
            className="overflow-hidden rounded-[100px] ">
            <Image
              src={photo}
              width={117}
              height={117}
              alt="specialist"
              className="5xl:h-[132px] 5xl:w-[132px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpList;
