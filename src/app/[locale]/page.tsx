import Hero from '@/components/main/hero/Hero';
import Counters from '@/components/main/counters/Counters';
import Testimonials from '@/components/main/testimonials/Testimonials';
import Posts from '@/components/main/posts/Posts';
import Partners from '@/components/main/partners/Partners';
import Contacts from '@/components/main/contacts/Contacts';
import Help from '@/components/main/help/Help';
import ContentCards from '@/components/main/contentCards/ContentCards';
import CookiesModal from '@/components/main/modals/cookies/CookiesModal';
import Candidates from '@/components/main/candidates/Candidates';

const Home = async () => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-graphite">
      <Hero />

      <Counters />
      <Help />
      <ContentCards />
      <Candidates />
      <Partners />
      <Posts />

      <Testimonials />

      <Contacts />
      <CookiesModal />
    </div>
  );
};

export default Home;
