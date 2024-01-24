'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { fetchTestimonials } from '@/redux/slices/testimonialSlice';

const Testimonials = () => {
  const dispatch = useAppDispatch();
  const testimonials = useAppSelector((state) => state.testimonial.testimonials);
  const loading = useAppSelector((state) => state.testimonial.loading);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="flex h-[10rem] w-[20rem] flex-col items-center justify-center gap-2 border border-black bg-white"
        >
          <h1 className="text-xl font-bold">{item.name}</h1>
          <p>{item.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
