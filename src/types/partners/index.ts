export interface IPartners {
  id: string;
  name: string;
  partner_url: string;
  file: File;
}

export type PartnersFormInput = Omit<IPartners, 'id'>;

export type Partners = {
  id: string;
  name: string;
  partner_url: string;
  file?: File;
};
