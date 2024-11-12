import axios from '@/config/axios';
import type { authLoginType, forgotPasswordType } from '@/types/singIn';

export async function getProfile() {
  const { data } = await axios.get('/profile');
  return data;
}

export async function registerUser(data: any) {
  const response = await axios.post<authLoginType>('/user', data);
  return response;
}

export async function authLogin(data: any) {
  const response = await axios.post<authLoginType>('/auth/login', data);
  return response;
}

export async function forgotPassword(data: any) {
  const response = await axios.post<forgotPasswordType>(
    '/password/forgot',
    data
  );
  return response;
}

export async function resetPassword({
  token,
  password
}: {
  token: string;
  password: string;
}) {
  const response = await axios.post('/password/reset', {
    token,
    password
  });
  return response;
}
