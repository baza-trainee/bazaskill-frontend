import Advantages from '@/components/pages/main/advantages/Advantages';
import Counters from '@/components/pages/main/counters/Counters';
import Hero from '@/components/pages/main/hero/Hero';
import Invitation from '@/components/pages/main/invitation/Invitation';
import CookiesModal from '@/components/shared/modals/cookies/CookiesModal';
import OurHistory from '@/components/pages/main/our_history/OurHistory';
import Partners from '@/components/pages/main/partners/Partners';
import Posts from '@/components/pages/main/posts/Posts';

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
