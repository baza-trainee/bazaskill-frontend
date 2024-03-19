import axios from 'axios';
import { ICounters } from '@/types/counters';

interface IData {
  live_projects: string;
  participants: string;
  employed: string;
  technologies: string;
  libraries: string;
}

interface IUpdateData {
  id: number;
  updateData: IData;
}

export const getCounters = async () => {
  const { data } =
    await axios.get<ICounters[]>(`/counters`);
  return data;
};

export const getCounterById = async (id: number) => {
  const { data } = await axios.get<ICounters>(
    `/contscts/${id}`
  );
  return data;
};

export const updateCounter = async ({
  id,
  updateData,
}: IUpdateData) => {
  const { data } = await axios.patch(
    `/counters/${id}`,
    updateData
  );

  return data;
};

export const deleteCounter = async (id: number) => {
  await axios.delete(`/counters/${id}`);
};
