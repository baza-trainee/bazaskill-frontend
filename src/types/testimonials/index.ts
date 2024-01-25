export interface ITestimonial {
  id: string;
  name: string;
  review: string;
  createdAt: string;
}

export type TestimonialFormInput = Omit<
  ITestimonial,
  'id' | 'createdAt'
>;
