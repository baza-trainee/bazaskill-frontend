import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import type { PageProps } from '@/types';

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
  // Замінити на готові компоненти.
  return <div>About Page</div>
}