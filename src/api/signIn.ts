/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import {
  authLoginType,
  forgotPasswordType,
  resetPasswordType,
} from '@/types/singIn';

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

export const resetPassword = async (data: any) => {
  const response = await axios.post<resetPasswordType>(
    '/password/reset',
    data
  );
  return response;
};
