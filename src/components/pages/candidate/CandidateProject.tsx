import { useTranslations } from 'next-intl';

import type { BazaExperienceResponse } from '@/types/candidates';

function Project({
  project,
}: {
  project: BazaExperienceResponse;
}) {
  const t = useTranslations('Candidate.candidate_project');

  return (
    <div className="flex w-full flex-col gap-[32px] font-sans text-[20px] text-white md:w-[34%]">
      <a href={project.project_name} target='_blank' className="font-[700] underline">
        {project.project_name}
      </a>
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center gap-[10px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-clock"></use>
          </svg>
          {t('duration')}
        </span>
        <span className="opacity-[.8]">
          {t('months', {
            count: project.project_duration,
            ordinal: true,
          })}
        </span>
      </div>
      <span className="relative box-border flex h-[36px] cursor-pointer items-center justify-center rounded-[16px] border border-white p-[8px] xl:max-w-[45%]">
        <svg
          width={20}
          height={20}
          className="absolute left-[8px]"
        >
          <use href="/Icons/sprite.svg#icon-done"></use>
        </svg>
        &nbsp;&nbsp;
        {project.specialization.title}
      </span>
    </div>
  );
}

export default Project;
