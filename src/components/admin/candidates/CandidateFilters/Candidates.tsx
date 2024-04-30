'use client';

import { constants } from '@/constants';
import { getFilteredCandidates } from './filterHelperFunc';
import { useState } from 'react';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';

import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';
import Filters from './Filters';
import { CandidatesResponse } from '@/types/candidates';
import { FieldValues } from 'react-hook-form';
import Loader from '../../ui/Loader';

const Candidates = () => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  const [filteredCandidates, setFilteredCandidates] =
    useState<CandidatesResponse[]>([]);

  if (candidates.status === 'pending') return <Loader />;

  console.log(candidates.data);

  const filter = (data: FieldValues) => {
    const filteredCandidates = getFilteredCandidates(
      data,
      candidates.data!
    );

    setFilteredCandidates(filteredCandidates);
  };

  const displayCandidates =
    filteredCandidates.length > 0
      ? filteredCandidates
      : candidates.data || [];

  return (
    <div className="flex flex-col">
      <CandidatesSearch />
      <div className="flex justify-start">
        <Filters func={filter} />
        <CandidatesList candidates={displayCandidates} />
      </div>
    </div>
  );
};

export default Candidates;
