import { Metadata } from 'next';
import { getAllCandidates } from '@/api/candidates';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import Candidates from '@/components/main/CandidateFilters/Candidates';

export const metadata: Metadata = {
  title: 'BazaSkill Candidates',
  description: 'BazaSkill candidates page',
};

const CandidatesPage: React.FC = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  return (
    <div className="flex justify-center overflow-x-hidden bg-graphite pb-1 pl-[4.25rem] pt-[45px] text-white sm:pl-0 md:px-[40px] xl:justify-start xl:px-[64px] 3xl:px-[80px] 5xl:justify-center 5xl:px-[120px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Candidates />
      </HydrationBoundary>
    </div>
  );
};

export default CandidatesPage;
