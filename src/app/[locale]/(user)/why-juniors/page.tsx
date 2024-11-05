import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';
import Help from '@/components/user/why_juniors_page/help/Help';
import ContentCards from '@/components/user/why_juniors_page/contentCards/ContentCards';
import JuniorsAdvantages from '@/components/user/why_juniors_page/juniors-advantages/JuniorsAdvantages';
import HistoryJuniors from '@/components/user/why_juniors_page/history-juniors/HistoryJuniors';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import Testimonials from '@/components/user/why_juniors_page/testimonials/Testimonials';
import HiddenTitle from '@/components/shared/HiddenTitle';
// import Testimonials from '@/components/user/testimonials/Testimonials';
import RoiCalculator from '@/components/user/why_juniors_page/ROI-calculator/RoiCalculator';

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
  <div className='relative pt-[72px] sm:pt-[80px] md:pt-[150px]'> 
    <HiddenTitle variantTitle='Why_juniors'/>
    <Help />
    <ContentCards />
    <JuniorsAdvantages/>
    <RoiCalculator/>
    <HistoryJuniors/>
    <Testimonials/>
    <CookiesModal />
  </div>
  )
}