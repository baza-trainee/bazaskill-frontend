'use client';

import { useEffect, useState } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { FieldValues } from 'react-hook-form';

import { getAllCandidates } from '@/utils/api/candidates';
import CandidatesList from '@/components/pages/candidates/components/CandidatesList';
import CandidatesTitle from '@/components/pages/candidates/components/CandidatesTitle';
import Filters from '@/components/pages/candidates/components/Filters';
import { filterCandidatesByMainFilters } from '@/components/pages/candidates/components/filters/filterCandidatesByMainFilters';
import { filterCandidatesOnSubmit } from '@/components/pages/candidates/components/filters/filterCandidatesOnSubmit';
import Loader from '@/components/shared/loader/Loader';
import { constants } from '@/constants';
import { translateCountryName } from '@/helpers/translateCountryName';
import { useFilters } from '@/stores/useFilters';
import type { CandidatesResponse } from '@/types/candidates';

function Candidates() {
  const candidates: UseQueryResult<CandidatesResponse[], Error> = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates
  });

  const { setFilterByCountry, setFilterBySpeciality } = useFilters();

  const speciality = useFilters((state) => state.speciality);

  const country = useFilters((state) => state.country.toLowerCase().trim());

  const inputCountry = translateCountryName(country);

  const [filteredCandidates, setFilteredCandidates] = useState<CandidatesResponse[]>([]);

  const [isMainFilter, setIsMainFilter] = useState(false);

  useEffect(() => {
    if (!speciality && !country) {
      setFilteredCandidates(candidates.data as CandidatesResponse[]);
    }
  }, [candidates.data]);

  useEffect(() => {
    if (!speciality && !country) return;
    filterCandidatesByMainFilters({
      candidates,
      setFilteredCandidates,
      setIsMainFilter,
      speciality,
      inputCountry,
      isMainFilter
    });
  }, [speciality, country, candidates.data]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setFilterByCountry('');
    setFilterBySpeciality('');
    const filtered = filterCandidatesOnSubmit({
      data,
      candidates,
      setFilteredCandidates,
      filteredCandidates,
      isMainFilter
    });
    setFilteredCandidates(filtered || []);
    setIsMainFilter(false);
  };

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="relative p-4 pb-0 md:flex md:flex-col">
      <CandidatesTitle />
      <div className="md:flex">
        <Filters SubmitHandler={onSubmit} />
        {candidates.data && Array.isArray(candidates.data) && (
          <CandidatesList candidates={filteredCandidates || candidates.data} />
        )}
      </div>
    </div>
  );
}

export default Candidates;
