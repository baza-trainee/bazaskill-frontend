'use client';

import { useEffect, useState } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getAllCandidates } from '@/utils/api/candidates';
import Loader from '@/components/shared/loader/Loader';
import { constants } from '@/constants';
import type { CandidatesResponse } from '@/types/candidates';

import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';

function Candidates() {
  const [filteredCandidates, setFilteredCandidates] = useState<CandidatesResponse[]>([]);

  const candidates: UseQueryResult<CandidatesResponse[], Error> = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates
  });

  useEffect(() => {
    setFilteredCandidates(candidates.data || []);
  }, [candidates.data]);

  const handlerChangeSearch = (data: string) => {
    const dataLowerCase = data.toLowerCase();

    const filtered = candidates.data?.filter((candidate) => {
      const specializationTitle = candidate.specialization?.title.toLowerCase();

      const stackMatch = candidate.stack.some((item) =>
        item.stack.title.toLowerCase().includes(dataLowerCase)
      );

      return (
        specializationTitle.includes(dataLowerCase) ||
        candidate.name.toLowerCase().includes(dataLowerCase) ||
        stackMatch
      );
    });

    setFilteredCandidates(filtered || []);
  };

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="flex flex-col">
      <CandidatesSearch SubmitHandler={handlerChangeSearch} />
      <div className="flex justify-start">
        <CandidatesList candidates={filteredCandidates} />
      </div>
    </div>
  );
}

export default Candidates;
