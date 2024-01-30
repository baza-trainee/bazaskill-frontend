import Image from 'next/image';
import React from 'react';

interface HelpListProps {
  photos: string[];
}

const HelpList: React.FC<HelpListProps> = ({ photos }) => {
  return (
    <div className="w-[592px] p-[12px]">
      <ul
        className=" flex  flex-wrap justify-center "
        style={{ gap: '32px' }}>
        {photos.map((photo) => (
          <li key={photo} className="rounded-[100px]">
            <Image
              src={photo}
              width={117}
              height={117}
              alt="specialist"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpList;
