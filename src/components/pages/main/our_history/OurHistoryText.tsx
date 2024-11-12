import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

const OurHistoryText = () => {
  const t = useTranslations('Main.history');
  const [showText, setShowText] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 420px)' });

  useEffect(() => {
    setShowText(!isMobile);
  }, [isMobile]);

  const descriptionStyle =
    'lg:text-[20px] md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]';

  return (
    <div className="2xl:px-[25px] ">
      <h2
        id="history-title"
        className="hidden text-center font-tahoma text-[24px] font-bold text-white md:mb-[28px] md:text-2xl lg:mb-[48px] xl:block 2xl:text-[40px]"
      >
        {t('title')}
      </h2>
      <p className={descriptionStyle}>{t('description_1')}</p>
      <br />
      <p className={descriptionStyle}>{t('description_2')}</p>
      <br />
      <div className={`${showText ? 'block' : 'hidden'}`}>
        <p className={descriptionStyle}>{t('description_3')}</p>
        <br />
        <p className={descriptionStyle}>{t('description_4')}</p>
      </div>
      {isMobile && !showText && (
        <button
          onClick={() => setShowText(!showText)}
          className="group relative flex items-center 
          justify-center overflow-hidden rounded-md bg-gradient-to-r 
          from-green via-green to-yellow bg-clip-text  p-[2px] text-transparent transition-all"
        >
          {t('button')}
        </button>
      )}
    </div>
  );
};

export default OurHistoryText;
