type CandidateCardProps = {
  // status: 'searching' | 'working' | 'inactive';
  specialization:
    | 'Frontend'
    | 'Backend'
    | 'Fullstack'
    | 'Design'
    | 'PM'
    | 'QA Manual'
    | string;
};
const CandidateCard: React.FC<CandidateCardProps> = ({
  // status,
  specialization,
}: CandidateCardProps) => {
  return (
    <div className="box-border flex h-[412px] w-[280px] flex-col gap-[16px] rounded-[10px] border-[2px] border-secondaryGray bg-slate px-2 py-4 text-xs sm:h-[480px] sm:w-[380px] sm:px-4 sm:text-base md:w-[396px] md:text-xl xl:h-[482px] 2xl:h-[492px] 2xl:w-[411px] 4xl:w-[418px] 5xl:w-[402px]">
      <h2
        className={`flex w-full justify-start font-tahoma text-base font-[700] sm:py-2 sm:text-xl xl:text-2xl ${specialization === 'Backend' ? 'text-purple ' : specialization === 'Frontend' ? 'text-yellow' : specialization === 'QA Manual' ? 'text-secondaryPink' : specialization === 'Fullstack' ? 'text-orange' : specialization === 'Design' ? 'text-secondaryGreen' : specialization === 'PM' ? 'text-blue-500' : ''}`}
      >
        {specialization}
      </h2>
      <div className="flex w-full items-center justify-between pr-5 font-sans font-[700] leading-[28px] text-white">
        <h3>Tomas</h3>
        <span>ID 2345</span>
      </div>
      <div className="flex h-[34px] w-full items-center gap-[15px] font-sans">
        <span className="flex w-[50%] items-center gap-[8px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-place"></use>
          </svg>
          Харків, Україна
        </span>

        <span className="flex w-[50%] items-center gap-[8px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-lang"></use>
          </svg>
          En/Pl
        </span>
      </div>

      <div className="flex h-[34px] w-full items-center gap-[12px] font-sans">
        <span className="flex w-[50%] items-center gap-[8px] text-nowrap">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-experience"></use>
          </svg>
          2 проєкта на базі
        </span>

        <span className="flex w-[50%] items-center gap-[8px] ">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-point"></use>
          </svg>
          <span className="truncate">
            В офісі, гібридна, віддалено
          </span>
        </span>
      </div>

      <div className="flex w-full justify-between gap-1 text-xs sm:text-sm md:gap-[15px]">
        <div className="box-border flex h-[30px] w-[72px] items-center justify-center rounded-full border-[1px] border-white sm:w-[88px] md:px-[15px] md:py-[10px]">
          React.js
        </div>
        <div className="box-border flex h-[30px] w-[72px] items-center justify-center rounded-full border-[1px] border-white md:px-[15px] md:py-[10px] xl:w-[88px]">
          Next.js
        </div>
        <div className="box-border flex h-[30px] min-w-[72px] items-center justify-center rounded-full border-[1px] border-white sm:min-w-[88px] md:px-[15px] md:py-[10px]">
          Git
        </div>
        <span className="flex items-end justify-center">
          ...
        </span>
      </div>
      <div className="font-sans leading-[26px] md:text-base">
        I am a UX/UI designer with experience in freelance
        projects. My expertise lies in conceptualizing and
        designing attractive software products such as
        landing pages...
      </div>

      <div className="flex h-[44px] w-full flex-row items-center justify-between sm:mt-5">
        <span className="font-tahoma font-[700]">
          від 500 $
        </span>
        <div className="flex">
          <button className="flex h-[44px] w-[133px] items-center justify-center rounded bg-white p-4 font-semibold text-black sm:w-[180px]">
            Читати більше
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
