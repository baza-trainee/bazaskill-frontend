import { ISpecializationWithStack } from './../types/specialization/index';
import axios from '@/config/axios';

export const getSpecializationsWithStack = async () => {
  const { data } = await axios.get<
    ISpecializationWithStack[]
  >('/specialization/stack');
  return data;
};
