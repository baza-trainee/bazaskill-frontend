import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';
import Help from '@/components/user/why_juniors_page/help/Help';
import ContentCards from '@/components/user/why_juniors_page/contentCards/ContentCards';
import JuniorsAdvantages from '@/components/user/why_juniors_page/juniors-advantages/JuniorsAdvantages';
import HistoryJuniors from '@/components/user/why_juniors_page/history-juniors/HistoryJuniors';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import Testimonials from '@/components/user/why_juniors_page/testimonials/Testimonials';
// import Testimonials from '@/components/user/testimonials/Testimonials';

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
  <div className='pt-[72px] sm:pt-[80px] md:pt-[150px]'> 
    <Help />
    <ContentCards />
    <JuniorsAdvantages/>
    <HistoryJuniors/>
    <Testimonials/>
    <CookiesModal />
  </div>
  )
}