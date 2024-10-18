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
  image_id: string;
}

export type TestimonialFormInput = Omit<
  ITestimonial,
  'id' | 'createdAt'
>;

export interface Testimonial {
  id: string;
  name_ua: string;
  name_en?: string;
  name_pl?: string;
  position: string;
  review_ua?: string;
  review_en?: string;
  review_pl?: string;
  date: string;
  image_url: string;
  file?: any;
}

export interface TestimonialAdmin {
  id: string;
  name_ua: string;
  name_en: string;
  name_pl: string;
  position: string;
  review_ua: string;
  review_en: string;
  review_pl: string;
  date: string;
  image_url: string;
  file?: any;
}

export interface TestimonialPreview {
  name_ua: string;
  name_en?: string | undefined;
  name_pl?: string | undefined;
  position: string;
  review_ua?: string | undefined;
  review_en?: string | undefined;
  review_pl?: string | undefined;
  date: string;
  file?: File | string;
  images_url?: string | undefined;
}
