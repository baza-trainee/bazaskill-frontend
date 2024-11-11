import axios from '@/config/axios';
import { ICard } from '@/types/cards';

export const getCards = async () => {
  const { data } = await axios.get<ICard[]>('/cards');
  return data;
};

export const getCardById = async (id: string) => {
  const { data } = await axios.get<ICard>(`/cards/${id}`);
  return data;
};

export const createCard = async (formData: FormData) => {
  const { data } = await axios.post('/cards', formData);
  return data;
};

export const updateCard = async (
  id: string,
  formData: FormData
) => {
  const { data } = await axios.patch(
    `/cards/${id}`,
    formData
  );
  return data;
};

export const deleteCard = async (id: string) => {
  const { data } = await axios.delete(`/cards/${id}`);
  return data;
};
