import axios from '@/config/axios';

export const getStack = async () => {
  const response = await axios.get('/stack');
  return response.data;
};

export const addStack = async (title: string) => {
  console.log(title);
  const newStack = {
    title,
  };
  await axios.post('/stack', newStack);
};
