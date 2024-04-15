import schema from '@/components/admin/candidates/AddCandidate/schema';
import axios from 'axios';
import { z } from 'zod';

export const createCandidate = async (
  formData: FormData
) => {
  const { data } = await axios.post(
    'http://localhost:4000/api/v1/candidates',
    formData
  );
  return data;
};
