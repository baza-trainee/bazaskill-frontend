import { useState } from "react";
import { popupText } from "@/constants/popuptext";
import Logo from '@/components/shared/icons/Logo';
import Popup from "./Popup";
import HeaderIcon from "./icons/HeaderIcon";
import InfoIcon from "./icons/InfoIcon";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="flex flex-col justify-start items-center">
        <Logo className=" mt-4 h-[50px] flex justify-center" />
        <a href="https://baza-skill.com.ua/ua" className="text-xl font-medium">
          https://baza-skill.com.ua
        </a>
      </div>
      <div className="relative p-6 flex justify-center items-center gap-6 border border-green rounded-lg">
        <HeaderIcon />
        <span className="w-[681px] text-xl font-medium mr-8">
          Інтерактивний калькулятор ROI для порівняння найму Junior vs Middle
        </span>
        <div
          className="flex w-6 h-6 relative"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <InfoIcon />
          {showPopup && (
            <Popup
              text={popupText}
              position={{ right: "16px", top: "24px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;