import React from 'react';
import Candidates from './CandidateFilters/Candidates';

const CandidatesPage: React.FC = () => {
  return (
    <div className="container bg-graphite p-[20px] pb-1 pt-[45px] text-white md:px-[40px] xl:px-[64px] 3xl:px-[80px]">
      <Candidates />
    </div>
  );
};

export default CandidatesPage;
