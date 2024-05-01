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
import { FieldValues } from 'react-hook-form';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (candidates.data) {
      setFilteredCandidates(candidates.data);
    }
  }, [candidates.data]);

  if (candidates.status === 'pending') return <Loader />;

  console.log(candidates.data);

  const onSubmit = (data: FieldValues) => {
    const selectedWorkFormat: string = data.occupation;
    const selectedLanguage: string = data.language;
    const selectedStack: string[] = data.stack;

    const filtered = candidates.data?.filter(
      (candidate) => {
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

        return (
          (hasSelectedLanguages &&
            hasSelectedWorkFormat &&
            anyMatch) ||
          (hasSelectedLanguages &&
            !selectedWorkFormat &&
            !anyMatch) ||
          (!selectedLanguage &&
            hasSelectedWorkFormat &&
            anyMatch) ||
          (anyMatch &&
            !selectedLanguage &&
            !hasSelectedWorkFormat)
        );
      }
    );
    console.log(filtered);

    setFilteredCandidates(filtered || []);
  };

  return (
    <div className="flex flex-col">
      <CandidatesSearch />
      <div className="flex justify-start">
        <Filters SubmitHandler={onSubmit} />
        <CandidatesList candidates={filteredCandidates} />
      </div>
    </div>
  );
};

export default Candidates;
