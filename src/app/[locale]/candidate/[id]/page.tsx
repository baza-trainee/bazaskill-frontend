import CandidateHero from '@/components/candidate/Hero';
import MainInfo from '@/components/candidate/MainInfo';
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
