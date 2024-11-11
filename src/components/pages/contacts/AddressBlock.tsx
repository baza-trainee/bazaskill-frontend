import { useTranslations } from "next-intl";

export default function AddressBlock(): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className='w-full max-w-[380px] md:w-1/3 md:min-w-[380px] border-t-[1px] border-green relative rounded-lg px-4 py-12 md:px-12 flex flex-col justify-start gap-8 text-white overflow-hidden'>
    <h3 className='text-2xl font-tahoma font-bold'>{t("address")}</h3>
    <p className='text-xl font-normal leading-normal contact flex flex-col'>
      <span>{t('street')}</span>
      <span>{t('city')}</span>
      <span>{t('country')}</span>
    </p>

    <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
    <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
  </div>
  )
}