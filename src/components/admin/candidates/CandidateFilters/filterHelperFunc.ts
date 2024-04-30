import { FieldValues } from 'react-hook-form';
import { CandidatesResponse } from '@/types/candidates';

const languageMapping: Record<string, string> = {
  en: 'English',
  de: 'German',
  pl: 'Polish',
};

export const getFilteredCandidates = (
  data: FieldValues,
  candidates: CandidatesResponse[]
) => {
  switch (true) {
    case data.language.length > 0:
      return candidates.filter((candidate) => {
        return candidate.candidate_language.some((lang) => {
          return data.language.includes(
            Object.keys(languageMapping).find(
              (key) =>
                languageMapping[key] === lang.language
            ) || ''
          );
        });
      });
    default:
      return candidates;
  }
};
