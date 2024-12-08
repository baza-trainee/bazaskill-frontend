import type { Dispatch, SetStateAction } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';

import { translateCountryName } from '@/helpers/translateCountryName';
import type { CandidatesResponse } from '@/types/candidates';

interface IFilterCandidatesByMainFilters {
  candidates: UseQueryResult<CandidatesResponse[], Error>;
  setFilteredCandidates: Dispatch<SetStateAction<CandidatesResponse[]>>;
  setIsMainFilter: Dispatch<SetStateAction<boolean>>;
  isMainFilter: boolean;
  speciality: string;
  inputCountry: string;
}

export function filterCandidatesByMainFilters({
  candidates,
  setFilteredCandidates,
  speciality,
  inputCountry,
  setIsMainFilter
}: IFilterCandidatesByMainFilters) {
  if (!speciality && inputCountry) {
    const filtered = candidates?.data?.filter((candidate) => {
      const candidateCountry = translateCountryName(candidate.country?.toLowerCase());
      const matchesCountry = inputCountry === candidateCountry;
      return matchesCountry;
    });

    setFilteredCandidates(filtered || []);
    setIsMainFilter(true);
  } else if (speciality && !inputCountry) {
    const filtered = candidates?.data?.filter((candidate) => {
      const candidateSpecialization = candidate.specialization?.title?.toLowerCase();

      const selectedSpeciality = speciality.toLowerCase();
      const matchesSpeciality = selectedSpeciality === candidateSpecialization;
      return matchesSpeciality;
    });
    setFilteredCandidates(filtered || []);
    setIsMainFilter(true);
  } else {
    const filtered = candidates?.data?.filter((candidate) => {
      const candidateCountry = translateCountryName(candidate.country?.toLowerCase());

      const candidateSpecialization = candidate.specialization?.title?.toLowerCase();

      const selectedSpeciality = speciality.toLowerCase();
      const matchesCountry = inputCountry === candidateCountry;
      const matchesSpeciality = selectedSpeciality === candidateSpecialization;
      return matchesCountry && matchesSpeciality;
    });
    setFilteredCandidates(filtered || []);
    setIsMainFilter(false);
  }
}
