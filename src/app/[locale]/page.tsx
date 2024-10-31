import Advantages from '@/components/user/advantages/Advantages';
import Counters from '@/components/user/counters/Counters';
import Hero from '@/components/user/hero/Hero';
import Invitation from '@/components/user/invitation/Invitation';
import CookiesModal from '@/components/user/modals/cookies/CookiesModal';
import OurHistory from '@/components/user/our_history/OurHistory';
import Partners from '@/components/user/partners/Partners';
import Posts from '@/components/user/posts/Posts';

async function Home() {
  return (
    <div className="mt-[72px] sm:mt-[80px] md:mt-[140px] flex min-h-screen w-full flex-col items-center justify-center bg-graphite">
      <Hero />
      <OurHistory/>
      <Counters />
      <Advantages/>
      <Invitation/>
      <Partners />
      <Posts />
      <CookiesModal />
    </div>
  );
}

export default Home;
