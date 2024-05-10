import axios from '@/config/axios';
import { IImage } from '@/types/gallery';

export const getImages = async () => {
  const { data } = await axios.get<IImage[]>('/gallery');
  return data;
};

export const createImage = async (formData: FormData) => {
  const { data } = await axios.post('/gallery', formData);
  return data;
};

export const deleteImage = async (id: string) => {
  const { data } = await axios.delete(`/gallery/${id}`);
  return data;
};
