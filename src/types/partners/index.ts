export interface IPartners {
  id: string;
  name: string;
}

export type TestimonialFormInput = Omit<
  IPartners,
  'id' | 'createdAt'
>;

export type Partners = {
  id: number;
  name: string;
  image: string;
};
