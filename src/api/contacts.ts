/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import { IContacts } from '@/types/contacts';

interface IData {
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
  updateData: IData;
}

export const getContact = async () => {
  const { data } =
    await axios.get<IContacts[]>('/contacts');
  return data;
};

export const getByIdContact = async (id: number) => {
  const { data } = await axios.get<IContacts>(
    `/contacts/${id}`
  );
  return data;
};

export const updateContact = async ({
  id,
  updateData,
}: IUpdateData) => {
  const { data } = await axios.patch(
    `/contacts/${id}`,
    updateData
  );

  return data;
};

export const deleteContact = async (id: number) => {
  await axios.delete(`/contacts/${id}`);
};
