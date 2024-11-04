// 'use client';

// import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
// import dynamic from 'next/dynamic';

// import { getTestimonials } from '@/api/testimonials';
// import { constants } from '@/constants';

import Slider from '@/components/shared/slider/Slider';
import TestimonialCard from './TestimonialCard';
import { data } from './data';

// const DynamicCard = dynamic(
//   () => import('./TestimonialSlider'),
//   {
//     loading: () => null,
//   },
// );

export default function Testimonials(): JSX.Element {
  const t = useTranslations('Why_juniors.testimonials');

  // const { data } = useQuery({
  //   queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
  //   queryFn: getTestimonials,
  // });

  return (
    <section className="container py-12 md:py-14 xl:py-[100px]">
      <Slider 
        data={data} 
        Component={TestimonialCard} 
        title={t("title")} 
        nextElName="nextTestimonials"
        prevElName="prevTestimonials"
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 3,
          }
        }}
      />
    </section>
  );
}