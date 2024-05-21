'use client';

import dynamic from 'next/dynamic';
import HelpSpecialist from './helpSpecialist/HelpSpecialist';
import { useMediaQuery } from '@react-hook/media-query';
import { getImages } from '@/api/gallery';
import { constants } from '@/constants';
import { IImage } from '@/types/gallery';
import { useQuery } from '@tanstack/react-query';

const DynamicImages = dynamic(
  () => import('./helpList/HelpList'),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Help = () => {
  const { data } = useQuery<IImage[], Error>({
    queryKey: [constants.gallery.GET_IMAGES],
    queryFn: getImages,
  });

  const isExtraLargeScreen = useMediaQuery(
    '(min-width: 1280px)'
  );
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 420px)'
  );
  const isSmallScreen = useMediaQuery('(min-width: 320px)');

  let numPhotos = 6;
  if (isExtraLargeScreen) {
    numPhotos = 16;
  } else if (isLargeScreen) {
    numPhotos = 15;
  } else if (isMediumScreen) {
    numPhotos = 8;
  } else if (isSmallScreen) {
    numPhotos = 6;
  }

  return (
    <section
      className="aboutus relative xs:py-[48px] xl:py-[60px]"
      id="help"
    >
      <div className="flex xs:flex-col-reverse xs:flex-wrap xs:gap-[24px] md:flex-row md:flex-nowrap md:justify-center md:gap-[40px] xl:gap-[80px] 2xl:gap-[64px] 3xl:gap-[100px]  5xl:gap-[140px]">
        {data && Array.isArray(data) && (
          <DynamicImages
            photos={data!.slice(0, numPhotos)}
          />
        )}
        <HelpSpecialist />
      </div>
    </section>
  );
};

export default Help;
