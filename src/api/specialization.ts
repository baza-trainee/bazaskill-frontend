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
