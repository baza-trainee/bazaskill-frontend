export interface IPartners {
  id: string;
  name: string;
  image_url: string;
  title: string;
  partner_url: string;
}

export type PartnersFormInput = Omit<IPartners, 'id'>;

export type Partners = {
  id: string;
  name: string;
  image_url: string;
  title: string;
  partner_url: string;
};
