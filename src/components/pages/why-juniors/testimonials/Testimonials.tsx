'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { getTestimonials } from '@/api/testimonials';
import Slider from '@/components/shared/slider/Slider';
import { constants } from '@/constants';

import TestimonialCard from './TestimonialCard';

export default function Testimonials(): JSX.Element {
  const t = useTranslations('Why_juniors.testimonials');

  const { data: testimonials } = useQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials
  });

  return (
    <section className="container py-12 md:py-14 xl:py-[100px]">
      {testimonials && Array.isArray(testimonials) && (
        <Slider
          data={testimonials}
          Component={TestimonialCard}
          title={t('title')}
          nextElName="nextTestimonials"
          prevElName="prevTestimonials"
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 60
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 60
            }
          }}
        />
      )}
    </section>
  );
}
