const MainInfo = () => {
  return (
    <div className="container mt-[40px] flex flex-col gap-[72px] pb-[60px]">
      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          Стек
        </h3>
        <div className="mt-[44px] flex gap-[24px]">
          <StackItem title="UX-дизайн" />
          <StackItem title="UI-дизайн" />
          <StackItem title="HTML" />
          <StackItem title="Figma" />
          <StackItem title="Wireframe" />
          <StackItem title="Mobile App" />
          <StackItem title="Prototyping" />
        </div>
      </div>

      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          Освіта
        </h3>
        <div className="mt-[32px] flex flex-col font-sans text-[20px] font-[400] leading-[28px] text-white">
          <span>GoIT - start your career in IT</span>
          <span>UI\UX Design</span>
          <span>травень 2023-грудень 2023</span>
        </div>
      </div>

      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          Курси
        </h3>
        <div className="mt-[32px] flex flex-col font-sans text-[20px] font-[400] leading-[28px] text-white">
          <span>GoIT - start your career in IT</span>
          <span>UI\UX Design</span>
          <span>травень 2023-грудень 2023</span>
        </div>
      </div>

      <div>
        <div className="relative box-border flex justify-center border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          <h3 className="absolute left-0">
            Досвід роботи на базі
          </h3>
          <div className="flex items-center gap-[15px]">
            <svg width={20} height={18}>
              <use href="/Icons/sprite.svg#icon-experience"></use>
            </svg>
            3 проєкти
          </div>
        </div>

        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          <Project />
          <Project />
          <Project />
        </div>
      </div>

      <div>
        <h3 className="flex py-[12px] font-tahoma text-[24px] font-[700] text-white">
          Курси
        </h3>
        <span className="mt-[32px] flex font-sans text-[20px] font-[400] leading-[28px] text-white">
          Lorem ipsum dolor sit amet consectetur. Gravida et
          amet mi odio curabitur parturient. Vel tempus sit
          consectetur rutrum ut purus id. Tincidunt ipsum
          egestas in nibh. Nisl porta porttitor in cursus
          interdum sed mattis at morbi.Lorem ipsum dolor sit
          amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Gravida et amet mi odio curabitur
          parturient. Vel tempus sit consectetur rutrum ut
          purus id. Tincidunt ipsum egestas in nibh. Nisl
          porta porttitor in cursus interdum sed mattis at
          morbi. Lorem ipsum dolor sit amet consectetur.
        </span>
        <button className="main-gradient mt-[60px] flex h-[50px] w-[350px] items-center justify-center rounded-[6px] font-sans text-[20px] font-[600]">
          Запросити дані
        </button>
      </div>
    </div>
  );
};

const StackItem = ({ title }: { title: string }) => {
  return (
    <span className="flex cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-white px-[10px] py-[5px] font-sans text-[16px] font-[400] leading-[26px] text-white">
      {title}
    </span>
  );
};

const Project = () => {
  return (
    <div className="flex w-[34%] flex-col gap-[32px] font-sans text-[20px] text-white">
      <h3 className="font-[700] underline">Лендінг</h3>
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center gap-[10px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-clock"></use>
          </svg>
          Тривалість
        </span>
        <span className="opacity-[.8]">10 тижнів</span>
      </div>
      <span className="relative box-border flex h-[36px] max-w-[135px] cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-white p-[8px]">
        <svg
          width={20}
          height={20}
          className="absolute left-[8px]"
        >
          <use href="/Icons/sprite.svg#icon-done"></use>
        </svg>
        Тім-лід
      </span>
    </div>
  );
};

export default MainInfo;
