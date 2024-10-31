import type { TAdvantages } from '@/types';
import { useMediaQuery } from 'react-responsive';
import { useTranslations } from 'next-intl';
import Slider from '@/components/shared/slider/Slider';

export const AdvantageCard = ({data:item,index}:{data:any,index?:number})=>{
  const t = useTranslations('Main.advantages');

  return(
  <article className={`md:hidden bg-gradient-to-b from-green to-graphite 
  rounded-lg p-[2px] w-[302px] sm:w-[280px] h-[495px] mx-auto ${index && index % 2 !== 0 && 'mt-[123px]'}`}>
      <div className="bg-graphite overflow-hidden rounded-lg w-full h-full p-6 
      flex flex-col justify-start text-white">
    <img
      src={item.icon}
      alt='article icon'
      className="mb-[20px] w-[119px] mx-auto"
    />
    <h3 className="text-lg font-bold mb-2">{t(item.title)}</h3>
    <p className="text-[16px] leading-[26px]">
      {t(item.text)}
    </p>
  </div>
  </article>
  )
}

interface SliderProps {
  cardData: TAdvantages[];
  index?: number;
}

const AdvantagesMobile: React.FC<SliderProps> = ({
  cardData,
}: SliderProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  return (
    <Slider Component={AdvantageCard} data={cardData} showArrows={false} slides={isMobile ? 1 : 2} />
  );
};

export default AdvantagesMobile;
