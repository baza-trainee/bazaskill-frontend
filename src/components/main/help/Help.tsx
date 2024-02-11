import React from 'react';
import { photosArray } from '@/data/specialists';
import HelpList from './helpList/HelpList';
import HelpSpecialist from './helpSpecialist/HelpSpecialist';

const Help = () => {
  return (
    <section className="container py-[60px]">
      <div className="flex justify-center gap-[100px] 4xl:gap-[100px] 5xl:gap-[140px]">
        <HelpList photos={photosArray} />
        <HelpSpecialist />
      </div>
    </section>
  );
};

export default Help;
