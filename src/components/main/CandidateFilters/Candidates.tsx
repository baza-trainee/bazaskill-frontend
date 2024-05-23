'use client';

import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';
import { CandidatesResponse } from '@/types/candidates';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useFilters } from '@/stores/useFilters';

import CandidatesList from './CandidatesList';
import CandidatesTitle from './CandidatesTitle';
import Filters from './Filters';
import Loader from '@/components/admin/ui/Loader';
import { translateCountryName } from '@/helpers/translateCountryName';

const Candidates = () => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  const {
    setFilterBySpeciality,
    setFilterByCountry,
    setFilterByStack,
    setFilters,
  } = useFilters();

  const speciality = useFilters(
    (state) => state.speciality
  );

  const country = useFilters((state) =>
    state.country.toLowerCase().trim()
  );

  const filters = useFilters((state) => state.filters);

  const stack = useFilters((state) => state.stack);

  const inputCountry = translateCountryName(country);

  const [filteredCandidates, setFilteredCandidates] =
    useState<CandidatesResponse[]>([]);
  const [isMainFilter, setIsMainFilter] = useState(false);

  useEffect(() => {
    if (!speciality && !country && !filters.length) {
      setFilteredCandidates(
        candidates.data as CandidatesResponse[]
      );
    }
  }, [candidates.data]);

  useEffect(() => {
    if (!speciality && !inputCountry) {
      return;
    } else if (!speciality && inputCountry) {
      const filtered = candidates?.data?.filter(
        (candidate) => {
          const candidateCountry = translateCountryName(
            candidate.country?.toLowerCase()
          );
          const matchesCountry =
            inputCountry === candidateCountry;
          return matchesCountry;
        }
      );

      setFilteredCandidates(filtered || []);
      setIsMainFilter(true);
    } else if (speciality && !inputCountry) {
      const filtered = candidates?.data?.filter(
        (candidate) => {
          const candidateSpecialization =
            candidate.specialization?.title?.toLowerCase();

          const selectedSpeciality =
            speciality.toLowerCase();
          const matchesSpeciality =
            selectedSpeciality === candidateSpecialization;
          return matchesSpeciality;
        }
      );
      setFilteredCandidates(filtered || []);
      setIsMainFilter(true);
    } else {
      const filtered = candidates?.data?.filter(
        (candidate) => {
          const candidateCountry = translateCountryName(
            candidate.country?.toLowerCase()
          );

          const candidateSpecialization =
            candidate.specialization?.title?.toLowerCase();

          const selectedSpeciality =
            speciality.toLowerCase();
          const matchesCountry =
            inputCountry === candidateCountry;
          const matchesSpeciality =
            selectedSpeciality === candidateSpecialization;
          return matchesCountry && matchesSpeciality;
        }
      );
      setFilteredCandidates(filtered || []);
      setIsMainFilter(false);
    }
  }, [speciality, country, candidates.data]);

  useEffect(() => {
    if (!stack.length) return;
    const selectedStack: string[] = stack || [];

    const filtered = candidates?.data?.filter(
      (candidate) => {
        const candidateStacks = candidate.stack;
        const hasSelectedStacks = candidateStacks.map(
          (stackItem) => stackItem.stack?.title
        );
        const anyMatch = stack.some((item) =>
          hasSelectedStacks.includes(item)
        );
        return selectedStack?.length >= 1 ? anyMatch : true;
      }
    );
    setFilteredCandidates(filtered || []);
  }, [candidates.data, stack]);

  useEffect(() => {
    if (filters.length) {
      setFilteredCandidates(filters);
    }
  }, [filters]);

  const onSubmit = (data: FieldValues) => {
    setFilterByCountry('');
    setFilterBySpeciality('');
    setFilterByStack([]);
    setFilters([]);

    const selectedWorkFormat: string[] = data.occupation;
    const selectedLanguage: string[] = data.language;
    const selectedStack: string[] = data.stack;
    const selectedStatus: string[] = data.status;
    const selectExperience: string[] = data.projects;
    const selectGraduate: string[] = data.graduate;
    const inputSallary: { from: string; to: string } =
      data.sallary || { from: '', to: '' };

    const noFiltersApplied =
      !selectedWorkFormat.length &&
      !selectedLanguage.length &&
      !selectedStack.length &&
      !selectedStatus.length &&
      !selectExperience.length &&
      !selectGraduate.length &&
      !inputSallary.from &&
      !inputSallary.to;

    if (noFiltersApplied) {
      setFilteredCandidates(candidates.data || []);
      return;
    }

    const filterCandidate = isMainFilter
      ? filteredCandidates
      : candidates?.data;

    const filtered = filterCandidate?.filter(
      (candidate) => {
        const candidateGraduate = candidate.gradaute;
        const hasSelectedGraduate =
          selectGraduate.includes('gradaute') &&
          candidateGraduate?.length >= 1;

        const candidateCources = candidate.cources;
        const hasSelectedCources =
          selectGraduate.includes('cources') &&
          candidateCources?.length >= 1;

        const hasSecondaryEducation =
          selectGraduate.includes(
            'secondary_professional'
          ) &&
          candidateGraduate.some(
            (candidate) =>
              candidate.university_grade ===
              'Secondary professional'
          );

        const candidateExperience =
          candidate.baza_experience?.length || 0;
        const selectedExperienceLevel =
          selectExperience.length > 0
            ? parseInt(selectExperience[0])
            : null;

        let hasExperience = true;
        if (selectedExperienceLevel !== null) {
          if (selectedExperienceLevel <= 3) {
            hasExperience =
              candidateExperience ===
              selectedExperienceLevel;
          } else if (selectedExperienceLevel >= 4) {
            hasExperience = candidateExperience >= 4;
          }
        }

        const candidateLanguages =
          candidate.candidate_language || [];
        const hasSelectedLanguages =
          selectedLanguage.length > 0
            ? candidateLanguages.some((lang) =>
                selectedLanguage.includes(lang.language)
              )
            : true;
        const candidateWorkFormat = candidate.work_format;
        const hasSelectedWorkFormat =
          selectedWorkFormat.includes(candidateWorkFormat);

        const candidateStacks = candidate.stack;
        const hasSelectedStacks = candidateStacks.map(
          (stackItem) => stackItem.stack?.id.toString()
        );
        const anyMatch = selectedStack.some((item) =>
          hasSelectedStacks.includes(item)
        );

        const candidateStatus = candidate.status;
        const hasSelectedStatus =
          selectedStatus.includes(candidateStatus);

        const candidateSallaryFrom = parseInt(
          candidate.sallary_form
        );
        const candidateSallaryTo = parseInt(
          candidate.sallary_to
        );

        const inputSallaryFrom = parseInt(
          inputSallary.from
        );
        const inputSallaryTo = parseInt(inputSallary.to);
        const hasSelectedSallary =
          candidateSallaryFrom >= inputSallaryFrom &&
          candidateSallaryTo <= inputSallaryTo;
        return (
          (selectExperience?.length >= 1
            ? hasExperience
            : true) &&
          (selectedLanguage?.length >= 1
            ? hasSelectedLanguages
            : true) &&
          (selectedWorkFormat?.length >= 1
            ? hasSelectedWorkFormat
            : true) &&
          (selectedStack?.length >= 1 ? anyMatch : true) &&
          (selectedStatus?.length >= 1
            ? hasSelectedStatus
            : true) &&
          (selectGraduate.includes('cources')
            ? hasSelectedCources
            : true) &&
          (selectGraduate.includes('gradaute')
            ? hasSelectedGraduate
            : true) &&
          (selectGraduate.includes('secondary_professional')
            ? hasSecondaryEducation
            : true) &&
          (inputSallary.from && inputSallary.to
            ? hasSelectedSallary
            : true)
        );
      }
    );
    console.log(filtered);
    setFilteredCandidates(filtered || []);
    setFilters(filtered);
    setIsMainFilter(false);
  };

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="relative p-4 md:flex md:flex-col">
      <CandidatesTitle />
      <div className="md:flex">
        <Filters SubmitHandler={onSubmit} />
        {candidates.data &&
          Array.isArray(candidates.data) && (
            <CandidatesList
              candidates={
                filteredCandidates
                  ? filteredCandidates
                  : candidates.data
              }
            />
          )}
      </div>
    </div>
  );
};

export default Candidates;
