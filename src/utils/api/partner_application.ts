import axios from '@/config/axios';
import type { IPartner, IPartnerResponse } from '@/types/applications';

export async function getPartnerApplications() {
  const { data } = await axios.get<IPartnerResponse[]>('/partner-application');
  return data;
}

export async function getPartnerApplicationsById(id: string) {
  const { data } = await axios.get<IPartnerResponse>(
    `/partner-application/${id}`
  );
  return data;
}

export async function createApplication(values: IPartner) {
  const newApplication = {
    company_name: values.company_name,
    company_url: values.company_url,
    first_name: values.first_name,
    last_name: values.last_name,
    phone: values.phone,
    email: values.email,
    country: values.country,
    specialist: values.specialist,
    position: values.position,
    message: values.message
  };
  const res = await axios.post('/partner-application', newApplication);
  return res;
}

export async function deleteApplication(id: number) {
  const response = await axios.delete(`/partner-application/${id}`);
  return response;
}
