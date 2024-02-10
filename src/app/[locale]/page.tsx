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

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-graphite">
      <Hero />
      <Counters />
      <Help />
      <Posts />
      <ContentCards />
      <Partners />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Testimonials />
      </HydrationBoundary>
      <Contacts />
    </div>
  );
};

export default Home;
