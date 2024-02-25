import CandidateHero from '@/components/candidate/CandidatePage/Hero';
import MainInfo from '@/components/candidate/CandidatePage/MainInfo';
import React from 'react';

const Candidate: React.FC = () => {
  return (
    <div className="bg-graphite">
      <CandidateHero />
      <MainInfo />
    </div>
  );
};

export default Candidate;
