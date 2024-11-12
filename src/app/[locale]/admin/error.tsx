'use client';

import ErrorPage from '@/components/shared/ErrorPage';

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return <ErrorPage reset={reset} />;
}
