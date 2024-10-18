import type {
  TestimonialAdmin,
  TestimonialFormInput,
} from '@/types/testimonials';

import axios from '@/config/axios';

export async function getTestimonials() {
  const { data }
    = await axios.get<TestimonialAdmin[]>('/testimonials');
  return data;
}

export async function getTestimonialsId(id: string) {
  const { data } = await axios.get<TestimonialAdmin>(
    `/testimonials/${id}`,
  );
  return data;
}

export async function createTestimonial(data: any) {
  const response = await axios.post<TestimonialFormInput[]>(
    '/testimonials',
    data,
  );
  return response;
}

export async function updateTestimonial(id: string, data: any) {
  const response = await axios.patch(
    `/testimonials/${id}`,
    data,
  );
  return response;
}

export async function deleteTestimonial(id: string) {
  const response = await axios.delete(
    `/testimonials/${id}`,
  );
  return response;
}
