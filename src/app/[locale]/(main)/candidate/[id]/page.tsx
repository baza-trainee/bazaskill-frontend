import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { getTranslations } from 'next-intl/server';

import Loader from '@/components/shared/loader/Loader';
import CookiesModal from '@/components/shared/modals/cookies/CookiesModal';
import type { IdPageProps } from '@/types';

const DynamicPage = dynamic(
  () => import('@/components/pages/candidate/CandidatePage'),

  { ssr: false, loading: () => <Loader /> }
);

export async function generateMetadata({ params }: IdPageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata'
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates/${params.id}`);
  const candidate = await response.json();
  return {
    title: `${t('candidate_title')} ${candidate.name} ${candidate.specialization.title}`,
    description: `${t('candidate_description')} ${candidate.name} ${candidate.specialization.title}`
  };
}

async function Candidate({ params }: IdPageProps) {
  return (
    <div className="min-h-screen bg-graphite pt-[72px] sm:pt-[80px] md:pt-[150px]">
      <DynamicPage id={params.id} />
      <CookiesModal />
    </div>
  );
}

export default Candidate;
