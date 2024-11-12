import axios from '@/config/axios';
import type { ICard } from '@/types/cards';

export async function getCards() {
  const { data } = await axios.get<ICard[]>('/cards');
  return data;
}

export async function getCardById(id: string) {
  const { data } = await axios.get<ICard>(`/cards/${id}`);
  return data;
}

export async function createCard(formData: FormData) {
  const { data } = await axios.post('/cards', formData);
  return data;
}

export async function updateCard(id: string, formData: FormData) {
  const { data } = await axios.patch(`/cards/${id}`, formData);
  return data;
}

export async function deleteCard(id: string) {
  const { data } = await axios.delete(`/cards/${id}`);
  return data;
}
