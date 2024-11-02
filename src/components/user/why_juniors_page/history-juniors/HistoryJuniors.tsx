import Slider from "@/components/shared/slider/Slider";
import JuniorCard from "./junior_card/JuniorCard";
import { useTranslations } from "next-intl";
import { ItemsData } from "./data";

export default function HistoryJuniors(): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');

  return (
    <section 
      className="container py-12 md:py-[100px] max-md:main-texture-background bg-no-repeat bg-cover">
      <Slider 
        data={ItemsData} 
        Component={JuniorCard} 
        title={t("title")} 
        minWidth="1024"/>
    </section>
  )
}