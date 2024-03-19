import axios from '@/config/axios';
import { IHr, IHrResponse } from '@/types/applications';

export const getHrApplications = async () => {
  const { data } = await axios.get<IHrResponse[]>(
    '/hr-application'
  );
  return data;
};

export const getHrApplicationById = async (id: string) => {
  const { data } = await axios.get<IHrResponse>(
    `/hr-application/${id}`
  );
  return data;
};

export const createApplication = async (values: IHr) => {
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
    newApplication
  );
  return response;
};

export const deleteApplication = async (id: number) => {
  const response = await axios.delete(
    `/hr-application/${id}`
  );
  return response;
};
