import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Page404 = () => {
  const t = useTranslations();
  return (
    <div className="flex  w-full flex-col items-center justify-center  bg-graphite pb-[100px] pt-[50px] text-white">
      <span className="font-regular font-mont text-[180px]">
        404
      </span>
      <p className="mb-[64px] font-tahoma text-[24px] font-semibold">
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
