"use client";

import Image from "next/image";
import img from "../../../../public//images/our_history.png";
import { useTranslations } from "next-intl";

export const OurHistory = () => {
  const t = useTranslations("Main.history");
  const descriptionStyle =
    "lg:text-[20px]  md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]";
    
  return (
    <section className="container pt-[100px] flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[24px] gap-[10px]">
      <div>
        <Image src={img} alt="" className="h-[100%]" />
      </div>
      <div className=" 2xl:px-[40px]">
        <h2 className="text-center lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]">
          {t("title")}
        </h2>
        <p className={descriptionStyle}>{t("description_1")}</p>
        <br></br>
        <p className={descriptionStyle}>{t("description_2")}</p>
        <br></br>
        <p className={descriptionStyle}>{t("description_3")}</p>
        <br></br>
        <p className={descriptionStyle}>{t("description_4")}</p>
      </div>
    </section>
  );
};
