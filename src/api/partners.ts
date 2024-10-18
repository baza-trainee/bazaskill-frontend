import type { IPartners, TPartner } from '@/types/partners';

import axios from '@/config/axios';

export async function getPartners() {
  const { data } = await axios.get<TPartner[]>('/partners');
  return data;
}

export async function updatePartners(id: string, data: any) {
  const response = await axios.patch(
    `/partners/${id}`,
    data,
  );
  return response;
}

export async function getPartnersId(id: string) {
  const { data } = await axios.get<TPartner>(
    `/partners/${id}`,
  );
  return data;
}

export async function createPartners(data: any) {
  const response = await axios.post<IPartners[]>(
    '/partners',
    data,
  );
  return response;
}

export async function deletePartners(id: string) {
  const response = await axios.delete(`/partners/${id}`);
  return response;
}
