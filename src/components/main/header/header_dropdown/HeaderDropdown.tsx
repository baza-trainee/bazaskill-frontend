import Tick from '@/components/icons/Tick';
import React, { useState } from 'react';

const HeaderDropdown = ({ data }: { data: string[] }) => {
  const [checked, setChecked] = useState<number[]>([]);

  const checkItem = (index: number) => {
    if (!checked.includes(index)) {
      setChecked([...checked, index]);
    } else {
      setChecked(checked.filter((item) => item !== index));
    }
  };

  return (
    <div className="absolute left-0 top-[100%] z-50 flex w-[15rem] flex-col items-center justify-center border border-gray bg-darkGraphite pb-4 text-white  ">
      <ul className="mb-4 w-full">
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex w-full items-center justify-between border-b border-b-gray bg-darkGraphite p-[1rem] hover:text-yellow [&:last-of-type]:border-b-transparent ${checked.includes(index) && 'bg-graphite text-yellow'}`}
          >
            {item}
            <div
              onClick={() => checkItem(index)}
              className="flex h-[20px] w-[20px] items-center justify-center border border-white"
            >
              {checked.includes(index) && <Tick />}
            </div>
          </li>
        ))}
      </ul>
      <button className="mx-auto rounded-sm border border-yellow bg-none px-12 py-1 text-yellow">
        Знайти
      </button>
    </div>
  );
};

export default HeaderDropdown;
