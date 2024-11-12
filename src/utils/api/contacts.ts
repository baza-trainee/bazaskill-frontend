import axios from '@/config/axios';
import type { IContacts } from '@/types/contacts';

interface Data {
  phone_1: string;
  phone_2: string;
  email: string;
  telegram: string;
  linkedin: string;
  discord: string;
  facebook: string;
  instagram: string;
}

interface IUpdateData {
  id: number;
  updateData: Data;
}

export async function getContact() {
  const { data } = await axios.get<IContacts[]>('/contacts');
  return data;
}

export async function getByIdContact(id: number) {
  const { data } = await axios.get<IContacts>(`/contacts/${id}`);
  return data;
}

export async function updateContact({ id, updateData }: IUpdateData) {
  const { data } = await axios.patch(`/contacts/${id}`, updateData);

  return data;
}

export async function addContact(value: Data) {
  const { data } = await axios.post<IContacts[]>(`/contacts`, value);
  return data;
}

export async function deleteContact(id: number) {
  await axios.delete(`/contacts/${id}`);
}
