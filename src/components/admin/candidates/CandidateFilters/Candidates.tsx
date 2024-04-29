'use client';

import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';

import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';
import Filters from './Filters';
import { CandidatesResponse } from '@/types/candidates';
import Loader from '../../ui/Loader';

const Candidates = () => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  if (candidates.status === 'pending') return <Loader />;

  console.log(candidates.data);

  return (
    <div className="flex flex-col">
      <CandidatesSearch />
      <div className="flex justify-start">
        <Filters />
        <CandidatesList candidates={candidates.data!} />
      </div>
    </div>
  );
};

export default Candidates;
