import { useTranslations } from 'next-intl';
import Project from './CandidateProject';
import { CandidatesResponse } from '@/types/candidates';
import OutProject from './OutProject';

type MainInfoProps = {
  candidate: CandidatesResponse;
};

const MainInfo = ({ candidate }: MainInfoProps) => {
  const t = useTranslations('Candidate');

  console.log(candidate);
  return (
    <div className="container mt-[40px] flex flex-col gap-[72px] pb-[60px]">
      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('stack')}
        </h3>
        <div className="mt-[44px] flex flex-wrap gap-[24px]">
          {candidate.stack.map((item) => (
            <StackItem
              key={item.id}
              title={item.stack.title}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('education')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate.gradaute.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col md:w-[34%]"
            >
              <span>{item.university}</span>
              <span>{item.university_specialization}</span>
              <span>
                {item.graduate_start}-{item.graduate_end}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('courses')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate.cources.map((cource) => (
            <div
              key={cource.id}
              className="flex w-full flex-col md:w-[34%]"
            >
              <span>{cource.cources_name}</span>
              <span>{cource.cources_specializaton}</span>
              <span>
                {cource.cources_start}-{cource.cources_end}
              </span>
            </div>
          ))}
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
            {t('projects', {
              count: candidate.baza_experience.length,
              ordinal: true,
            })}
          </div>
        </div>

        <div className="mt-[32px] flex flex-col flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white md:flex-row">
          {candidate.baza_experience.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div>
        <div className="relative box-border flex flex-col gap-[24px] border-b-[1px] border-[#929292] py-[12px] font-tahoma text-[20px] font-[700] text-white sm:justify-end sm:text-[24px] md:flex-row lg:justify-center">
          <h3 className="md:absolute md:left-0">
            {t('out_baza_experience')}
          </h3>
          <div className="flex items-center gap-[15px] sm:mr-[140px]">
            <svg width={20} height={18}>
              <use href="/Icons/sprite.svg#icon-experience"></use>
            </svg>
            {t('projects', {
              count: candidate.baza_experience.length,
              ordinal: true,
            })}
          </div>
        </div>

        <div className="mt-[32px] flex flex-col flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white md:flex-row">
          {candidate.out_baza_experience.map((project) => (
            <OutProject
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('recomendation_from')} Baza Skill
        </h3>
        <span className="mt-[32px] flex font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate.baza_recomendation}
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
