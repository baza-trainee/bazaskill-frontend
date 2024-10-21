import declineWord from 'decline-word';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import type { CandidatesResponse } from '@/types/candidates';

import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';

import CandidateCard from './CandidateCard';

function CandidatesList({
  candidates,
}: {
  candidates: CandidatesResponse[];
}) {
  const { ref, inView } = useInView({});
  const [numberOnPage, setNumberOnPage] = useState(4);

  const increase = () => {
    setNumberOnPage(prev => prev + 4);
  };

  useEffect(() => {
    increase();
  }, [inView]);

  return (
    <div className="no-scrollbar box-content max-h-[145vh] w-full overflow-y-auto pr-[24px] 5xl:pr-[196px]">
      <div className="pl-[24px] font-tahoma text-[24px]">
        {candidates.length}
        {' '}
        {declineWord(
          candidates.length,
          'кандидат',
          '',
          'и',
          'ів',
        )}
      </div>
      <div className="mt-[40px] flex h-fit max-w-[950px] grow flex-wrap items-start justify-start gap-[24px] pl-[24px]">
        <div className="relative box-border flex h-[486px] w-[442px] items-center justify-center rounded-[10px] border-2 border-green bg-transparent">
          <Link
            href="/admin/candidates/add"
            className="flex flex-col items-center gap-[16px] font-sans text-[20px]"
          >
            <PlusIcon className="size-[123px] stroke-[#4DC760]" />
            <p className="ml-[10px] font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати кандидата
            </p>
          </Link>
        </div>
        {candidates
          ?.slice(0, numberOnPage)
          .map(candidate => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
            />
          ))}
      </div>
      <div ref={ref} className="mx-auto h-4 w-full bg-black"></div>
      {/* {candidates.length > 4 && (
        <div
          className="mx-auto mb-[94px] mt-[70px] flex w-4/5 items-center justify-center"
        >
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
      )} */}
    </div>
  );
}

export default CandidatesList;
