import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { DocsPageProps } from '@/types';

import { PDFView } from '@/components/pages/PdfView';

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata',
  });

  return {
    title: t(`docs_${params.title}_title`),
    description: t(`docs_${params.title}_description`),
  };
}

function DocsPage({ params }: DocsPageProps) {
  return <PDFView document={params.title} />;
}

export default DocsPage;
