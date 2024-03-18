import axios from '@/config/axios';
import { IDocument } from '@/types/documents';

export const getDocuments = async () => {
  const { data } =
    await axios.get<IDocument[]>('/documents');
  return data;
};

export const updateDocument = async <T>(
  id: string,
  data: T
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
