'use client';

// import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroTitle = () => {
  // useEffect(() => {
  //   document.body.style.overflowX = 'hidden';
  // }, []);

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
        fontSize: '64px',
        display: 'inline',
        fontWeight: 'bold',
      }}
      repeat={Infinity}
    />
  );
};

export default HeroTitle;
