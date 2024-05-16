import declineWord from 'decline-word';
import { CandidatesResponse } from '@/types/candidates';
import Link from 'next/link';
import { shortenLangs } from '@/helpers/shortenLangs';
import { useTranslations } from 'next-intl';

type CandidateCardProps = {
  candidate: CandidatesResponse;
};
const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
}: CandidateCardProps) => {
  const t = useTranslations('Candidate');
  const specialization = candidate.specialization.title;
  return (
    <div className="relative box-border flex h-[486px] w-[442px] max-w-[442px] flex-col gap-[16px] overflow-hidden rounded-[10px] border-[2px] border-secondaryGray bg-slate px-[40px] py-[32px]">
      <div
        className={`${candidate.status.toLowerCase() === 'searching' || candidate.status.toLowerCase() === 'working' ? 'bg-white' : 'bg-secondaryGray'} absolute right-[-2px] top-[-2px] flex h-[30px] w-[142px] items-center justify-center gap-[8px] rounded-bl-[10px] rounded-tr-[9px]`}
      >
        <span
          className={`${candidate.status.toLowerCase() === 'searching' ? 'bg-green' : candidate.status.toLowerCase() === 'working' ? 'bg-orange' : candidate.status.toLowerCase() === 'inactive' ? 'bg-black' : ''} h-[14px] w-[14px] rounded-[100%]`}
        ></span>
        <span
          className={`${candidate.status.toLowerCase() === 'searching' ? 'text-green' : candidate.status.toLowerCase() === 'working' ? 'text-orange' : candidate.status.toLowerCase() === 'inactive' ? 'text-black' : ''} rounded-[100%]`}
        >
          {candidate.status.toLowerCase() === 'searching'
            ? t('status.item_1')
            : candidate.status.toLowerCase() === 'working'
              ? t('status.item_2')
              : candidate.status.toLowerCase() ===
                  'inactive'
                ? t('status.item_3')
                : null}
        </span>
      </div>
      <h2
        className={`flex w-full justify-start font-tahoma text-2xl font-[700] ${specialization === 'Backend' ? 'text-purple ' : specialization === 'Frontend' ? 'text-yellow' : specialization === 'QA Manual' ? 'text-secondaryPink' : specialization === 'Fullstack' ? 'text-orange' : specialization === 'Design' ? 'text-secondaryGreen' : specialization === 'PM' ? 'text-blue-500' : ''}`}
      >
        {specialization}
      </h2>
      <div className="flex w-full items-center justify-between font-sans text-[20px] font-[700] leading-[28px] text-white">
        <h3>{candidate.name}</h3>
        <span>ID {candidate.uniqueId}</span>
      </div>
      <div className="flex h-[34px] w-full items-center gap-[12px] font-sans text-[18px]">
        <span className="flex w-[70%] items-center gap-[8px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-place"></use>
          </svg>
          {candidate.city},&nbsp;{candidate.country}
        </span>

        <span className="flex w-[50%] items-center gap-[8px]">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-lang"></use>
          </svg>
          {candidate.candidate_language.map(
            (lang, index) => (
              <span key={lang.id}>
                <span>{shortenLangs(lang.language)}</span>
                &nbsp;
                {index !==
                  candidate.candidate_language.length -
                    1 && <span>/</span>}
              </span>
            )
          )}
        </span>
      </div>

      <div className="flex h-[34px] w-full items-center gap-[12px] font-sans text-[18px]">
        <span className="flex w-[50%] items-center gap-[8px] text-nowrap">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-experience"></use>
          </svg>
          {candidate.baza_experience.length}{' '}
          {declineWord(
            candidate.baza_experience.length,
            t('project.title'),
            '',
            t('project.item_1'),
            t('project.item_2')
          )}{' '}
          {t('baza')}
        </span>

        <span className="flex w-[50%] items-center gap-[8px] ">
          <svg width={20} height={20}>
            <use href="/Icons/sprite.svg#icon-point"></use>
          </svg>
          <span className="truncate">
            {candidate.work_format === 'Remote'
              ? t('format.item_1')
              : candidate.work_format === 'Office'
                ? t('format.item_2')
                : candidate.work_format === 'Hybrid'
                  ? t('format.item_3')
                  : null}
          </span>
        </span>
      </div>

      <div className="flex w-full justify-start gap-[27px]">
        {candidate.stack.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="box-border flex h-[30px] min-w-[88px] items-center justify-center whitespace-nowrap rounded-full border-[1px] border-white px-[15px] py-[10px]"
          >
            {item.stack?.title}
          </div>
        ))}
        <span className="flex items-end justify-center">
          ...
        </span>
      </div>
      <div className="line-clamp-4 h-[120px] pt-[10px] font-sans text-[16px] leading-[26px]">
        {candidate.about}
      </div>

      <div className="flex h-[44px] w-full items-center justify-between">
        <span className="font-tahoma text-[20px] font-[700]">
          {t('salary')} {candidate.sallary_form} $
        </span>
        <div className="flex">
          <Link href={`/candidate/${candidate.id}`}>
            <button className="flex h-[44px] w-[133px] items-center justify-center rounded bg-white p-4 font-semibold text-black sm:w-[180px]">
              {t('button')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
