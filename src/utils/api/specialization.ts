import axios from '@/config/axios';
import type { ISpecializationWithStack, Specialization } from '@/types/specialization/index';

export async function getSpecializationsWithStack() {
  const { data } = await axios.get<ISpecializationWithStack[]>('/specialization/stack');
  return data;
}

export async function getSpecializations() {
  const { data } = await axios.get<Specialization[]>('/specialization');
  return data;
}

export async function getSpecializationById(id: string) {
  const { data } = await axios.get<Specialization[]>(`/specialization/${id}`);
  return data;
}

export async function createSpecialization(data: { title: string }) {
  const response = await axios.post('/specialization', data);
  return response;
}

export async function updateSpecialization(
  id: string,
  data: {
    title: string;
  }
) {
  const response = await axios.patch(`/specialization/${id}`, data);
  return response;
}

export async function deleteSpecialization(id: string) {
  const response = await axios.delete(`/specialization/${id}`);
  return response;
}
