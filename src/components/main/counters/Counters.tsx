'use client';
import CountUp from 'react-countup';

import Container from '../Container';

const Counters: React.FC = () => {
  return (
    <Container>
      <ul className="flex gap-1 py-[48px] font-bold text-white  ">
        <li className="p-6 text-center ">
          <p className="text-4xl">
            <CountUp duration={2.75} start={0} end={39} />
          </p>

          <p className="text-2xl  ">живих проєктів</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">
            <CountUp duration={2.75} start={0} end={350} />
          </p>
          <p className="text-2xl  ">залучених учасників</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">
            <CountUp duration={2.75} start={0} end={82} />
          </p>
          <p className="text-2xl  ">працевлаштованих</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">
            <CountUp duration={2.75} start={0} end={12} />
          </p>
          <p className="text-2xl  ">технологій</p>
        </li>
        <li className="p-6 text-center">
          <p className="text-4xl">
            <CountUp duration={2.75} start={0} end={9} />
          </p>
          <p className="text-2xl  ">бібліотек</p>
        </li>
      </ul>
    </Container>
  );
};

export default Counters;
