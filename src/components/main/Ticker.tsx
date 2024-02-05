import React from 'react';
import Marquee from 'react-fast-marquee';

const Ticker = () => {
  return (
    <div className="ticker main-gradient relative flex h-[2rem] justify-center overflow-hidden text-black">
      <Marquee>
        <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
          Front-End Developer
        </div>
        <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
          Back-End Developer
        </div>
        <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
          Fullstack Developer
        </div>
        <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
          Design
        </div>
        <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
          QA
        </div>
        <div className="ticker_item whitespace-nowrap px-[50px]  font-bold">
          PM
        </div>
      </Marquee>
    </div>

    // <div className="ticker main-gradient relative flex h-[2rem] justify-center overflow-hidden text-black">
    //   <div className="flex animate-[ticker_40s_linear_infinite]">
    //     <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
    //       Front-End Developer
    //     </div>
    //     <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
    //       Back-End Developer
    //     </div>
    //     <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
    //       Fullstack Developer
    //     </div>
    //     <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
    //       Design
    //     </div>
    //     <div className="ticker_item whitespace-nowrap px-[50px] font-bold">
    //       QA
    //     </div>
    //     <div className="ticker_item whitespace-nowrap px-[50px]  font-bold">
    //       PM
    //     </div>
    //   </div>
    // </div>
  );
};

export default Ticker;
