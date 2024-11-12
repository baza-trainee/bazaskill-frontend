import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { JuniorAdvantagesData } from './data';

const JuniorsAdvantages = () => {
  const t = useTranslations('Main.juniors-advantages');
  return (
    <section
      className="container flex w-full flex-col gap-2 py-12 md:py-[60px] xl:py-[100px]"
      aria-labelledby="advantages-title"
    >
      <h2
        id="advantages-title"
        className="mb-[66px] text-center font-tahoma text-[24px] font-bold not-italic
         text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>
      <h3
        className="main-gradient mb-[24px] bg-clip-text text-center text-[24px] font-[700]
        text-transparent"
        id="advantages-subtitle"
      >
        {t('subtitle')}
      </h3>
      <div
        className="flex flex-col"
        role="list"
        aria-labelledby="advantages-title advantages-subtitle"
      >
        {JuniorAdvantagesData.map((item, i) => (
          <article
            key={i}
            className={`flex w-full flex-col gap-4 p-4 text-white lg:flex-row 
            ${i % 2 !== 0 ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}
            aria-labelledby={`advantage-${i}-title`}
            role="listitem"
          >
            <Image
              src={item.icon}
              alt={`${t(item.title)} icon`}
              width={124}
              height={124}
              role="img"
            />
            <div className="flex w-full flex-col items-start gap-2 p-2 lg:w-[516px]">
              <h4
                id={`advantage-${i}-title`}
                className="text-[24px] font-[700]"
              >
                {i + 1}. {t(item.title)}
              </h4>
              <p className="text-[20px] leading-[28px] tracking-[2%]">
                {t(item.text)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JuniorsAdvantages;
