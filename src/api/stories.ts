import axios from '@/config/axios';
import { IStory } from '@/types/stories';

export async function createStory(data: unknown) {
  console.log(data);
  const response = await axios.post<IStory[]>(
    '/stories',
    data,
  );
  return response;
}

export async function getStories() {
  const { data } = await axios.get<IStory[]>('/stories');
  return data;
}

export async function deleteStories(id: string) {
  const response = await axios.delete(`/stories/${id}`);
  return response;
}

export async function getStoryById(id: string) {
  const { data } = await axios.get<IStory>(`/stories/${id}`);
  return data;
}

export async function updateStory(id: string, data: unknown) {
  const response = await axios.patch(`/stories/${id}`, data);
  return response;
}
