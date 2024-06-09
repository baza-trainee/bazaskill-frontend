'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getSpecializations } from '@/api/specialization';
import { useTranslations } from 'next-intl';
import { useCookies } from '@/stores/useCookies';
import { useLocale } from 'next-intl';

import TextInput from '../ui/TextInput';
import DesktopIcon from '@/components/icons/DesktopIcon';
import Pointer from '@/components/icons/Pointer';
import SearchIcon from '@/components/icons/SearchIcon';
import Link from 'next/link';
import Cookies from 'js-cookie';

const DynamicHeroTitle = dynamic(
  () => import('./HeroTitle')
);

const Hero: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations('Main.hero_section');
  const isCookie = useCookies((state) => state.isCookies);
  const [isCookiesAccepted, setIsCookiesAccepted] =
    useState(false);

  useEffect(() => {
    setIsCookiesAccepted(!!Cookies.get('cookiesAccepted'));
  }, [isCookie]);

  const { data } = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const options =
    data &&
    data
      .sort((a, b) => a.id - b.id)
      .map(({ title }) => title);

  return (
    <section className="container mb-[48px] mt-[124px] w-full ">
      <div className="relative mx-auto mb-[64px] flex max-w-[570px] flex-col items-center text-center sm:flex md:flex-row lg:max-w-[915px]">
        <span className="mr-3 text-6xl text-[40px] font-bold text-white xl:text-[64px]">
          <div className="flex max-w-[230px] flex-col items-center whitespace-nowrap md:max-w-[300px] xl:max-w-[470px]">
            {t('title.main')}{' '}
          </div>
        </span>
        <div className="main-gradient flex-1 bg-clip-text text-transparent xs:text-[40px] md:text-start xl:text-[64px]">
          <DynamicHeroTitle />
        </div>
      </div>
      <form className="flex flex-col xs:gap-3 md:flex-row md:gap-0">
        <div className="relative flex w-full items-center">
          <TextInput
            isFirstInput={true}
            title=""
            errorText=""
            category="speciality"
            placeholder={t('speciality')}
            options={options}
          />
          <DesktopIcon className="text-gray-500 absolute left-3" />
        </div>

        <div className="relative flex w-full items-center">
          <TextInput
            title=""
            errorText=""
            category="country"
            placeholder={t('country')}
            options={[
              t('ukraine'),
              t('poland'),
              t('germany'),
            ]}
          />
          <Pointer className="text-gray-500 absolute left-3" />
        </div>
        {isCookiesAccepted ? (
          <Link
            href={`${locale}/candidates`}
            className="main-gradient relative flex items-center justify-center px-6 py-4 text-xl font-medium  xs:w-full xs:rounded-md md:max-w-[272px] md:rounded-l-none md:rounded-r-md"
          >
            <SearchIcon className="text-gray-500 absolute left-3 top-6" />
            <span>{t('search')}</span>
          </Link>
        ) : (
          <button
            disabled={!isCookiesAccepted}
            className="main-gradient relative items-center px-6 py-4 text-xl font-medium  xs:w-full xs:rounded-md md:max-w-[272px] md:rounded-l-none md:rounded-r-md"
          >
            <SearchIcon className="text-gray-500 absolute left-3 top-5" />
            {t('search')}
          </button>
        )}
      </form>
    </section>
  );
};

export default Hero;
