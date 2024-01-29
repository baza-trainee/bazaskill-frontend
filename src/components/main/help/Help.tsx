import React from 'react';
import { photosArray } from '@/data/specialists';
import InformationSpecialist from '../helpSpecialist/HelpSpecialist';
import HelpList from '../helpList/HelpList';

const Help = () => {
  return (
    <section className="container py-[60px]">
      <div className="flex gap-[78px]">
        <HelpList photos={photosArray} />
        <InformationSpecialist />
      </div>
    </section>
  );
};

export default Help;
