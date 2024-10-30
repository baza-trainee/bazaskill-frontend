import Image from 'next/image';

import type { IImage } from '@/types/gallery';

interface HelpListProps {
  photos: IImage[];
}

const HelpList: React.FC<HelpListProps> = ({ photos }) => {
  return (
    <section
      className="mx-auto xs:w-[280px] sm:w-[380px] md:w-[293px] xl:w-[508px] 2xl:w-[592px] 4xl:w-[604px] 5xl:w-[708px]"
      aria-labelledby="help-list-title"
    >
      <h2 id="help-list-title" className="sr-only">
        Our Specialists
      </h2>
      <ul
        className="flex flex-wrap justify-center xs:gap-[20px] md:gap-[24px] xl:gap-[16px] 2xl:gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]"
        role="list"
        aria-label="List of specialists"
      >
        {photos.map((photo, index) => (
          <li
            key={index}
            className="overflow-hidden rounded-[100px] duration-700 grayscale hover:scale-105 hover:cursor-pointer"
            role="listitem"
          >
            <Image
              src={photo.image_url}
              width={117}
              height={117}
              alt={`Specialist ${index + 1}`}
              className="xs:size-[80px] xl:size-[112px] 2xl:size-[117px] 5xl:size-[132px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HelpList;

