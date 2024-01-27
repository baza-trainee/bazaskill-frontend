import React from 'react';
import SpecialistList from '../SpecialistList/SpecialistList';
import SpecialistsInform from '../SpecialistsInform/SpecialistsInform';
import { photosArray } from '@/data/specialists';

const Specialists = () => {
  return (
    <section>
      <div className="container flex gap-[98px] py-[60px]">
        <SpecialistList photos={photosArray} />
        <SpecialistsInform />
      </div>
    </section>
  );
};

export default Specialists;
