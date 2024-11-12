'use client';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate
} from '@tanstack/react-query';

import { getAllCandidates } from '@/api/candidates';
import { constants } from '@/constants';

function QueryProvider(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {props.children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}

export default QueryProvider;
