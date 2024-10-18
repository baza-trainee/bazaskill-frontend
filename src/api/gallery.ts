import type { IImage } from '@/types/gallery';

import axios from '@/config/axios';

export async function getImages() {
  const { data } = await axios.get<IImage[]>('/gallery');
  return data;
}

export async function createImage(formData: FormData) {
  const { data } = await axios.post('/gallery', formData);
  return data;
}

export async function deleteImage(id: string) {
  const { data } = await axios.delete(`/gallery/${id}`);
  return data;
}
