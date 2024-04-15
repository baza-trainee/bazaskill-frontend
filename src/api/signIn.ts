/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import {
  authLoginType,
  forgotPasswordType,
} from '@/types/singIn';

export const getProfile = async () => {
  const { data } = await axios.get('/profile');
  return data;
};

export const authLogin = async (data: any) => {
  const response = await axios.post<authLoginType>(
    '/auth/login',
    data
  );
  return response;
};

export const forgotPassword = async (data: any) => {
  const response = await axios.post<forgotPasswordType>(
    '/password/forgot',
    data
  );
  return response;
};

export const resetPassword = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  const response = await axios.post('/password/reset', {
    token,
    password,
  });
  return response;
};
