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

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  review: string;
  data: string;
  image: string;
};
