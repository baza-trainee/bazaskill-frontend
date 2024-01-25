import Hero from '@/components/main/hero/Hero';
import Counters from '@/components/main/counters/Counters';
import About from '@/components/main/about/About';
import Specialists from '@/components/main/specialists/Specialists';
import Testimonials from '@/components/main/testimonials/Testimonials';
import Posts from '@/components/main/posts/Posts';
import Partners from '@/components/main/partners/Partners';
import Contacts from '@/components/main/contacts/Contacts';

const Home = async () => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-blue-100">
      <Hero />
      <Counters />
      <About />
      <Specialists />
      <Testimonials />
      <Posts />
      <Partners />
      <Contacts />
    </div>
  );
};

export default Home;
