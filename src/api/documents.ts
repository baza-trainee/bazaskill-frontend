/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import { IDocument } from '@/types/documents';

export const getDocuments = async () => {
  const { data } =
    await axios.get<IDocument[]>('/documents');
  return data;
};

export const updateDocument = async (
  id: string,
  data: any
) => {
  const response = await axios.patch(
    `/documents/${id}`,
    data
  );
  return response;
};

export const deleteDocument = async (id: string) => {
  const response = await axios.delete(`/documents/${id}`);
  return response;
};
