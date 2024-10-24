import Advantages from '@/components/user/advantages/Advantages';
import Candidates from '@/components/user/candidates/Candidates';
import Contacts from '@/components/user/contacts/Contacts';
import ContentCards from '@/components/user/contentCards/ContentCards';
import Counters from '@/components/user/counters/Counters';
import Help from '@/components/user/help/Help';
import Hero from '@/components/user/hero/Hero';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import { OurHistory } from '@/components/user/our_history/OurHistory';
import Partners from '@/components/user/partners/Partners';
import Posts from '@/components/user/posts/Posts';
import Testimonials from '@/components/user/testimonials/Testimonials';

async function Home() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex min-h-screen w-full flex-col items-center justify-center bg-graphite">
      <Hero />
      <OurHistory/>
      <Counters />
      {/* <Help /> */}
      {/* <ContentCards /> */}
      {/* <Candidates /> */}
      <Advantages/>
      <Partners />
      <Posts />
      <Testimonials />
      <Contacts />
      <CookiesModal />
    </div>
  );
}

export default Home;
