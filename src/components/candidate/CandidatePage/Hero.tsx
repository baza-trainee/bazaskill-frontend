import { useTranslations, useLocale } from 'next-intl';
import BackToPrevious from './BackButton';
import { CandidatesResponse } from '@/types/candidates';
import { useModal } from '@/stores/useModal';

type CandidateHeroProps = {
  candidate: CandidatesResponse;
};

const CandidateHero = ({
  candidate,
}: CandidateHeroProps) => {
  const locale = useLocale();
  const t = useTranslations('Candidate');
  const { openModal } = useModal();

  return (
    <div className="container flex flex-col gap-[40px] pt-[24px] xl:flex-row xl:justify-between">
      <div className="flex  w-[100%]  flex-col xl:w-[68%] xl:max-w-[830px]">
        <BackToPrevious />
        <div className="flex items-center gap-[24px]">
          <svg width={40} height={30}>
            <use href="/Icons/sprite.svg#icon-flag"></use>
          </svg>

          <h2 className="font-tahoma text-[40px] font-[700] text-white">
            {candidate.specialization.title}
          </h2>
        </div>

        <div className="mt-[60px] flex items-center gap-[40px]">
          <h2 className="font-tahoma text-[40px] font-[700] text-white">
            {locale === 'ua'
              ? candidate.name_ua
              : candidate.name}{' '}
            {locale === 'ua'
              ? candidate.surname_ua
              : candidate.surname}
          </h2>
          <span className="flex h-[50px] max-w-[140px] items-center justify-center rounded-[2px] bg-[#2C2C2C] px-[10px] text-[20px] font-[700] text-white opacity-[.8]">
            ID {candidate.uniqueId}
          </span>
          <span className="flex h-[50px] max-w-[140px] items-center justify-center rounded-[2px] bg-[#2C2C2C] px-[10px] text-[20px] font-[700] text-white opacity-[.8]">
            <a href={candidate.cv} target="_blank">
              CV
            </a>
          </span>
        </div>

        <div className="mt-[60px] flex flex-col">
          <h3 className="h-[20px] font-tahoma text-[24px] font-[700] text-white">
            {t('about')}
          </h3>
          <span className="mt-[32px] font-sans text-[20px] font-[400] leading-[28px] text-white">
            {candidate.about}
          </span>
        </div>
      </div>
      <div className="w-full sm:w-[310px] xl:w-[29%] xl:max-w-[350px]">
        <div className="flex w-full flex-col gap-[16px] rounded-[8px] border-[1px] border-white px-[24px] py-[24px]">
          <h3 className="font-tahoma text-[24px] font-[700] text-white">
            {candidate.sallary_form}-{candidate.sallary_to}{' '}
            $
          </h3>
          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-place"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              {candidate.city}, {candidate.country}
            </span>
          </div>

          {candidate.candidate_language.map((lang) => (
            <div
              key={lang.id}
              className="flex h-[40px] items-center gap-[20px]"
            >
              <svg width={15} height={20}>
                <use href="/Icons/sprite.svg#icon-lang"></use>
              </svg>
              <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
                {lang.language}:
              </span>
              <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
                {lang.level}
              </span>
            </div>
          ))}

          <div className="flex h-[40px] items-center gap-[20px]">
            <svg width={15} height={20}>
              <use href="/Icons/sprite.svg#icon-point"></use>
            </svg>
            <span className="font-sans text-[20px] font-[400] leading-[28px] text-white">
              {candidate.work_format === 'Remote'
                ? t('format.item_1')
                : candidate.work_format === 'Office'
                  ? t('format.item_2')
                  : candidate.work_format === 'Hybrid'
                    ? t('format.item_3')
                    : null}
            </span>
          </div>
        </div>
        <button
          onClick={() => openModal('contacts')}
          className="main-gradient mt-[60px] flex h-[50px] w-full items-center justify-center rounded-[6px] font-sans text-[20px] font-[600]"
        >
          {t('ask_data')}
        </button>
      </div>
    </div>
  );
};

export default CandidateHero;
