import Image from 'next/image';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Slider from '@/components/shared/slider/Slider';
import type { TAdvantages } from '@/types';

export const AdvantageCard = ({ data: item, index }: { data: any; index?: number }) => {
  const t = useTranslations('Main.advantages');

  return (
    <article
      className={clsx(
        'mx-auto h-[495px] w-[302px] rounded-2xl bg-gradient-to-b from-green to-graphite p-[2px] sm:w-[280px] md:hidden',
        index && index % 2 !== 0 && 'sm+:mt-[123px]'
      )}
    >
      <div className="flex h-full w-full flex-col justify-start overflow-hidden rounded-2xl bg-graphite p-6 text-white">
        <Image
          src={item.icon}
          alt="article icon"
          role="img"
          aria-hidden="true"
          width={120}
          height={120}
          className="mx-auto mb-[20px] w-[119px]"
        />
        <h3 className="mb-2 text-lg font-bold">{t(item.title)}</h3>
        <p className="text-[14px] leading-[26px] md:text-[16px]">{t(item.text)}</p>
      </div>
    </article>
  );
};

interface SliderProps {
  cardData: TAdvantages[];
  index?: number;
}

const AdvantagesMobile: React.FC<SliderProps> = ({ cardData }: SliderProps) => {
  return (
    <Slider
      Component={AdvantageCard}
      data={cardData}
      showArrows={false}
      breakpoints={{
        570: {
          slidesPerView: 2
        }
      }}
    />
  );
};

export default AdvantagesMobile;
