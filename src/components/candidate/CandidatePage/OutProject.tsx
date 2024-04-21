import { OutBazaExperienceResponse } from '@/types/candidates';
import { useTranslations } from 'next-intl';

const OutProject = ({
  project,
}: {
  project: OutBazaExperienceResponse;
}) => {
  const t = useTranslations('Candidate.candidate_project');
  console.log(project);
  return (
    <div className="flex w-full flex-col gap-[32px] font-sans text-[20px] text-white md:w-[34%]">
      <h3 className="font-[700] underline">
        {project.company_name}
      </h3>
      <h3 className="font-[700] underline">
        {project.company_specialization}
      </h3>
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center gap-[10px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-clock"></use>
          </svg>
          {project.work_start} - {project.work_end}
        </span>
      </div>
    </div>
  );
};

export default OutProject;
