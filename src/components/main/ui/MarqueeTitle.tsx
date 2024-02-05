'use client';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTitle = () => {
  const [isPlay, setIsPlay] = useState(true);
  return (
    <Marquee
      pauseOnHover={true}
      delay={2}
      play={isPlay}
      onCycleComplete={() => {
        setIsPlay(false);
        setTimeout(() => {
          setIsPlay(true);
        }, 2000);
      }}
    >
      <h2 className="mb-10 mr-[200px] text-center text-6xl font-bold text-white">
        Знайди{' '}
        <span className="main-gradient bg-clip-text text-transparent">
          свого{' '}
        </span>
        ІТ-фахівця - дизайнера - розробника - тестувальника
        - РМа
      </h2>
    </Marquee>
  );
};

export default MarqueeTitle;
