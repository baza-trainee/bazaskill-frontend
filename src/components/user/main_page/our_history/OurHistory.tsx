"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import OurHistoryAnimation from "./OurHistoryAnimation";
import OurHistoryText from "./OurHistoryText";

const OurHistory = () => {
  const t = useTranslations("Main.history");
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && <section
        className="pt-[100px] flex flex-col xl:grid xl:grid-cols-2 
      lg:gap-[24px] gap-[48px] px-4 py-[48px] md:py-[60px] md:px-[80px] xl:py-[100px] xl:px-[80px]"
        aria-labelledby="history-title"
      >
        <h2
          id="history-title"
          className="text-center xl:hidden lg:mb-[48px] md:mb-[28px] 
          font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]"
        >
          {t("title")}
        </h2>
        <OurHistoryAnimation />
        <OurHistoryText />
      </section>}
    </>
  );
};

export default OurHistory