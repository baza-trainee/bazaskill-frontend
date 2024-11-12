import { useState } from 'react';

import { useTranslations } from 'next-intl';

import Logo from '@/components/shared/icons/Logo';

import Popup from './Popup';
import HeaderIcon from './icons/HeaderIcon';
import InfoIcon from './icons/InfoIcon';

const Header = () => {
  const t = useTranslations('Calculator');
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <div className="flex flex-col items-center justify-center">
        <Logo className=" mt-4 flex h-[50px] justify-center" />
      </div>
      <div className="relative flex items-center justify-center gap-6 rounded-lg border border-green p-6">
        <HeaderIcon />
        <span className="mr-8 w-[80%] text-sm font-medium lg:text-xl xl:w-[681px]">
          {t('header')}
        </span>
        <div
          className="relative flex h-6 w-6"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <InfoIcon />
          {showPopup && (
            <Popup
              text={t('header_popup')}
              position={{ right: '16px', top: '24px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
