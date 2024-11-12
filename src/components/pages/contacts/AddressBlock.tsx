import { useTranslations } from 'next-intl';

export default function AddressBlock(): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className="relative flex w-full max-w-[380px] flex-col justify-start gap-8 overflow-hidden rounded-lg border-t-[1px] border-green px-4 py-12 text-white md:w-1/3 md:min-w-[380px] md:px-12">
      <h3 className="font-tahoma text-2xl font-bold">{t('address')}</h3>
      <p className="contact flex flex-col text-xl font-normal leading-normal">
        <span>{t('street')}</span>
        <span>{t('city')}</span>
        <span>{t('country')}</span>
      </p>

      <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
      <span className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
    </div>
  );
}
