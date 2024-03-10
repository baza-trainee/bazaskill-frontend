import CandidateCard from './CandidateCard';

const CandidatesList = () => {
  return (
    <div className=" box-content pr-[24px] 4xl:pr-[196px]">
      <div className="flex h-fit max-w-[950px] grow flex-wrap items-start justify-start gap-[24px] pl-[24px]">
        <div className="relative box-border flex h-[486px] w-[442px] max-w-[442px] flex-col gap-[16px] rounded-[10px] border-[2px] border-green bg-transparent px-[40px] py-[32px]"></div>
        <CandidateCard
          specialization="Backend"
          status="searching"
        />
        <CandidateCard
          specialization="Frontend"
          status="inactive"
        />
        <CandidateCard
          specialization="Fullstack"
          status="working"
        />
        <CandidateCard
          specialization="Design"
          status="working"
        />
        <CandidateCard
          specialization="QA Manual"
          status="working"
        />
        <CandidateCard
          specialization="PM"
          status="working"
        />
        <CandidateCard
          specialization="Backend"
          status="searching"
        />
        <CandidateCard
          specialization="Frontend"
          status="inactive"
        />
        <CandidateCard
          specialization="Fullstack"
          status="working"
        />
        <CandidateCard
          specialization="Design"
          status="working"
        />
        <CandidateCard
          specialization="QA Manual"
          status="working"
        />
      </div>
      <div className="mb-[94px] mt-[70px] flex w-full items-center justify-center">
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
