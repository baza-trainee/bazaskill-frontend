import Hero from '@/components/user/hero/Hero';
import Counters from '@/components/user/counters/Counters';
import Testimonials from '@/components/user/testimonials/Testimonials';
import Posts from '@/components/user/posts/Posts';
import Partners from '@/components/user/partners/Partners';
import Contacts from '@/components/user/contacts/Contacts';
import Help from '@/components/user/help/Help';
import ContentCards from '@/components/user/contentCards/ContentCards';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import Candidates from '@/components/user/candidates/Candidates';

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
