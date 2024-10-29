import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import Help from '@/components/user/help/Help';
import ContentCards from '@/components/user/contentCards/ContentCards';
import JuniorsAdvantages from '@/components/user/juniors-advantages/JuniorsAdvantages';

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
  return ( 
  <div className='pt-[80px] md:pt-[150px]'> 
    <Help />
    <ContentCards />
    <JuniorsAdvantages/>
    <CookiesModal />
  </div>
  )
}