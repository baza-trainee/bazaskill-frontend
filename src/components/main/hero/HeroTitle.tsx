'use client';

import { TypeAnimation } from 'react-type-animation';

const HeroTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'ІТ-фахівця',
        2500,
        'дизайнера',
        2500,
        'розробника',
        2500,
        'тестувальника',
        2500,
        'РМа',
        2500,
      ]}
      wrapper="span"
      speed={25}
      style={{
        display: 'inline',
        fontWeight: 'bold',
      }}
      repeat={Infinity}
    />
  );
};

export default HeroTitle;
