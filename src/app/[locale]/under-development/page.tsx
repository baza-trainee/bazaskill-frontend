import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import { PageProps } from "@/types";
import UnderDevelopment from "@/components/shared/under_development/UnderDevelopment";

export async function generateMetadata({ params }: PageProps): Promise<Metadata>{
  const t = await getTranslations({
    locale:params.locale, 
    namespace: 'Metadata'
  });

  return {
    title: t('under_development_title'),
    description: t('under_development_description'),
  };
};

export default function UnderDevelopmentPage(): JSX.Element {
  return <UnderDevelopment/>
}