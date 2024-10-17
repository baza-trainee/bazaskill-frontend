'use client';
import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { constants } from '@/constants';
import { getAllCandidates } from '@/api/candidates';
import { CandidatesResponse } from '@/types/candidates';
import { useFilters } from '@/stores/useFilters';
import { translateCountryName } from '@/helpers/translateCountryName';
import { filterCandidatesOnSubmit } from '@/components/shared/candidates/helpers/filterCandidatesOnSubmit';
import { filterCandidatesByMainFilters } from '@/components/shared/candidates/helpers/filterCandidatesByMainFilters';
import CandidatesList from '@/components/shared/candidates/CandidatesList';
import CandidatesTitle from '@/components/shared/candidates/CandidatesTitle';
import Filters from '@/components/shared/candidates/Filters';
import Loader from '@/components/shared/loader/Loader';
const Candidates = () => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  const {
    setFilters,
    setFilterByCountry,
    setFilterBySpeciality,
    setFilterByStack,
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

  useLayoutEffect(() => {
    if (!speciality && !country && filters.length === 0) {
      setFilteredCandidates(
        candidates.data as CandidatesResponse[]
      );
    }
  }, [candidates.data]);

  useEffect(() => {
    filterCandidatesByMainFilters({
      candidates,
      setFilteredCandidates,
      setIsMainFilter,
      speciality,
      inputCountry,
      isMainFilter,
    });
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
    const filtered = filterCandidatesOnSubmit({
      data,
      candidates,
      setFilteredCandidates,
      filteredCandidates,
      isMainFilter,
    });
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
