import Testimonials from '@/components/main/Testimonials';

const Home: React.FunctionComponent = async () => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center bg-blue-100">
      <Testimonials />
    </div>
  );
};

export default Home;
