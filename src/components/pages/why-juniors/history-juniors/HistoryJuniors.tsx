'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { getStories } from '@/api/stories';
import Slider from '@/components/shared/slider/Slider';
import { constants } from '@/constants';

import JuniorCard from './junior_card/JuniorCard';

export default function HistoryJuniors(): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');

  const { data } = useQuery({
    queryKey: [constants.stories.GET_STORIES],
    queryFn: getStories
  });

  return (
    <section className="max-md:main-texture-background container bg-cover bg-fixed bg-no-repeat py-12 md:py-14 xl:py-[100px]">
      {data && Array.isArray(data) && (
        <Slider
          data={data}
          Component={JuniorCard}
          title={t('title')}
          nextElName="nextHistory"
          prevElName="prevHistory"
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 64
            }
          }}
        />
      )}
    </section>
  );
}
