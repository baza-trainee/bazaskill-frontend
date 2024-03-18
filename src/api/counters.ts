import axios from 'axios';
import { ICounters } from '@/types/counters';

export const getCounters = async () => {
  const { data } =
    await axios.get<ICounters[]>(`/counters`);
  return data;
};

export const updateCounter = async <T>(
  id: string,
  data: T
) => {
  const response = await axios.patch(
    `/counters/${id}`,
    data
  );

  return response;
};

export const deleteCounter = async (id: string) => {
  const response = await axios.delete(`/counters/${id}`);
  return response;
};
