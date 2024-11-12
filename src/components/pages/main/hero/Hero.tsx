'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { constants } from '@/constants';
import { getSpecializations } from '@/utils/api/specialization';
import { Suspense, lazy } from 'react';

import DesktopIcon from '@/components/shared/icons/DesktopIcon';
import Pointer from '@/components/shared/icons/Pointer';
import SearchIcon from '@/components/shared/icons/SearchIcon';
import TextInput from '@/components/shared/ui/TextInput';

const DynamicHeroTitle = lazy(() => import('./HeroTitle'));

const Hero: React.FC = () => {
  const t = useTranslations('Main.hero_section');
  const router = useRouter();

  const { data } = useQuery({
    queryKey: [constants.specialization.FETCH_SPECIALIZATIONS],
    queryFn: getSpecializations,
  });

  const options =
    data && data.sort((a, b) => b.id - a.id).map(({ title }) => title);

  const onSubmit = (ev: React.FormEvent): void => {
    ev.preventDefault();
    router.push('/candidates');
  };

  return (
    <section
      className="main-texture-background container flex min-h-[520px] w-full flex-col justify-center bg-auto bg-fixed bg-no-repeat md:bg-cover"
      aria-labelledby="hero-title"
    >
      <div className="relative mx-auto mb-16 flex max-w-[570px] flex-col items-center text-center sm:flex md:flex-row lg:max-w-[915px]">
        <h1
          id="hero-title"
          className="mr-3 text-4xl font-bold text-white md:text-5xl xl:text-6xl"
        >
          <div className="flex max-w-[230px] flex-col items-center whitespace-nowrap md:max-w-[300px] xl:max-w-[470px]">
            {t('title.main')}
          </div>
        </h1>
        <div className="main-gradient flex-1 bg-clip-text text-transparent text-4xl md:text-5xl xl:text-6xl md:text-start">
          <Suspense fallback={<div className="h-16 w-full bg-gray-200 animate-pulse"></div>}>
            <DynamicHeroTitle />
          </Suspense>
        </div>
      </div>

      <form
        className="flex flex-col gap-3 md:flex-row md:gap-0"
        onSubmit={onSubmit}
        autoComplete="off"
        aria-label={t('search_form')}
      >
        <div className="relative flex w-full items-center">
          <TextInput
            isFirstInput={true}
            title=""
            errorText=""
            category="speciality"
            placeholder={t('speciality')}
            options={options}
            aria-label={t('speciality')}
          />
          <DesktopIcon className="absolute left-3 text-gray-500" aria-hidden="true" />
        </div>
        <div className="relative flex w-full items-center">
          <TextInput
            title=""
            errorText=""
            category="country"
            placeholder={t('country')}
            options={[t('ukraine'), t('poland'), t('germany')]}
            aria-label={t('country')}
          />
          <Pointer className="absolute left-3 text-gray-500" aria-hidden="true" />
        </div>
        <button
          type="submit"
          className="main-gradient relative flex items-center justify-center px-6 py-4 text-xl font-medium w-full rounded-md md:max-w-[272px] md:rounded-l-none md:rounded-r-md"
          aria-label={t('search')}
        >
          <SearchIcon className="absolute left-3 text-gray-500" aria-hidden="true" />
          <span>{t('search')}</span>
        </button>
      </form>
    </section>
  );
};

export default Hero;