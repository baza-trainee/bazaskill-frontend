'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  useAppDispatch,
  useAppSelector,
} from '@/redux/hook';
import { fetchTestimonials } from '@/redux/Testimomials/thunk';


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
    <div className="flex flex-col items-center justify-center">
      {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex h-[10rem] w-[20rem] flex-col items-center justify-center gap-2 border border-black bg-white"
            >
              <h1 className="text-xl font-bold">
                {item.name}
              </h1>
              <p>{item.review}</p>
            </div>
          ))
        }
      <Link href="/admin/testimonials/add">
        <button className="mt-4 border border-black p-2">
          Add Testimonial
        </button>
      </Link>
    </div>
  );
};

export default Testimonials;
