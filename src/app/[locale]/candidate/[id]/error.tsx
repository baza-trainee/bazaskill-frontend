'use client';

import CandidateErrorPage from '@/components/main/CandidateErrorPage.tsx';

export default function ErrorBoundary({
  error,
}: {
  error: Error;
}) {
  console.log(error);
  return <CandidateErrorPage />;
}
