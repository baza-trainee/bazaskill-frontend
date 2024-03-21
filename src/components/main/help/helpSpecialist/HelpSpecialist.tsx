'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const HelpSpecialist = () => {
  const t = useTranslations('Main.help');
  return (
    <div className="mx-auto text-white xs:w-[280px]  sm:w-[380px] md:w-[354px] xl:w-[510px] xl:pt-[0px] 2xl:w-[562px] 2xl:pt-[33px]  3xl:w-[590px] 3xl:pt-[45px]  4xl:w-[671px] 4xl:pt-[70px] 5xl:w-[830px] 5xl:pt-[100px]">
      <h2 className=" font-tahoma font-bold tracking-[1.2px]  xs:mb-[36px] xs:text-center xs:text-[24px] xs:leading-[1.5] md:text-left  xl:mb-[48px] xl:text-[40px] 4xl:w-[602px] 5xl:w-[830px] ">
        {t('title')}
      </h2>
      <div className="font-open-sans font-normal tracking-[.4px] text-white xs:pb-[16px]  xs:text-[16px] xs:leading-[1.5]  md:pb-[0px] xl:text-[20px] xl:leading-[1.4] ">
        <p>{t('paragraph_1')}</p>
        <br />
        <p>{t('paragraph_2')}</p>
        <br />
        <p>{t('paragraph_3')}</p>
      </div>
    </div>
  );
};

export default HelpSpecialist;
