import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';
import CandidateCard from './CandidateCard';

const CandidatesList = () => {
  return (
    <div className=" box-content">
      <div className="pb-[40px] pt-[56px] font-tahoma text-[24px] md:pl-[48px] md:pt-0 2xl:pl-[78px] 3xl:pl-[88px] 4xl:pl-[92px] 5xl:pl-[88px]">
        384 кандидата
      </div>
      <div className="flex flex-col gap-6 md:pl-[48px] xl:grid xl:grid-cols-2 2xl:gap-[30px] 2xl:pl-[78px] 3xl:gap-[32px] 3xl:pl-[88px] 4xl:pl-[92px] 5xl:grid-cols-3 5xl:gap-6 5xl:pl-[88px]">
        <CandidateCard
          specialization="Backend"
          // status="searching"
        />
        <CandidateCard
          specialization="Frontend"
          // status="inactive"
        />
        <CandidateCard
          specialization="Fullstack"
          // status="working"
        />
        <CandidateCard
          specialization="Design"
          // status="working"
        />
        <CandidateCard
          specialization="QA Manual"
          // status="working"
        />
        <CandidateCard
          specialization="PM"
          // status="working"
        />
        <CandidateCard
          specialization="Backend"
          // status="searching"
        />
        <CandidateCard
          specialization="Frontend"
          // status="inactive"
        />
        <CandidateCard
          specialization="Fullstack"
          // status="working"
        />
        <CandidateCard
          specialization="Design"
          // status="working"
        />
        <CandidateCard
          specialization="QA Manual"
          // status="working"
        />
      </div>
      <div className="my-[60px] flex w-full items-center justify-center md:mb-[94px] md:mt-[70px]">
        <svg
          className="mt-[2px] cursor-pointer fill-white transition-all hover:scale-125"
          width={32}
          height={32}
        >
          <use href="/Icons/sprite.svg#icon-dropdown"></use>
        </svg>
      </div>
    </div>
  );
};

export default CandidatesList;
