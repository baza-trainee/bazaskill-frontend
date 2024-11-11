import axios from '@/config/axios';

export const getStack = async () => {
  const response = await axios.get('/stack');
  return response.data;
};

export const addStack = async (data: {
  specialization_id: string;
  title: string;
}) => {
  await axios.post('/stack', data);
};
