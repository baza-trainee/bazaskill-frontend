import {
  ITestimonial,
  TestimonialFormInput,
} from '@/types/testimonials';
import axios from '@/config/axios';

export const getTestimonials = async () => {
  const data =
    await axios.get<ITestimonial[]>('/testimonials');
  return data;
};

export const createTestimonial = async (
  values: TestimonialFormInput
) => {
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
