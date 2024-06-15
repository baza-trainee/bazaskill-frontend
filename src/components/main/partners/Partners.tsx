'use client';

import { useTranslations } from 'next-intl';
import { TPartner } from '@/types/partners';
import { constants } from '@/constants';
import { getPartners } from '@/api/partners';
import {
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import Slider from './Slider/Slider';

const Partners: React.FC = () => {
  const t = useTranslations('Main.partners');

  const partners: UseQueryResult<TPartner[], Error> =
    useQuery({
      queryKey: [constants.partners.FETCH_PARTNERS],
      queryFn: getPartners,
    });

  return (
    <div className="4lx:max-w-[1536px] container my-[50px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[768px] xl:max-w-[1280px] 2xl:max-w-[1368px] 3xl:max-w-[1440px] 5xl:max-w-[1920px]">
      <div
        className="mb-[53px] mt-[10px]
          text-center
          font-tahoma
          text-[24px]
          font-bold
          not-italic
          text-white
          md:text-2xl
          lg:text-[40px]"
      >
        {t('title')}
      </div>
      <div>
        {partners.data && partners.data.length && (
          <Slider partners={partners.data!} />
        )}
      </div>
    </div>
  );
};

export default Partners;
