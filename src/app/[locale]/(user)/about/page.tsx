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
    title: t('about_title'),
    description: t('about_description'),
  };
};

export default function AboutPage(): JSX.Element {
  // Замінити <div>About Page</div> на готові компоненти.
  return (
    <> 
      <div>About Page</div>
      <CookiesModal />
    </>
  )
}