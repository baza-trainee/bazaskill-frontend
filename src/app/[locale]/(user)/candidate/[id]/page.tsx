import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

import type { IdPageProps } from '@/types';

import Loader from '@/components/shared/loader/Loader';
import { getTranslations } from 'next-intl/server';

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
  const t = await getTranslations({
    locale:params.locale, 
    namespace: 'Metadata'
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates/${params.id}`,
  );
  const candidate = await response.json();
  return {
    title: `${t('candidate_title')} ${candidate.name} ${candidate.specialization.title}`,
    description: `${t('candidate_description')} ${candidate.name} ${candidate.specialization.title}`,
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
