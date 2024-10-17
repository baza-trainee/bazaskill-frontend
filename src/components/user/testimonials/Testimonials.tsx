'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getTestimonials } from '@/api/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials_styles.css';

const DynamicCard = dynamic(
  () => import('./TestimonialSlider'),
  {
    loading: () => null,
  }
);

const Testimonials = () => {
  const t = useTranslations('Main.testimonials');

  const { data } = useQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });

  return (
    <section className="container relative py-[60px]">
      <h2 className="mb-[50px] text-center font-tahoma text-[24px] font-bold tracking-[1.08px] text-white md:text-2xl lg:text-[40px]">
        {t('title')}
      </h2>
      <div className="relative xl:mx-auto xl:max-w-[1280px]  5xl:max-w-[1681px]">
        {data && Array.isArray(data) && (
          <DynamicCard data={data} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
