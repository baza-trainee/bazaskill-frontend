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

  const speciality = useFilters(
    (state) => state.speciality
  );
  const country = useFilters((state) => state.country);
  const stack = useFilters((state) => state.stack);

  const [filteredCandidates, setFilteredCandidates] =
    useState<CandidatesResponse[]>([]);

  useEffect(() => {
    if (country === '' || speciality === '') {
      if (candidates?.data) {
        setFilteredCandidates(candidates.data);
      }
    } else {
      const filtered = candidates?.data?.filter(
        (candidate) =>
          translateCountryName(
            candidate.country.toLowerCase()
          ) ===
            translateCountryName(country.toLowerCase()) &&
          candidate.specialization.title.toLowerCase() ===
            speciality.toLowerCase()
      );
      setFilteredCandidates(filtered || []);
    }
  }, [candidates.data, speciality, country]);

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

  const onSubmit = (data: FieldValues) => {
    const selectedWorkFormat: string =
      data.occupation || '';
    const selectedLanguage: string = data.language || '';
    const selectedStack: string[] = data.stack || [];
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

        const candidateExperience =
          candidate.baza_experience?.length;
        const selectedExperienceLevel = parseInt(
          selectExperience
        );

        const hasSufficientExperience =
          candidateExperience >= selectedExperienceLevel;
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
            ? hasSufficientExperience
            : true) &&
          (selectedLanguage?.length >= 1
            ? hasSelectedLanguages
            : true) &&
          (selectedWorkFormat?.length >= 1
            ? hasSelectedWorkFormat
            : true) &&
          (selectedStack?.length >= 1 ? anyMatch : true) &&
          (selectGraduate.includes('cources')
            ? hasSelectedCources
            : true) &&
          (selectGraduate.includes('gradaute')
            ? hasSelectedGraduate
            : true) &&
          (inputSallary.from && inputSallary.to
            ? hasSelectedSallary
            : true)
        );
      }
    );
    setFilteredCandidates(filtered || []);
  };

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="md:flex md:flex-col">
      <CandidatesTitle />
      <div className="md:flex">
        <Filters SubmitHandler={onSubmit} />
        <CandidatesList candidates={filteredCandidates} />
      </div>
    </div>
  );
};

export default Candidates;
