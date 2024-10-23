import { useTranslations } from "next-intl";

export default function SupportBlock () {
  const t = useTranslations('Main.footer');
  
  return (
    <div className="w-full flex flex-col items-center justify-center bg-darkGraphite py-3 md:flex-row gap-1">
      <p className="text-white text-xs md:text-sm xl:text-base">
        {t('support_1')}
      </p>
      <p className="text-white text-xs md:text-sm xl:text-base">
        {t('support_2')}
      </p>
      <p className="text-white text-xs md:text-sm xl:text-base">
        {t('support_3')}
      </p>
  </div>
  )
}