import { ITestimonial } from '@/types/testimonials';
import axios from 'axios';

export const getTestimonials = async () => {
  const result: Promise<{ data: ITestimonial[] }> =
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            data: [
              {
                id: 'a1q24vsrse',
                name: 'филип',
                review: 'имхо',
                createdAt: '23/01/2024',
              },
            ],
          }),
        200
      );
    });
  // const result = await axios.get<ITestimonial[]>('/testimonials');
  const data = await result;
  return data;
};

export const createTestimonial = async (values: {
  name: string;
  review: string;
}) => {
  const newTestimonial = {
    name: values.name,
    review: values.review,
  };
  const data = await axios.post(
    '/testimonials',
    newTestimonial
  );
  return data;
};
