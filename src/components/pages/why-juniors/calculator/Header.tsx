import { useState } from "react";
import { useTranslations } from "next-intl";
import Logo from '@/components/shared/icons/Logo';
import Popup from "./Popup";
import HeaderIcon from "./icons/HeaderIcon";
import InfoIcon from "./icons/InfoIcon";

const Header = () => {
  const t = useTranslations("Calculator");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      <div className="flex flex-col justify-center items-center">
        <Logo className=" mt-4 h-[50px] flex justify-center" />
      </div>
      <div className="relative p-6 flex justify-center items-center gap-6 border border-green rounded-lg">
        <HeaderIcon />
        <span className="w-[80%] xl:w-[681px] text-sm lg:text-xl font-medium mr-8">
        {t('header')}
        </span>
        <div
          className="flex w-6 h-6 relative"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <InfoIcon />
          {showPopup && (
            <Popup
              text={t('header_popup')}
              position={{ right: "16px", top: "24px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;