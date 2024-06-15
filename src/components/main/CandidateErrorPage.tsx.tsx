import { useTranslations } from 'next-intl';
import { MdErrorOutline } from 'react-icons/md';
import Link from 'next/link';

const CandidateErrorPage = () => {
  const t = useTranslations('Main');

  return (
    <div className="container flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-graphite py-[60px] text-white xl:py-[120px]">
      <span className="mb-[48px] text-[180px] text-error">
        <MdErrorOutline />
      </span>
      <p className="mb-[48px] text-center font-tahoma text-[20px] font-semibold md:mb-[64px] xl:text-[24px]">
        {t('error')}
      </p>
      <Link href="/candidates">
        <button className="h-[54px] min-w-[272px] whitespace-nowrap rounded-[5px] bg-black px-4 py-2 font-tahoma text-[20px] font-bold text-white">
          {t('tryagain')}
        </button>
      </Link>
    </div>
  );
};

export default CandidateErrorPage;
