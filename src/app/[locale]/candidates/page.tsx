import { Metadata } from 'next';
import Candidates from '@/components/main/CandidateFilters/Candidates';

export const metadata: Metadata = {
  title: 'BazaSkill Candidates',
  description: 'BazaSkill candidates page',
};

const CandidatesPage: React.FC = async () => {
  return (
    <div className="flex justify-center overflow-x-hidden bg-graphite pb-1 pl-[4.25rem] pt-[45px] text-white sm:pl-0 md:px-[40px] xl:justify-start xl:px-[64px] 3xl:px-[80px] 5xl:justify-center 5xl:px-[120px]">
      <Candidates />
    </div>
  );
};

export default CandidatesPage;
