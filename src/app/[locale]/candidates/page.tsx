import { Metadata } from 'next';
import Candidates from '@/components/main/CandidateFilters/Candidates';

export const metadata: Metadata = {
  title: 'BazaSkill Candidates',
  description: 'BazaSkill candidates page',
};

const CandidatesPage: React.FC = async () => {
  return (
    <div className="flex justify-center overflow-x-hidden bg-graphite p-2 pt-[45px] text-white md:pl-[40px] xl:justify-start xl:pl-[64px]">
      <Candidates />
    </div>
  );
};

export default CandidatesPage;
