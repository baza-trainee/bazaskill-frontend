import Image from 'next/image';
import React from 'react';

interface SpecialistListProps {
  photos: string[];
}

const SpecialistList: React.FC<SpecialistListProps> = ({
  photos,
}) => {
  return (
    <div>
      <ul
        className="flex w-[592px] flex-wrap "
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

export default SpecialistList;
