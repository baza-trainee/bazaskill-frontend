'use client';
import React, { useEffect, useState } from 'react';
import { photosArray } from '@/data/specialists';
import HelpList from './helpList/HelpList';
import HelpSpecialist from './helpSpecialist/HelpSpecialist';
import { useMediaQuery } from '@react-hook/media-query';

const Help = () => {
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
  const [photos, setPhotos] = useState(photosArray);
  useEffect(() => {
    setPhotos(photosArray.slice(0, numPhotos));
  }, [
    isExtraLargeScreen,
    isLargeScreen,
    isMediumScreen,
    isSmallScreen,
    numPhotos,
  ]);
  return (
    <section id="aboutus" className="container py-[60px]">
      <div className="flex justify-center gap-[100px]">
        <HelpList photos={photosArray} />
        <HelpSpecialist />
      </div>
    </section>
  );
};

export default Help;
