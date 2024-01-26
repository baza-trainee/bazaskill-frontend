import Container from '../Container';
import TextInput from '../ui/Input';
import DesktopIcon from '../../icons/DesktopIcon';
import ArrowIcon from '@/components/icons/ArrowIcon';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full max-w-[1440]">
      <Container>
        <h2 className="text-6xl text-white text-center font-bold mb-10">
          Знайди <span className='text-green'>свого</span> ІТ-фахівця
        </h2>
        <form className="flex">
          <div className="relative flex w-full items-center">
            <TextInput
              className="placeholder-pl-2 p-5"
              placeholder="Спеціальність"
              style={{ paddingLeft: '3rem' }}
            />
            <DesktopIcon className="text-gray-500 absolute left-3" />

            <ArrowIcon className="text-gray-500 absolute right-3" />
          </div>

          <div className="relative flex w-full items-center">
            <TextInput
              className="border-none pl-12"
              placeholder="Країна"
              style={{ paddingLeft: '3rem' }}
            />
            <DesktopIcon className="text-gray-500 absolute left-3" />

            <ArrowIcon className="text-gray-500 absolute right-3" />
          </div>

          <button className="min-w-[272px] bg-green text-white">
            Знайти кандидата
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Hero;
