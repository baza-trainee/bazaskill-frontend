import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { PageProps } from '@/types';
import Help from '@/components/pages/why-juniors/help/Help';
import ContentCards from '@/components/pages/why-juniors/contentCards/ContentCards';
import JuniorsAdvantages from '@/components/pages/why-juniors/juniors-advantages/JuniorsAdvantages';
import HistoryJuniors from '@/components/pages/why-juniors/history-juniors/HistoryJuniors';
import CookiesModal from '@/components/shared/modals/cookies/CookiesModal';
import Testimonials from '@/components/pages/why-juniors/testimonials/Testimonials';
import HiddenTitle from '@/components/shared/HiddenTitle';
import RoiCalculator from '@/components/pages/why-juniors/ROI-calculator/RoiCalculator';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata',
  });

  return {
    title: t('why_juniors_title'),
    description: t('why_juniors_description'),
  };
}

export default function WhyJuniorsPage(): JSX.Element {
  return (
    <div className="relative pt-[72px] sm:pt-[80px] md:pt-[150px]">
      <HiddenTitle variantTitle="Why_juniors" />
      <Help />
      <ContentCards />
      <JuniorsAdvantages />
      <RoiCalculator />
      <HistoryJuniors />
      <Testimonials />
      <CookiesModal />
    </div>
  );
}
