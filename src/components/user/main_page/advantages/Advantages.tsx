'use client'

import {benefitsData} from './data'
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import AdvantagesMobile from './AdvantagesMobile/AdvantagesMobile'

const Advantages = () => {
  const t = useTranslations('Main.advantages');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <section
      className='mt-[100px] flex gap-4 flex-col justify-center items-center w-full'
      aria-labelledby="advantages-title"
    >
      <h2
        id="advantages-title"
        className="text-center mb-[66px] font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>
      <div className="hidden md:flex gap-8 flex-wrap justify-center items-start">
        {benefitsData.map((item, i) => (
          <article key={item.id} className={`bg-gradient-to-b from-green to-graphite rounded-lg p-[2px] w-[612px] h-[388px] 
          ${i % 2 !== 0 && 'mt-0 xl:mt-[240px]'}`}>
            <div className="bg-graphite overflow-hidden rounded-lg w-full h-full p-6 flex gap-4 justify-start items-start text-white">
              <img
                src={item.icon}
                alt="article icon"
                role="img"
                aria-hidden="true"
                className="w-[120px] mx-auto"
              />
             <div className="flex flex-col">
             <h3 className="text-[24px] font-bold mb-2">{t(item.title)}</h3>
              <p className="text-[20px] leading-[28px]">
                {t(item.text)}
              </p>
             </div>
            </div>
          </article>
        ))}
      </div>
      {isMobile && <AdvantagesMobile cardData={benefitsData} />}
    </section>
  )
}

export default Advantages
