export interface ITestimonial {
  id: string;
  name_ua: string;
  name_en: string;
  name_pl: string;
  position: string;
  review_ua: string;
  review_en: string;
  review_pl: string;
  date: string;
  file: File;
  createdAt: string;
}

export type TestimonialFormInput = Omit<
  ITestimonial,
  'id' | 'createdAt'
>;

export type Testimonial = {
  id: string;
  name_ua: string;
  name_en?: string;
  name_pl?: string;
  position: string;
  review_ua: string;
  review_en?: string;
  review_pl?: string;
  date: string;
  image_url: string;
};
