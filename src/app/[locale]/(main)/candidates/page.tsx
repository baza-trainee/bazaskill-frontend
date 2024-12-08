import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { getTranslations } from 'next-intl/server';

import Loader from '@/components/shared/loader/Loader';
import CookiesModal from '@/components/shared/modals/cookies/CookiesModal';
import type { PageProps } from '@/types';

const DynamicPage = dynamic(
  () => import('@/components/pages/candidates/Candidates'),

  { ssr: false, loading: () => <Loader /> }
);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata'
  });

  return {
    title: t('candidates_title'),
    description: t('candidates_description')
  };
}

async function CandidatesPage() {
  return (
    <div className="overflow-x-hidden bg-graphite p-2 pt-[72px] text-white sm:pt-[80px] md:pt-[150px]">
      <DynamicPage />
      <CookiesModal />
    </div>
  );
}

export default CandidatesPage;
