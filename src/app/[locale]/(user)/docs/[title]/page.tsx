import { PDFView } from '@/components/user/PdfView';

function DocsPage({
  params,
}: {
  params: { title: string };
}) {
  return <PDFView document={params.title} />;
}

export default DocsPage;
