import React from 'react';
import SpecialistList from '../SpecialistList/SpecialistList';
import SpecialistsInform from '../SpecialistsInform/SpecialistsInform';
import { photosArray } from '@/data/specialists';

const Specialists = () => {
  return (
    <section className="container py-[60px]">
      <div className="flex gap-[98px]">
        <SpecialistList photos={photosArray} />
        <SpecialistsInform />
      </div>
    </section>
  );
};

export default Specialists;
