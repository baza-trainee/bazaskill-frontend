import { getSpecializationsWithStack } from '@/api/specialization';
import Header from '@/components/main/header/Header';
import { constants } from '@/constants';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function header() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
    </HydrationBoundary>
  );
}
