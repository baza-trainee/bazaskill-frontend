import { Metadata } from 'next';
import Candidates from '@/components/main/CandidateFilters/Candidates';

interface CandidatesPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: CandidatesPageProps): Promise<Metadata> {
  return {
    title: `BazaSkill ${params.locale === 'pl' ? 'Kandydaci' : params.locale === 'en' ? 'Candidates' : 'Кандидати'} `,
    description: `BazaSkill ${params.locale === 'pl' ? 'Strona kandydata na BazaSkill' : params.locale === 'en' ? 'Candidates page on BazaSkill' : 'Сторінка кандидатів на BazaSkill'} `,
  };
}

const CandidatesPage: React.FC = async () => {
  return (
    <div className="flex justify-center overflow-x-hidden bg-graphite p-2 pt-[45px] text-white md:pl-[40px] xl:justify-start xl:pl-[64px]">
      <Candidates />
    </div>
  );
};

export default CandidatesPage;
