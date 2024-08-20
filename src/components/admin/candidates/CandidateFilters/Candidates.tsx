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

import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';
import Filters from './Filters';
import { CandidatesResponse } from '@/types/candidates';
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

    const selectedWorkFormat: string =
      data.occupation || '';
    const selectedLanguage: string = data.language || '';
    const selectedStack: string[] = data.stack || [];
    const selectedStatus: string = data.status || '';
    const selectExperience: string = data.projects || '';
    const selectGraduate: string = data.graduate || '';
    const inputSallary: { from: string; to: string } =
      data.sallary || { from: '', to: '' };
    const filtered = candidates.data?.filter(
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
          candidate.baza_experience?.length;
        const selectedExperienceLevel = parseInt(
          selectExperience
        );
        let hasExperience;
        if (selectedExperienceLevel <= 3) {
          hasExperience =
            candidateExperience === selectedExperienceLevel;
        }
        if (selectedExperienceLevel >= 4) {
          hasExperience = candidateExperience >= 4;
        }

        const candidateLanguages =
          candidate.candidate_language;
        const hasSelectedLanguages =
          candidateLanguages.some((lang) => {
            const hasSelectedLanguage =
              lang.language.includes(selectedLanguage);
            return hasSelectedLanguage;
          });
        const candidateWorkFormat = candidate.work_format;
        const hasSelectedWorkFormat =
          selectedWorkFormat.includes(candidateWorkFormat);

        const candidateStacks = candidate.stack;
        const hasSelectedStacks = candidateStacks.map(
          (stackItem) => stackItem.stack?.title
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
