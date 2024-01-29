'use client';
import { useState } from 'react';

import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';


interface Counters {
  id: number;
  count: number;
  title: string;
}

const Counters = () => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const counters: Counters[] = [
    {
      id: 1,
      count: 39,
      title: 'живих проєктів',
    },
    {
      id: 2,
      count: 350,
      title: 'залучених учасників',
    },
    {
      id: 3,
      count: 82,
      title: 'працевлаштованих',
    },
    {
      id: 4,
      count: 12,
      title: 'технологій',
    },
    {
      id: 5,
      count: 9,
      title: 'бібліотек',
    },
  ];
  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };
  return (
    <VisibilitySensor
      partialVisibility
      onChange={handleVisibilityChange}
      offset={{ bottom: 100 }}>
      {() => (
        <ul className="container flex grow justify-between gap-1 py-[48px] text-center font-bold text-white">
          {counters.map((item, index) => {
            return (
              <li className="p-6" key={index}>
                <h3 className="text-[40px] font-bold">
                  {isVisible ? (
                    <CountUp
                      key={item.id}
                      end={item.count}
                      duration={2}
                      redraw={true}
                    />
                  ) : (
                    0
                  )}
                </h3>
                <p className="text-2xl">{item.title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </VisibilitySensor>
  );
};

export default Counters;
