import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`
});

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
