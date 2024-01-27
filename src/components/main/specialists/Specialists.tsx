import React from 'react';
import SpecialistList from '../SpecialistList/SpecialistList';
import SpecialistsInform from '../SpecialistsInform/SpecialistsInform';

const Specialists = () => {
  const photosArray = [
    '/images/specialist_main/spec_1.png',
    '/images/specialist_main/spec_2.png',
    '/images/specialist_main/spec_3.png',
    '/images/specialist_main/spec_4.png',
    '/images/specialist_main/spec_5.png',
    '/images/specialist_main/spec_6.png',
    '/images/specialist_main/spec_7.png',
    '/images/specialist_main/spec_8.png',
    '/images/specialist_main/spec_9.png',
    '/images/specialist_main/spec_10.png',
    '/images/specialist_main/spec_11.png',
    '/images/specialist_main/spec_12.png',
    '/images/specialist_main/spec_13.png',
    '/images/specialist_main/spec_14.png',
    '/images/specialist_main/spec_15.png',
    '/images/specialist_main/spec_16.png',
  ];
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
