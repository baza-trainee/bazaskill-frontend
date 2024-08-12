'use client';

import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import Loader from '../shared/loader/Loader';
import { getDocuments } from '@/api/documents';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PDFView = ({
  document,
}: {
  document: string | null;
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const [documentUrl, setDocumentUrl] = useState('');

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  useEffect(() => {
    const found = data?.find((d) => d.title === document);
    if (found) {
      setDocumentUrl(found.document_url);
    }
  }, [data, document]);

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }): void {
    setNumPages(numPages);
  }

  const pdfWrapperRef = useRef<HTMLDivElement | null>(
    null
  ) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const getWidth = () =>
      pdfWrapperRef?.current?.getBoundingClientRect()
        ?.width || 0;

    setWidth(getWidth());

    const handleResize = () => {
      setWidth(getWidth());
    };

    if (pdfWrapperRef?.current) {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pdfWrapperRef]);


  return (
    <div className='pointer-events-none'>
      <div
        className="mx-auto flex h-full w-full flex-col items-center justify-center xl:w-2/3"
        ref={pdfWrapperRef}
      >
        <Document
          loading={<Loader />}
          file={documentUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          error={
            <div className="text-3xl font-bold">Error</div>
          }
          className={
            'flex w-full flex-col items-center justify-center p-5 '
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={width}
              //scale={3}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};
