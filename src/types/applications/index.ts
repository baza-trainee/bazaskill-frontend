export interface IHr {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  company?: string;
  country?: string;
  specialization: string;
  message: string;
}

export interface IHrResponse extends IHr {
  id: number;
  created_at: Date;
}

export interface IPartner {
  company_name: string;
  company_url: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  country?: string;
  specialist: string;
  position: string;
  message: string;
}

export interface IPartnerResponse extends IPartner {
  id: number;
  created_at: Date;
}
