import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Page404 = () => {
  const t = useTranslations();
  return (
    <div className="container flex w-full flex-col items-center justify-center bg-graphite py-[60px] text-white xl:py-[120px]">
      <span className="font-regular font-mont text-[180px]">
        404
      </span>
      <p className="mb-[48px] text-center font-tahoma text-[20px] font-semibold md:mb-[64px] xl:text-[24px]">
        {t('Error.title')}
      </p>
      <Link href="/">
        <button className="h-[54px] w-[272px] rounded-[5px] bg-black font-tahoma text-[20px] font-bold text-white">
          {t('Error.button')}
        </button>
      </Link>
    </div>
  );
};

export default Page404;
