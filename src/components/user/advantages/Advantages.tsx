'use client'

import cardData from './data.json'
import { useTranslations } from 'next-intl';
import AdvantagesMobile from './AdvantagesMobile/AdvantagesMobile'

const Advantages = () => {
  const t = useTranslations('Main.advantages');
  return (
    <section
      className='my-[100px] flex gap-4 flex-col justify-center items-center w-full'
      aria-labelledby="advantages-title"
    >
      <h2
        id="advantages-title"
        className="text-center mb-[66px] font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>
      <div className="hidden md:flex gap-4 flex-wrap justify-center items-start">
        {cardData.map((item, i) => (
          <article key={item.id} className={`bg-gradient-to-b from-green to-graphite rounded-lg p-[2px] w-[302px] h-[495px] ${i % 2 === 0 && 'lg:mt-[240px]'}`}>
            <div className="bg-graphite overflow-hidden rounded-lg w-full h-full p-6 flex flex-col justify-start text-white">
              <img
                src={item.icon}
                alt="article icon"
                role="img"
                aria-hidden="true"
                className="mb-[20px] w-[119px] mx-auto"
              />
              <h3 className="text-[24px] font-bold mb-2">{item.title}</h3>
              <p className="text-[20px] leading-[26px]">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
      <AdvantagesMobile cardData={cardData} />
    </section>
  )
}

export default Advantages
