import React from 'react';
import { photosArray } from '@/data/specialists';
import HelpList from './helpList/HelpList';
import HelpSpecialist from './helpSpecialist/HelpSpecialist';

const Help = () => {
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
