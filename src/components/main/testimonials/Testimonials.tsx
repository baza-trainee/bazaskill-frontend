'use client';
import Link from 'next/link';
import Container from '../Container';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getTestimonials } from '@/api/testimonials';

const Testimonials = () => {
  const { data, isFetching } = useQuery({
    queryKey: [constants.testimonials.FETCH_TESTIMONIALS],
    queryFn: getTestimonials,
  });
  if (isFetching) return <p>Loading...</p>;
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex h-[10rem] w-[20rem] flex-col items-center justify-center gap-2 border border-black bg-white"
          >
            <h1 className="main-gradient bg-clip-text font-tahoma text-xl font-bold text-transparent">
              {item.name}
            </h1>
            <p className="font-open-sans font-light">
              {item.review}
            </p>
          </div>
        ))}
        <Link href="/admin/testimonials/add">
          <button className="mt-4 border border-black p-2">
            Add Testimonial
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Testimonials;
