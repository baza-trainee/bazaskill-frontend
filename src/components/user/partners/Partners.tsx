'use client';

import type {
  UseQueryResult,
} from '@tanstack/react-query';

import {
  useQuery,
} from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import type { TPartner } from '@/types/partners';

import { getPartners } from '@/api/partners';
import { constants } from '@/constants';

import Slider from './Slider/Slider';

const Partners: React.FC = () => {
  const t = useTranslations('Main.partners');

  const partners: UseQueryResult<TPartner[], Error>
    = useQuery({
      queryKey: [constants.partners.FETCH_PARTNERS],
      queryFn: getPartners,
    });

  return (
    <div className="4lx:max-w-screen-4xl container my-[50px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl 5xl:max-w-screen-5xl">
      <h2
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
      </h2>
      <div>
        {partners.data && partners.data.length && (
          <Slider partners={partners.data!} />
        )}
      </div>
    </div>
  );
};

export default Partners;
