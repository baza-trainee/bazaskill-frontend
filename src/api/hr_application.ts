import type { IHr, IHrResponse } from '@/types/applications';

import axios from '@/config/axios';

export async function getHrApplications() {
  const { data } = await axios.get<IHrResponse[]>(
    '/hr-application',
  );
  return data;
}

export async function getHrApplicationById(id: string) {
  const { data } = await axios.get<IHrResponse>(
    `/hr-application/${id}`,
  );
  return data;
}

export async function createApplication(values: IHr) {
  const newApplication = {
    first_name: values.first_name,
    last_name: values.last_name,
    phone: values.phone,
    email: values.email,
    company: values.company,
    country: values.country,
    specialization: values.specialization,
    message: values.message,
  };
  const response = await axios.post(
    '/hr-application',
    newApplication,
  );
  return response;
}

export async function deleteApplication(id: number) {
  const response = await axios.delete(
    `/hr-application/${id}`,
  );
  return response;
}
