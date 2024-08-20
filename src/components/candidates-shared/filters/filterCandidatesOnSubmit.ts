import { CandidatesResponse } from '@/types/candidates';
import { UseQueryResult } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues } from 'react-hook-form';

interface IFilterCandidatesOnSubmit {
  data: FieldValues;
  candidates: UseQueryResult<CandidatesResponse[], Error>;
  filteredCandidates: CandidatesResponse[];
  setFilteredCandidates: Dispatch<
    SetStateAction<CandidatesResponse[]>
  >;
  isMainFilter: boolean;
}

export const filterCandidatesOnSubmit = ({
  data,
  candidates,
  isMainFilter,
  filteredCandidates,
  setFilteredCandidates,
}: IFilterCandidatesOnSubmit) => {
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

  const filtered = filterCandidate?.filter((candidate) => {
    const candidateGraduate = candidate.gradaute;
    const hasSelectedGraduate =
      selectGraduate.includes('gradaute') &&
      candidateGraduate?.length >= 1;

    const candidateCources = candidate.cources;
    const hasSelectedCources =
      selectGraduate.includes('cources') &&
      candidateCources?.length >= 1;

    const hasSecondaryEducation =
      selectGraduate.includes('secondary_professional') &&
      candidateGraduate.some(
        (candidate: { university_grade: string }) =>
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
          candidateExperience === selectedExperienceLevel;
      } else if (selectedExperienceLevel >= 4) {
        hasExperience = candidateExperience >= 4;
      }
    }

    const candidateLanguages =
      candidate.candidate_language || [];
    const hasSelectedLanguages =
      selectedLanguage.length > 0
        ? candidateLanguages.some(
            (lang: { language: string }) =>
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

    const inputSallaryFrom = parseInt(inputSallary.from);
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
  });
  return filtered;
};
