import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/shared/loader/Loader';

const DynamicPage = dynamic(
  () =>
    import(
      '@/components/candidate/CandidatePage/CandidatePage'
    ),
  {
    loading: () => <Loader />,
  }
);

interface CandidatePageProps {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: CandidatePageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates/${params.id}`
  );
  const candidate = await response.json();
  return {
    title: `BazaSkill ${params.locale === 'pl' ? 'kandydat' : params.locale === 'en' ? 'candidate' : 'кандидат'} - ${candidate.name} ${candidate.specialization.title}`,
    description: `${params.locale === 'pl' ? 'Strona kandydata' : params.locale === 'en' ? 'Candidate`s page' : 'Сторінка кандидата'} ${candidate.name} ${candidate.specialization.title}`,
  };
}

const Candidate = ({ params }: CandidatePageProps) => {
  return (
    <div className="min-h-[100vh] bg-graphite">
      <DynamicPage id={params.id} />
    </div>
  );
};

export default Candidate;
