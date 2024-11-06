'use client';
import { useTranslations } from "next-intl";
import Slider from "@/components/shared/slider/Slider";
import JuniorCard from "./junior_card/JuniorCard";

import { useQuery } from "@tanstack/react-query";
import { getStories } from "@/api/stories";
import { constants } from "@/constants";

export default function HistoryJuniors(): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');

  const { data } = useQuery({
    queryKey: [constants.stories.GET_STORIES],
    queryFn: getStories,
  });

  return (
    <section 
      className="container py-12 md:py-14 xl:py-[100px] max-md:main-texture-background bg-no-repeat bg-cover bg-fixed">
      {data && Array.isArray(data) && 
        <Slider 
          data={data} 
          Component={JuniorCard} 
          title={t("title")} 
          nextElName="nextHistory"
          prevElName="prevHistory"
          breakpoints={{
            1024: {
              slidesPerView: 2,
            }
          }}
        />
      }
    </section>
  )
}