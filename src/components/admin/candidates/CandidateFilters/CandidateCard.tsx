type CandidateCardProps = {
  status: 'searching' | 'working' | 'inactive';
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
  status,
  specialization,
}: CandidateCardProps) => {
  return (
    <div className="relative box-border flex h-[486px] w-[442px] max-w-[442px] flex-col gap-[16px] rounded-[10px] border-[2px] border-secondaryGray bg-slate px-[40px] py-[32px]">
      <div
        className={`${status === 'searching' || status === 'working' ? 'bg-white' : 'bg-secondaryGray'} absolute right-[-2px] top-[-2px] flex h-[30px] w-[134px] items-center justify-center gap-[8px] rounded-bl-[10px] rounded-tr-[9px]`}
      >
        <span
          className={`${status === 'searching' ? 'bg-green' : status === 'working' ? 'bg-orange' : status === 'inactive' ? 'bg-black' : ''} h-[14px] w-[14px] rounded-[100%]`}
        ></span>
        <span
          className={`${status === 'searching' ? 'text-green' : status === 'working' ? 'text-orange' : status === 'inactive' ? 'text-black' : ''} rounded-[100%]`}
        >
          {status === 'searching'
            ? 'У пошуку'
            : status === 'working'
              ? 'Працює'
              : status === 'inactive'
                ? 'Не активний'
                : null}
        </span>
      </div>
      <h2
        className={`flex w-full justify-start font-tahoma text-2xl font-[700] ${specialization === 'Backend' ? 'text-purple ' : specialization === 'Frontend' ? 'text-yellow' : specialization === 'QA Manual' ? 'text-secondaryPink' : specialization === 'Fullstack' ? 'text-orange' : specialization === 'Design' ? 'text-secondaryGreen' : specialization === 'PM' ? 'text-blue-500' : ''}`}
      >
        {specialization}
      </h2>
      <div className="flex w-full items-center justify-between font-sans text-[20px] font-[700] leading-[28px] text-white">
        <h3>Tomas</h3>
        <span>ID 2345</span>
      </div>
      <div className="flex h-[34px] w-full items-center gap-[12px] font-sans text-[18px]">
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

      <div className="flex h-[34px] w-full items-center gap-[12px] font-sans text-[18px]">
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

      <div className="flex w-full justify-between gap-[27px]">
        <div className="box-border flex h-[30px] min-w-[88px] items-center justify-center rounded-full border-[1px] border-white px-[15px] py-[10px]">
          React.js
        </div>
        <div className="box-border flex h-[30px] min-w-[88px] items-center justify-center rounded-full border-[1px] border-white px-[15px] py-[10px]">
          Next.js
        </div>
        <div className="box-border flex h-[30px] min-w-[88px] items-center justify-center rounded-full border-[1px] border-white px-[15px] py-[10px]">
          Git
        </div>
        <span className="flex items-end justify-center">
          ...
        </span>
      </div>
      <div className="py-[10px] font-sans text-[16px] leading-[26px]">
        I am a UX/UI designer with experience in freelance
        projects. My expertise lies in conceptualizing and
        designing attractive software products such as
        landing pages...
      </div>

      <div className="flex h-[44px] w-full items-center justify-between">
        <span className="font-tahoma text-[20px] font-[700]">
          від 500 $
        </span>
        <div className="flex gap-[32px]">
          <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
            <svg width={22} height={16}>
              <use href="/Icons/sprite.svg#icon-eye"></use>
            </svg>
          </button>
          <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
            <svg width={24} height={24}>
              <use href="/Icons/sprite.svg#icon-pen"></use>
            </svg>
          </button>

          <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
            <svg width={26} height={29}>
              <use href="/Icons/sprite.svg#icon-drop"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
