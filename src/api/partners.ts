/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import { IPartners } from '@/types/partners';

export const getPartners = async () => {
  const { data } =
    await axios.get<IPartners[]>('/partners');
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

export const deletePartners = async (id: string) => {
  const response = await axios.delete(`/partners/${id}`);
  return response;
};
