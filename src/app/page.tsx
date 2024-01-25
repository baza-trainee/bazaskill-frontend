import Testimonials from '@/components/main/Testimonials';

const Home: React.FunctionComponent = async () => {
  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center gap-2 bg-blue-100">
      <Testimonials />
    </div>
  );
};

export default Home;
