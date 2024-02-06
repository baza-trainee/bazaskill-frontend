import TextInput from '../ui/TextInput';
import DesktopIcon from '@/components/icons/DesktopIcon';

import Pointer from '@/components/icons/Pointer';
import SearchIcon from '@/components/icons/SearchIcon';
import { useTranslations } from 'next-intl';
import MarqueeTitle from '../ui/MarqueeTitle';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const t = useTranslations('Main');

  return (
    <div className="container my-[124px] w-full">
      <div className="mx-auto max-w-[837px]">
        <MarqueeTitle />
      </div>
      <form className="flex">
        <div className="relative flex w-full items-center">
          <TextInput
            title=""
            errorText=""
            category=""
            placeholder="Спеціальність"
            options={[
              'Frontend Developer',
              'Backend Developer',
              'Fullstack Developer',
              'Design',
              'QA MAnual',
            ]}
          />
          <DesktopIcon className="text-gray-500 absolute left-3" />
        </div>

        <div className="relative flex w-full items-center">
          <TextInput
            title=""
            errorText=""
            category=""
            placeholder="Країна"
            options={['Україна', 'Польша', 'Німеччина']}
          />
          <Pointer className="text-gray-500 absolute left-3" />
        </div>

        <button className="main-gradient	 relative min-w-[272px] items-center text-xl font-medium hover:bg-green hover:from-transparent ">
          <SearchIcon className="text-gray-500 absolute left-3 top-5" />
          {t('hero_section.search')}
        </button>
      </form>
    </div>
  );
};

export default Hero;
