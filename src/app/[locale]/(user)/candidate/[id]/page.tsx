import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

import type { IdPageProps } from '@/types';

import Loader from '@/components/shared/loader/Loader';

const DynamicPage = dynamic(
  () =>
    import(
      '@/components/user/candidate_page/CandidatePage'
    ),

  { ssr: false, loading: () => <Loader /> },
);

export async function generateMetadata({
  params,
}: IdPageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates/${params.id}`,
  );
  const candidate = await response.json();
  return {
    title: `BazaSkill ${params.locale === 'pl' ? 'kandydat' : params.locale === 'en' ? 'candidate' : 'кандидат'} - ${candidate.name} ${candidate.specialization.title}`,
    description: `${params.locale === 'pl' ? 'Strona kandydata' : params.locale === 'en' ? 'Candidate`s page' : 'Сторінка кандидата'} ${candidate.name} ${candidate.specialization.title}`,
  };
}

async function Candidate({ params }: IdPageProps) {
  return (
    <div className="min-h-screen bg-graphite">
      <DynamicPage id={params.id} />
    </div>
  );
}

export default Candidate;
