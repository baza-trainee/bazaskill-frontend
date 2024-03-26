/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from '@/config/axios';
import { User } from '@/types/setting';

export const changePassword = async (data: any) => {
  const response = await axios.post<User>(
    '/password/change',
    data
  );
  return response;
};
