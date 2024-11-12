'use client';

import { useRouter } from 'next/navigation';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Document, Page, pdfjs } from 'react-pdf';

import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';

import ErrorPage from '../shared/ErrorPage';
import Loader from '../shared/loader/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PDFView({ document }: { document: string | null }) {
  const router = useRouter();
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const [documentUrl, setDocumentUrl] = useState('');

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments
  });

  useEffect(() => {
    const found = data?.find((d) => d.title === document);
    if (found) {
      setDocumentUrl(found.document_url.replace(/^http:\/\//, 'https://'));
    }
  }, [data, document]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const pdfWrapperRef = useRef<HTMLDivElement | null>(
    null
  ) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const getWidth = () =>
      pdfWrapperRef?.current?.getBoundingClientRect()?.width || 0;

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

  const reset = () => router.replace('/');

  return (
    <div>
      <div
        className="relative mx-auto flex size-full flex-col items-center justify-center xl:w-2/3"
        ref={pdfWrapperRef}
      >
        {documentUrl ? (
          <Document
            loading={<Loader />}
            file={documentUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            error={<ErrorPage reset={reset} />}
            className="flex w-full flex-col items-center justify-center p-5"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={width}
              />
            ))}
          </Document>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
