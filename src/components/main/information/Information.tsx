import React from 'react';
import { photosArray } from '@/data/specialists';
import InformationList from '../InformationList/InformationList';
import InformationSpecialist from '../informationSpecialist/InformationSpecialist';

const Information = () => {
  return (
    <section className="container py-[60px]">
      <div className="flex gap-[98px]">
        <InformationList photos={photosArray} />
        <InformationSpecialist />
      </div>
    </section>
  );
};

export default Information;
