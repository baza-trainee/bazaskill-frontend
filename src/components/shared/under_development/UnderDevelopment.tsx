import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

export default function UnderDevelopment() {
  const t = useTranslations('UnderDevelopment');
  return (
    <div className="container mt-[60px] flex h-[100vh] w-full items-center justify-center bg-graphite text-white md:mt-[90px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-regular text-center font-mont text-[36px]  sm:text-[42px] md:text-[60px]">
          {t('title')}
        </p>

        <h1 className="mb-8 text-center font-tahoma text-[20px] font-semibold xl:text-[24px]">
          {t('text')}
        </h1>
        <Link
          href="/"
          className="flex h-[54px] min-w-[272px] items-center justify-center whitespace-nowrap rounded-md border border-green px-4 font-tahoma text-[20px] font-semibold text-white duration-300 hover:bg-green hover:text-yellow"
        >
          {t('button')}
        </Link>
      </div>
    </div>
  );
}
