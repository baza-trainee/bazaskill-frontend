import React from 'react';

const Loader = () => {
  return (
    <div
      className="absolute right-0 top-0 flex h-full w-full flex-col items-center justify-center 
    bg-black"
    >
      <div className="main-gradient relative h-[150px] w-[150px] animate-spin rounded-full shadow-xl">
        <div className="absolute left-[50%] top-[50%] h-[120px] w-[120px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-black "></div>
      </div>
    </div>
  );
};

export default Loader;
