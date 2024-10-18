import type { IDocument } from '@/types/documents';

import axios from '@/config/axios';

export async function getDocuments() {
  const { data }
    = await axios.get<IDocument[]>('/documents');
  return data;
}

export async function createDocument<T>(data: T) {
  const response = await axios.post(`/documents`, data);
  return response;
}

export async function updateDocument<T>(id: string, data: T) {
  const response = await axios.patch(
    `/documents/${id}`,
    data,
  );
  return response;
}

export async function deleteDocument(id: string) {
  const response = await axios.delete(`/documents/${id}`);
  return response;
}
