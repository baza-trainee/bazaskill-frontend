/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  TestimonialAdmin,
  TestimonialFormInput,
} from '@/types/testimonials';
import axios from '@/config/axios';

export const getTestimonials = async () => {
  const { data } =
    await axios.get<TestimonialAdmin[]>('/testimonials');
  return data;
};

export const getTestimonialsId = async (id: string) => {
  const { data } = await axios.get<TestimonialAdmin>(
    `/testimonials/${id}`
  );
  return data;
};

export const createTestimonial = async (data: any) => {
  const response = await axios.post<TestimonialFormInput[]>(
    '/testimonials',
    data
  );
  return response;
};

export const updateTestimonial = async (
  id: string,
  data: any
) => {
  const response = await axios.patch(
    `/testimonials/${id}`,
    data
  );
  return response;
};

export const deleteTestimonial = async (id: string) => {
  const response = await axios.delete(
    `/testimonials/${id}`
  );
  return response;
};
