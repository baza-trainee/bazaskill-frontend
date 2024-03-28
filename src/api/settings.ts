import axios from '@/config/axios';

type ChangePasswordRequest = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

export const changePassword = async ({
  data,
}: {
  data: ChangePasswordRequest;
}) => {
  const response = await axios.patch('/password/change', {
    email: data.email,
    old_password: data.oldPassword,
    new_password: data.newPassword,
  });
  return response;
};

export const changeEmail = async ({
  id,
  email,
}: {
  id: string;
  email: string;
}) => {
  const response = await axios.patch(`/user/${id}`, {
    email: email,
  });
  return response;
};
