import { PDFView } from '@/components/user/PdfView';

const DocsPage = ({
  params,
}: {
  params: { title: string };
}) => {
  return <PDFView document={params.title} />;
};

export default DocsPage;
