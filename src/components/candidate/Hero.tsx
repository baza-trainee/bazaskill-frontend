const CandidateHero = () => {
  return (
    <div className="container flex justify-between pt-[90px]">
      <div className="flex w-[68%] max-w-[830px] flex-col">
        <div className="flex items-center gap-[24px]">
          <svg width={40} height={30}>
            <use href="/Icons/sprite.svg#icon-flag"></use>
          </svg>

          <h2 className="font-tahoma text-[40px] font-[700] text-white">
            Frontend
          </h2>
        </div>

        <div className="mt-[60px] flex items-center gap-[40px]">
          <h2 className="font-tahoma text-[40px] font-[700] text-white">
            Vlad
          </h2>
          <span className="flex h-[50px] max-w-[140px] items-center justify-center rounded-[2px] bg-[#2C2C2C] px-[10px] text-[20px] font-[700] text-white opacity-[.8]">
            ID 0224456
          </span>
        </div>

        <div className="mt-[60px] flex flex-col">
          <h3 className="h-[20px] font-tahoma text-[24px] font-[700] text-white">
            Про себе
          </h3>
          <span className="mt-[32px] font-sans text-[20px] font-[400] leading-[28px] text-white">
            I am a UX/UI designer with experience in
            freelance projects. My expertise lies in
            conceptualizing and designing attractive
            software products such as landing pages,
            websites, and mobile applications.
          </span>
        </div>
      </div>
      <div className="w-[29%] max-w-[350px]">
        <div className="flex w-full flex-col gap-[16px] rounded-[8px] border-[1px] border-white px-[24px] py-[24px]">
          <h3 className="font-tahoma text-[24px] font-[700] text-white">
            500-600$
          </h3>
          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-place"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              Познань, Польща
            </span>
          </div>

          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-lang"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              Англійська
            </span>
          </div>

          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-lang"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              Польська
            </span>
          </div>

          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-point"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              Віддалено
            </span>
          </div>
        </div>
        <button className="main-gradient mt-[60px] flex h-[50px] w-full items-center justify-center rounded-[6px] font-sans text-[20px] font-[600]">
          Запросити дані
        </button>
      </div>
    </div>
  );
};

export default CandidateHero;
