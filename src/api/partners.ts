/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import {
  Partners,
  PartnersFormInput,
} from '@/types/partners';

export const getPartners = async () => {
  const { data } = await axios.get<Partners[]>('/partners');
  return data;
};

export const updatePartners = async (
  id: string,
  data: any
) => {
  const response = await axios.patch(
    `/partners/${id}`,
    data
  );
  return response;
};

export const getPartnersId = async (id: string) => {
  const { data } = await axios.get<Partners>(
    `/partners/${id}`
  );
  return data;
};

export const createPartners = async (data: any) => {
  const response = await axios.post<PartnersFormInput[]>(
    '/partners',
    data
  );
  return response;
};

export const deletePartners = async (id: string) => {
  const response = await axios.delete(`/partners/${id}`);
  return response;
};
