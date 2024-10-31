'use client';

import { useMediaQuery } from '@react-hook/media-query';
import { useQuery } from '@tanstack/react-query';

import type { IImage } from '@/types/gallery';

import { getImages } from '@/api/gallery';
import { constants } from '@/constants';

import HelpList from './helpList/HelpList';
import HelpListSkeleton from './helpListSkeleton/HelpListSkeleton';
import HelpSpecialist from './helpSpecialist/HelpSpecialist';

function Help(): JSX.Element {
  const { data } = useQuery<IImage[], Error>({
    queryKey: [constants.gallery.GET_IMAGES],
    queryFn: getImages,
  });

  const isExtraLargeScreen = useMediaQuery(
    '(min-width: 1280px)',
  );
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 420px)',
  );
  const isSmallScreen = useMediaQuery('(min-width: 320px)');

  let numPhotos = 6;
  if (isExtraLargeScreen) {
    numPhotos = 16;
  }
  else if (isLargeScreen) {
    numPhotos = 15;
  }
  else if (isMediumScreen) {
    numPhotos = 8;
  }
  else if (isSmallScreen) {
    numPhotos = 6;
  }

  return (
    <section
      className="aboutus relative xs:py-[48px] xl:py-[60px]"
      id="help"
    >
      <div className="flex xs:flex-col-reverse xs:flex-wrap xs:gap-[24px] 
      md:flex-row md:flex-nowrap md:justify-center md:gap-[40px] 
      xl:gap-[80px] 2xl:gap-[64px] 3xl:gap-[100px]  5xl:gap-[140px]">
        <HelpSpecialist />
        {data && data.length
          ? (
              <HelpList photos={data!.slice(0, numPhotos)} />
            )
          : (
              <HelpListSkeleton />
            )}
      </div>
    </section>
  );
}

export default Help;
