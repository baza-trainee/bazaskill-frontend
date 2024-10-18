import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

import type { PageProps } from '@/types';

import Loader from '@/components/shared/loader/Loader';

const DynamicPage = dynamic(
  () =>
    import('@/components/user/all_candidates/Candidates'),

  { ssr: false, loading: () => <Loader /> },
);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `BazaSkill ${params.locale === 'pl' ? 'Kandydaci' : params.locale === 'en' ? 'Candidates' : 'Кандидати'} `,
    description: `BazaSkill ${params.locale === 'pl' ? 'Strona kandydata na BazaSkill' : params.locale === 'en' ? 'Candidates page on BazaSkill' : 'Сторінка кандидатів на BazaSkill'} `,
  };
}

async function CandidatesPage() {
  return (
    <div className="flex justify-center overflow-x-hidden bg-graphite p-2 pt-[45px] text-white md:pl-[40px] xl:justify-start xl:pl-[64px]">
      <DynamicPage />
    </div>
  );
}

export default CandidatesPage;
