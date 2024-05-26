import React from 'react';
import { useTranslations } from 'next-intl';
import { FaPaw } from 'react-icons/fa';

const AffiliateBanner = () => {
  const t = useTranslations('Main');
  return (
    <div className="flex w-full items-center justify-center border-b border-b-[#4E4E4E] bg-graphite p-2 ">
      <div className="main-gradient flex items-center justify-center bg-clip-text text-transparent transition-all">
        <FaPaw className="text-green" />
        &nbsp; &nbsp;
        <a
          href="https://hostiq.ua/ukr/vps-hosting/?utm_medium=affiliate&utm_source=none&utm_campaign=6889"
          className="text-pretty text-center"
        >
          {t('banner')}
        </a>
        &nbsp; &nbsp;
        <FaPaw className="text-yellow" />
      </div>
    </div>
  );
};

export default AffiliateBanner;
