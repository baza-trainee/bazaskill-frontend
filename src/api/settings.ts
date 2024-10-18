import axios from '@/config/axios';

interface ChangePasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export async function changePassword({
  data,
}: {
  data: ChangePasswordRequest;
}) {
  const response = await axios.patch('/password/change', {
    email: data.email,
    old_password: data.oldPassword,
    new_password: data.newPassword,
  });
  return response;
}

export async function changeEmail({
  id,
  email,
}: {
  id: string;
  email: string;
}) {
  const response = await axios.patch(`/user/${id}`, {
    email,
  });
  return response;
}
