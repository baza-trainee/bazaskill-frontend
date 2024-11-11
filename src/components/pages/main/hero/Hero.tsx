'use client';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';

import TextInput from '../../../ui/TextInput';
import DesktopIcon from '@/components/shared/icons/DesktopIcon';
import Pointer from '@/components/shared/icons/Pointer';
import SearchIcon from '@/components/shared/icons/SearchIcon';


const DynamicHeroTitle = dynamic(
  () => import('./HeroTitle'),
);

const Hero: React.FC = () => {
  const t = useTranslations('Main.hero_section');
  const router = useRouter();

  const { data } = useQuery({
    queryKey: [constants.specialization.FETCH_SPECIALIZATIONS],
    queryFn: getSpecializations,
  });

  const options = data && data
    .sort((a, b) => b.id - a.id)
    .map(({ title }) => title);

  const onSubmit=(ev: React.FormEvent): void =>{
    ev.preventDefault()
    router.push('/candidates')
  }

  return (
    <section
      className="container min-h-[520px] flex justify-center flex-col w-full bg-no-repeat bg-auto md:bg-cover bg-fixed main-texture-background"
      aria-labelledby="hero-title"
    >
      <div className="relative mx-auto mb-[64px] flex max-w-[570px] flex-col items-center text-center sm:flex md:flex-row lg:max-w-[915px] ">
        <h1
          id="hero-title"
          className="mr-3 text-6xl text-[40px] font-bold text-white xl:text-[64px]"
        >
          <div className="flex max-w-[230px] flex-col items-center whitespace-nowrap md:max-w-[300px] xl:max-w-[470px]">
            {t('title.main')}
          </div>
        </h1>
        <div className="main-gradient flex-1 bg-clip-text text-transparent xs:text-[40px] md:text-start xl:text-[64px]">
          <DynamicHeroTitle />
        </div>
      </div>

      <form
        className="flex flex-col xs:gap-3 md:flex-row md:gap-0"
        onSubmit={onSubmit}
        autoComplete="off"
        aria-label={'search_form'}
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
            aria-label={t('country')}
          />
          <Pointer className="text-gray-500 absolute left-3" />
        </div>
        <button
          type='submit'
          className="main-gradient relative flex items-center justify-center px-6 py-4 text-xl font-medium xs:w-full xs:rounded-md md:max-w-[272px] md:rounded-l-none md:rounded-r-md"
          aria-label={'search button'}
        >
          <SearchIcon className="text-gray-500 absolute left-3 top-6" />
          <span>{t('search')}</span>
        </button>
      </form>
    </section>
  );
};

export default Hero;