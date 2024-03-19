'use client';
import TextInput from '../ui/TextInput';
import DesktopIcon from '@/components/icons/DesktopIcon';
import Pointer from '@/components/icons/Pointer';
import SearchIcon from '@/components/icons/SearchIcon';
import HeroTitle from './HeroTitle';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getSpecializations } from '@/api/specialization';
import { useMessages } from 'next-intl';

interface HeroProps {
  country: string;
  speciality: string;
}
const Hero: React.FC<HeroProps> = ({
  country,
  speciality,
}: HeroProps) => {
  const { data } = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const messages: any = useMessages();
  const options = data?.map(({ title }) => title);
  return (
    <section className="container mb-[48px] mt-[124px] w-full ">
      <div className="relative mx-auto mb-[64px] flex max-w-[570px] flex-col items-center text-center sm:flex md:flex-row lg:max-w-[915px]">
        <span className="mr-3 text-6xl text-[40px] font-bold text-white xl:text-[64px]">
          <div className="flex max-w-[230px] flex-col items-center md:max-w-[300px] xl:max-w-[470px]">
            Знайди свого{' '}
          </div>
        </span>
        <div className="main-gradient flex-1 bg-clip-text text-transparent xs:text-[40px] md:text-start xl:text-[64px]">
          <HeroTitle />
        </div>
      </div>
      <form className="flex flex-col xs:gap-3 md:flex-row md:gap-0">
        <div className="relative flex w-full items-center">
          <TextInput
            isFirstInput={true}
            title=""
            errorText=""
            category=""
            placeholder={speciality}
            options={options}
          />
          <DesktopIcon className="text-gray-500 absolute left-3" />
        </div>

        <div className="relative flex w-full items-center">
          <TextInput
            title=""
            errorText=""
            category=""
            placeholder={country}
            options={['Україна', 'Польща', 'Німеччина']}
          />
          <Pointer className="text-gray-500 absolute left-3" />
        </div>

        <button className="main-gradient relative items-center px-6 py-4 text-xl font-medium  xs:w-full xs:rounded-md md:max-w-[272px] md:rounded-l-none md:rounded-r-md">
          <SearchIcon className="text-gray-500 absolute left-3 top-5" />
          {messages.Main.hero_section.search}
        </button>
      </form>
    </section>
  );
};

export default Hero;
