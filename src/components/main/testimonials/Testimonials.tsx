'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  useAppDispatch,
  useAppSelector,
} from '@/store/hook';
import { fetchTestimonials } from '@/store/testimonials/thunk';
import Container from '../Container';

const Testimonials = () => {
  const dispatch = useAppDispatch();
  const testimonials = useAppSelector(
    (state) => state.testimonial.testimonials
  );
  const loading = useAppSelector(
    (state) => state.testimonial.loading
  );

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        {testimonials.map((item) => (
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
