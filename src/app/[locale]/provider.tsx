/* eslint-disable no-unused-vars */
'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import * as React from 'react';
import { getAllCandidates } from '@/api/candidates';
import { constants } from '@/constants';

export function Providers(props: {
  children: React.ReactNode;
  locale: string;
}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  queryClient.prefetchQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {props.children}
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
