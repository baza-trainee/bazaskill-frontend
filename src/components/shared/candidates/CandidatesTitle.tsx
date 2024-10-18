import { useTranslations } from 'next-intl';

function CandidatesTitle() {
  const t = useTranslations('Filter');
  return (
    <div className="flex items-center justify-between pb-[32px] xl:pb-[48px]">
      <h1 className="font-tahoma text-2xl font-[700] text-white xl:text-[42px] 3xl:text-[45px]">
        {t('hero_title')}
      </h1>
    </div>
  );
}

export default CandidatesTitle;
