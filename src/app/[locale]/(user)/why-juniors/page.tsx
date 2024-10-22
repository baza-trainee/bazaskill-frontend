import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';

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
  // Замінити на готові компоненти.
  return <div>Why Juniors Page</div>
}