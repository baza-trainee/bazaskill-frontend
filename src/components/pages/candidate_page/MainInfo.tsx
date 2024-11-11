import { useTranslations } from 'next-intl';
import Image from 'next/image';

import type { CandidatesResponse } from '@/types/candidates';

import Project from './CandidateProject';

interface MainInfoProps {
  candidate: CandidatesResponse;
}

function MainInfo({ candidate }: MainInfoProps) {
  const t = useTranslations('Candidate');

  return (
    <div className="container mt-[40px] flex flex-col gap-[72px] pb-[60px]">
      <div>
        <h3 className="flex border-b border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('stack')}
        </h3>
        <div className="mt-[44px] flex flex-wrap gap-[24px]">
          {candidate?.stack.map(
            item =>
              item.stack?.title.length > 0 && (
                <StackItem
                  key={item.id}
                  title={item.stack?.title}
                />
              ),
          )}
        </div>
      </div>

      <div>
        <h3 className="flex border-b border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('education')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate?.gradaute.map(item => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between"
            >
              <div className="flex w-full flex-col md:w-[34%]">
                <span>{item.university}</span>
                <span>
                  {item.university_specialization}
                </span>
                <span>
                  {item.graduate_start}
                  -
                  {item.graduate_end}
                </span>
              </div>
              {item.graduate_sertificate && (
                <div>
                  <a
                    href={item.graduate_sertificate}
                    target="_blank"
                  >
                    {item.graduate_sertificate.split(
                      '.',
                    )[3] === 'pdf'
                      ? (
                          <Image
                            src="/images/pdf-placeholder.png"
                            alt="pdf"
                            width={80}
                            height={80}
                          />
                        )
                      : (
                          <Image
                            src={item.graduate_sertificate}
                            alt="pdf"
                            width={120}
                            height={60}
                          />
                        )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex border-b border-[#929292] py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('courses')}
        </h3>
        <div className="mt-[32px] flex flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate?.cources.map(cource => (
            <div
              key={cource.id}
              className="flex w-full items-center justify-between"
            >
              <div className="flex w-full flex-col md:w-[34%]">
                <span>{cource.cources_name}</span>
                <span>{cource.cources_specializaton}</span>
                <span>
                  {cource.cources_start}
                  -
                  {cource.cources_end}
                </span>
              </div>
              {cource.cources_sertificate && (
                <div>
                  <a
                    href={cource.cources_sertificate}
                    target="_blank"
                  >
                    {cource.cources_sertificate.split(
                      '.',
                    )[3] === 'pdf'
                      ? (
                          <Image
                            src="/images/pdf-placeholder.png"
                            alt="pdf"
                            width={80}
                            height={80}
                          />
                        )
                      : (
                          <Image
                            src={cource.cources_sertificate}
                            alt="pdf"
                            width={120}
                            height={60}
                          />
                        )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="relative box-border flex flex-col gap-[24px] border-b border-[#929292] py-[12px] font-tahoma text-[20px] font-[700] text-white sm:justify-end sm:text-[24px] md:flex-row lg:justify-center">
          <h3 className="md:absolute md:left-0">
            {t('baza_experience')}
          </h3>
          <div className="flex items-center gap-[15px] sm:mr-[140px]">
            <svg width={20} height={18}>
              <use href="/Icons/sprite.svg#icon-experience"></use>
            </svg>
            {t('projects', {
              count: candidate?.baza_experience.length,
              ordinal: true,
            })}
          </div>
        </div>

        <div className="mt-[32px] flex flex-col flex-wrap justify-start gap-[60px] font-sans text-[20px] font-[400] leading-[28px] text-white md:flex-row">
          {candidate?.baza_experience.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex py-[12px] font-tahoma text-[24px] font-[700] text-white">
          {t('recomendation_from')}
          {' '}
          Baza Skill
        </h3>
        <span className="mt-[32px] flex font-sans text-[20px] font-[400] leading-[28px] text-white">
          {candidate.baza_recomendation}
        </span>
        {/* <button
          onClick={() => openModal('contacts')}
          className="main-gradient mt-[60px] flex h-[50px] w-[350px] max-w-full items-center justify-center rounded-[6px] font-sans text-[20px] font-[600]"
        >
          {t('ask_data')}
        </button> */}
      </div>
    </div>
  );
}

function StackItem({ title }: { title: string }) {
  return (
    <span className="flex cursor-pointer items-center justify-center rounded-[16px] border border-white px-[10px] py-[5px] font-sans text-[16px] font-[400] leading-[26px] text-white">
      {title}
    </span>
  );
}

export default MainInfo;
