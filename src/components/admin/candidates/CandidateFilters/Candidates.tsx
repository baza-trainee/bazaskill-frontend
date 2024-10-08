'use client';

import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';
import { FieldValues } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useFilters } from '@/stores/useFilters';
import { CandidatesResponse } from '@/types/candidates';
import { filterCandidatesOnSubmit } from '@/components/candidates-shared/filters/filterCandidatesOnSubmit';
import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';
import Filters from './Filters';
import Loader from '@/components/shared/loader/Loader';

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

  const { setFilters } = useFilters();

  const filters = useFilters((state) => state.filters);

  useEffect(() => {
    if (candidates?.data && !filters.length) {
      setFilteredCandidates(candidates.data);
    }
  }, [candidates.data]);

  useEffect(() => {
    if (filters.length) {
      setFilteredCandidates(filters);
    }
  }, [filters]);

  if (candidates.status === 'pending') return <Loader />;

  const onSubmit = (data: FieldValues) => {
    setFilters([]);
    const filtered = filterCandidatesOnSubmit({
      data,
      candidates,
      setFilteredCandidates,
      filteredCandidates,
    });
    setFilteredCandidates(filtered || []);
    setFilters(filtered);
  };

  const handlerChangeSearch = (data: string) => {
    const filtered = candidates.data?.filter(
      (candidate) => {
        const specializationTitle =
          candidate.specialization?.title.toLowerCase();
        const dataLowerCase = data.toLowerCase();

        return (
          specializationTitle.includes(dataLowerCase) ||
          candidate.name.toLowerCase() === dataLowerCase ||
          candidate.surname.toLowerCase() === dataLowerCase
        );
      }
    );
    setFilteredCandidates(filtered || []);
  };

  return (
    <div className="flex flex-col">
      <CandidatesSearch
        SubmitHandler={handlerChangeSearch}
      />
      <div className="flex justify-start">
        <Filters SubmitHandler={onSubmit} />
        <CandidatesList candidates={filteredCandidates} />
      </div>
    </div>
  );
};

export default Candidates;
