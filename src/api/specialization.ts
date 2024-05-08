import {
  ISpecializationWithStack,
  Specialization,
} from '@/types/specialization/index';
import axios from '@/config/axios';

export const getSpecializationsWithStack = async () => {
  const { data } = await axios.get<
    ISpecializationWithStack[]
  >('/specialization/stack');
  return data;
};

export const getSpecializations = async () => {
  const { data } = await axios.get<Specialization[]>(
    '/specialization'
  );
  return data;
};

export const getSpecializationById = async (id: string) => {
  const { data } = await axios.get<Specialization[]>(
    `/specialization/${id}`
  );
  return data;
};

export const createSpecialization = async (data: {
  title: string;
}) => {
  const response = await axios.post(
    '/specialization',
    data
  );
  return response;
};

export const updateSpecialization = async (
  id: string,
  data: {
    title: string;
  }
) => {
  const response = await axios.patch(
    `/specialization/${id}`,
    data
  );
  return response;
};

export const deleteSpecialization = async (id: string) => {
  const response = await axios.delete(
    `/specialization/${id}`
  );
  return response;
};
