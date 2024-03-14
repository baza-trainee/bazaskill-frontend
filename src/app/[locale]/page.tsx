import Hero from '@/components/main/hero/Hero';
import Counters from '@/components/main/counters/Counters';
import Testimonials from '@/components/main/testimonials/Testimonials';
import Posts from '@/components/main/posts/Posts';
import Partners from '@/components/main/partners/Partners';
import Contacts from '@/components/main/contacts/Contacts';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import { getTestimonials } from '@/api/testimonials';
import Help from '@/components/main/help/Help';
import ContentCards from '@/components/main/contentCards/ContentCards';
import { getSpecializations } from '@/api/specialization';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import CookiesModal from '@/components/main/modals/cookies/CookiesModal';
import Candidates from '@/components/main/candidates/Candidates';

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });

  await queryClient.prefetchQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });
  const t = await getTranslations('Main');
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-graphite">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero
          search={t('hero_section.search')}
          country={t('hero_section.country')}
          speciality={t('hero_section.speciality')}
        />
      </HydrationBoundary>
      <Counters />
      <Help />
      <ContentCards />
      <Candidates />
      <Partners />
      <Posts />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Testimonials />
      </HydrationBoundary>
      <Contacts />
      <CookiesModal />
    </div>
  );
};

export default Home;
