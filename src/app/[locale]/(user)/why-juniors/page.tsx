import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';

export async function generateMetadata({ params }: PageProps): Promise<Metadata>{
  const t = await getTranslations({
    locale:params.locale, 
    namespace: 'Metadata'
  });

  return {
    title: t('why_juniors_title'),
    description: t('why_juniors_description'),
  };
};

export default function WhyJuniorsPage(): JSX.Element {
  // Замінити  <div>WhyJuniorsPage</div> на готові компоненти.
  return ( 
  <> 
    <div>WhyJuniorsPage</div>
    <CookiesModal />
  </>
  )
}