'use client';

import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';
import { CandidatesResponse } from '@/types/candidates';

import CandidatesList from './CandidatesList';
import CandidatesTitle from './CandidatesTitle';
import Filters from './Filters';
import Loader from '@/components/admin/ui/Loader';

const Candidates = () => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="md:flex md:flex-col">
      <CandidatesTitle />
      <div className="md:flex">
        <Filters />
        <CandidatesList candidates={candidates.data!} />
      </div>
    </div>
  );
};

export default Candidates;
