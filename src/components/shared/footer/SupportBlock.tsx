import { useTranslations } from 'next-intl';

export default function SupportBlock() {
  const t = useTranslations('Footer');

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 bg-darkGraphite py-3 md:flex-row">
      <p className="text-xs text-white md:text-sm xl:text-base">{t('support_1')}</p>
      <p className="text-xs text-white md:text-sm xl:text-base">{t('support_2')}</p>
      <p className="text-xs text-white md:text-sm xl:text-base">{t('support_3')}</p>
    </div>
  );
}
