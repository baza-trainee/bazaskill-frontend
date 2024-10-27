import declineWord from 'decline-word';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { CandidatesResponse } from '@/types/candidates';

import CandidateCard from './CandidateCard';

function CandidatesList({
  candidates,
}: {
  candidates: CandidatesResponse[];
}) {
  const t = useTranslations('Filter');
  const [numberOnPage, setNumberOnPage] = useState(6);

  const increase = () => {
    setNumberOnPage(prev => prev + 6);
  };

  const decrease = () => {
    setNumberOnPage(6);
  };

  return (
    <div className="box-content w-full max-h-[175vh] no-scrollbar overflow-y-auto overflow-x-hidden">
      <div className="ml-2 w-full pb-[40px] pt-[56px] font-tahoma text-[24px] md:pl-[48px] md:pt-0 2xl:pl-[78px] 3xl:pl-[88px] 4xl:pl-[92px] 5xl:pl-[88px]">
        {candidates?.length}
        {' '}
        {declineWord(
          candidates.length,
          t('amount.candidate'),
          '',
          t('amount.item_1'),
          t('amount.item_2'),
        )}
    
      </div>
   
      <div className="flex w-full flex-col gap-4 md:pl-[48px] xl:grid xl:grid-cols-2 2xl:gap-[30px] 2xl:pl-[78px] 3xl:gap-[32px] 3xl:pl-[88px] 4xl:pl-[92px] 5xl:grid-cols-3 5xl:gap-6 5xl:pl-[88px]">
        {candidates
          ?.slice(0, numberOnPage)
          .map(candidate => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
            />
          ))}
        
      </div>
     
      {candidates.length > 6 && (
        <div className="my-[60px] flex w-full items-center justify-center sm:pr-0 md:mb-[94px] md:mt-[70px] md:pl-[48px] md:pt-0 2xl:pl-[78px] 3xl:pl-[88px] 4xl:pl-[92px] 5xl:pl-[88px]">
          {candidates.length <= numberOnPage
            ? (
                <svg
                  onClick={decrease}
                  className="mt-[2px] rotate-180 cursor-pointer fill-white transition-all hover:scale-125"
                  width={32}
                  height={32}
                >
                  <use href="/Icons/sprite.svg#icon-dropdown"></use>
                </svg>
              )
            : (
                <svg
                  onClick={increase}
                  className="mt-[2px] cursor-pointer fill-white transition-all hover:scale-125"
                  width={32}
                  height={32}
                >
                  <use href="/Icons/sprite.svg#icon-dropdown"></use>
                </svg>
              )}
        </div>
      )}
    </div>
  );
}

export default CandidatesList;
