import axios from '@/config/axios';

export async function getStack() {
  const response = await axios.get('/stack');
  return response.data;
}

export async function addStack(data: {
  specialization_id: string;
  title: string;
}) {
  await axios.post('/stack', data);
}
