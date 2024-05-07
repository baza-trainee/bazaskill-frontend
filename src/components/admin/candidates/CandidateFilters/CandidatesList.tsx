import { useState } from 'react';
import declineWord from 'decline-word';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';
import CandidateCard from './CandidateCard';
import { CandidatesResponse } from '@/types/candidates';

const CandidatesList = ({
  candidates,
}: {
  candidates: CandidatesResponse[];
}) => {
  const [numberOnPage, setNumberOnPage] = useState(4);

  const increase = () => {
    setNumberOnPage((prev) => prev + 4);
  };

  const decrease = () => {
    setNumberOnPage(4);
  };

  return (
    <div className=" box-content pr-[24px] 5xl:pr-[196px]">
      <div className="pl-[24px] font-tahoma text-[24px]">
        {candidates.length}{' '}
        {declineWord(
          candidates.length,
          'кандидат',
          '',
          'и',
          'ів'
        )}
      </div>
      <div className="mt-[40px] flex h-fit max-w-[950px] grow flex-wrap items-start justify-start gap-[24px] pl-[24px]">
        <div className="relative box-border flex h-[486px] w-[442px] items-center justify-center rounded-[10px] border-[2px] border-green bg-transparent">
          <Link
            href="/admin/candidates/add"
            className="flex flex-col items-center gap-[16px] font-sans text-[20px]"
          >
            <PlusIcon className="h-[123px] w-[123px] stroke-[#4DC760]" />
            <p className="ml-[10px] font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати кандидата
            </p>
          </Link>
        </div>
        {candidates
          ?.slice(0, numberOnPage)
          .map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
            />
          ))}
      </div>
      <div
        className={`${candidates.length <= numberOnPage && 'hidden'} mb-[94px] mt-[70px] flex w-full items-center justify-center`}
      >
        {candidates.length >= numberOnPage ? (
          <svg
            onClick={decrease}
            className="mt-[2px] rotate-180 cursor-pointer fill-white transition-all hover:scale-125"
            width={32}
            height={32}
          >
            <use href="/Icons/sprite.svg#icon-dropdown"></use>
          </svg>
        ) : (
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
    </div>
  );
};

export default CandidatesList;
