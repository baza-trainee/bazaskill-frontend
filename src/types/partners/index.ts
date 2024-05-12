export interface IPartners {
  id: string;
  name: string;
  partner_url: string;
  file: File;
}

export type PartnersFormInput = Omit<IPartners, 'id'>;

export type TPartner = {
  id: string;
  name: string;
  image_url: string;
  partner_url: string;
  public_cloudinary_id: string;
};
