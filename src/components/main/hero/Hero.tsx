import Container from '../Container';

import TextInput from '../ui/Input';

import DesktopIcon from '@/components/icons/DesktopIcon';
import ArrowIcon from '@/components/icons/ArrowIcon';
import Pointer from '@/components/icons/Pointer';
import SearchIcon from '@/components/icons/SearchIcon';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="my-[124px] w-full max-w-[1440]">
      <Container>
        <h2 className="mb-10 text-center text-6xl font-bold text-white">
          Знайди{' '}
          <span className="main-gradient bg-clip-text text-transparent">
            свого{' '}
          </span>
          ІТ-фахівця
        </h2>
        <form className="flex">
          <div className="relative flex w-full items-center">
            <TextInput
              className="placeholder-pl-2 p-5"
              placeholder="Спеціальність"
              style={{ paddingLeft: '3rem' }}
            />
            <DesktopIcon className="text-gray-500 absolute left-3" />
            <ArrowIcon className="text-gray-500 absolute right-3 cursor-pointer" />
          </div>

          <div className="relative flex w-full items-center">
            <TextInput
              className="border-none p-5 text-lg placeholder:text-xl "
              placeholder="Країна"
              style={{ paddingLeft: '3rem' }}
            />
            <Pointer className="text-gray-500 absolute left-3" />
            <ArrowIcon className="text-gray-500 absolute right-3 cursor-pointer" />
          </div>

          <button className=" main-gradient relative min-w-[272px] items-center text-xl font-medium	">
            <SearchIcon className="text-gray-500 absolute left-3 top-5" />
            Знайти кандидата
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Hero;
