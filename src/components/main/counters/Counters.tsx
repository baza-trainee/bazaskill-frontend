import React from 'react';
import Container from '../Container';

const Counters: React.FC = () => {
  return (
    <Container>
      <ul className="flex justify-between gap-1 py-[91px] font-bold text-white  ">
        <li className="p-6 text-center ">
          <p className="text-4xl ">39+</p>
          <p className="text-2xl  ">живих проєктів</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">350+</p>
          <p className="text-2xl  ">залучених учасників</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">82+</p>
          <p className="text-2xl  ">працевлаштованих</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">12+</p>
          <p className="text-2xl  ">технологій</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">9+</p>
          <p className="text-2xl  ">бібліотек</p>
        </li>
      </ul>
    </Container>
  );
};

export default Counters;
