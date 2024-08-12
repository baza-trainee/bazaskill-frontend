import { PDFView } from '@/components/main/PdfView';

const DocsPage = ({
  params,
}: {
  params: { title: string };
}) => {
  return <PDFView document={params.title} />;
};

export default DocsPage;
