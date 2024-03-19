import axios from '@/config/axios';
import { ICounters } from '@/types/counters';

interface IData {
  live_projects: number;
  participants: number;
  employed: number;
  technologies: number;
  libraries: number;
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
    `/counters/${id}`
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
