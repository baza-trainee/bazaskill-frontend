import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';


const OurHistoryText = () => {
  const t = useTranslations("Main.history");
  const [showText, setShowText] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 420px)' });

  useEffect(() => {
    setShowText(!isMobile);
}, [isMobile]);


  const descriptionStyle =
    "lg:text-[20px] md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]";

  return (
    <div className="2xl:px-[25px] md:h-[648px] ">
      <h2
        id="history-title"
        className="hidden xl:block text-center lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]"
      >
        {t("title")}
      </h2>
      <p className={descriptionStyle}>{t("description_1")}</p>
      <br />
      <p className={descriptionStyle}>{t("description_2")}</p>
      <br />
      <div className={`${showText ? "block" : "hidden"}`}>
        <p className={descriptionStyle}>{t("description_3")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_4")}</p>
      </div>
      {isMobile && !showText &&
        <button
          onClick={() => setShowText(!showText)}
          className="relative flex text-transparent bg-clip-text 
          items-center justify-center p-[2px] overflow-hidden 
          transition-all bg-gradient-to-r from-green via-green  to-yellow rounded-md group"
        >{t('button')}</button>}
    </div>
  )
}

export default OurHistoryText
