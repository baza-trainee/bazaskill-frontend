import type { ICounters } from '@/types/counters';

import axios from '@/config/axios';

interface IData {
  liveProject: number;
  members: number;
  employed: number;
  technologies: number;
  libraries: number;
}

interface IUpdateData {
  id: number;
  updateData: IData;
}

export async function getCounters() {
  const { data }
    = await axios.get<ICounters[]>(`/counters`);
  return data;
}

export async function getCounterById(id: number) {
  const { data } = await axios.get<ICounters>(
    `/counters/${id}`,
  );
  return data;
}

export async function updateCounter({
  id,
  updateData,
}: IUpdateData) {
  const { data } = await axios.patch(
    `/counters/${id}`,
    updateData,
  );

  return data;
}
