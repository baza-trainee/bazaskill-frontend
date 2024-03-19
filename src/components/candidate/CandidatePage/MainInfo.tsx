import { useTranslations } from 'next-intl';
import Project from './CandidateProject';

const MainInfo = () => {
  const t = useTranslations('Candidate');
  return (
    <div className="container mt-[40px] flex flex-col gap-[72px] pb-[60px]">
      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('stack')}
        </h3>
        <div className="mt-[44px] flex flex-wrap gap-[24px]">
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
          {t('education')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>
          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>
          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('courses')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>

          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>

          <div className="flex w-full flex-col md:w-[34%]">
            <span>GoIT - start your career in IT</span>
            <span>UI\UX Design</span>
            <span>травень 2023-грудень 2023</span>
          </div>
        </div>
      </div>

      <div>
        <div className="relative box-border flex flex-col gap-[24px] border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[20px] font-[700] text-white sm:justify-end sm:text-[24px] md:flex-row lg:justify-center">
          <h3 className="md:absolute md:left-0">
            {t('baza_experience')}
          </h3>
          <div className="flex items-center gap-[15px] sm:mr-[140px]">
            <svg width={20} height={18}>
              <use href="/Icons/sprite.svg#icon-experience"></use>
            </svg>
            {t('projects', { count: 3, ordinal: true })}
          </div>
        </div>

        <div className="mt-[32px] flex flex-col flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white md:flex-row">
          <Project />
          <Project />
          <Project />
        </div>
      </div>

      <div>
        <h3 className="flex py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('recomendation_from')} Baza Skill
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
        <button className="main-gradient mt-[60px] flex h-[50px] w-[350px] max-w-full items-center justify-center rounded-[6px] font-sans text-[20px] font-[600]">
          {t('ask_data')}
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

export default MainInfo;
