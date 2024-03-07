/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ITestimonial,
  TestimonialFormInput,
} from '@/types/testimonials';
import axios from '@/config/axios';

export const getTestimonials = async () => {
  const { data } =
    await axios.get<ITestimonial[]>('/testimonials');
  return data;
};

export const createTestimonial = async () => {
  const { data } =
    await axios.post<TestimonialFormInput[]>(
      '/testimonial'
    );
  return data;
};

export const updateTestimonial = async (
  id: string,
  data: any
) => {
  const response = await axios.patch(
    `/testimonial/${id}`,
    data
  );
  return response;
};

export const deleteTestimonial = async (id: string) => {
  const response = await axios.delete(`/testimonial/${id}`);
  return response;
};
