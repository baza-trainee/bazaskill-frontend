import { ITestimonial } from '@/types/testimonials';

type TestimonialState = {
  testimonials: ITestimonial[];
  loading: boolean;
  error: string | null;
};

export const initialState: TestimonialState = {
  testimonials: [],
  loading: false,
  error: null,
};
