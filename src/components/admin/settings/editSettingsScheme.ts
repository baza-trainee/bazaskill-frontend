import { z } from 'zod';

const passwordPattern = /^(.{8,})$/;

export const settingsScheme = z.object({
  oldPassword: z
    .string()
    .refine(
      (value) => !value || passwordPattern.test(value),
      {
        message: 'Пароль має бути мінімум 8 символів',
      }
    ),
  newPassword: z.string().refine(
    (value) => {
      if (!value) return true;
      return passwordPattern.test(value);
    },
    {
      message: 'Пароль має бути мінімум 8 символів',
    }
  ),
  repeatPassword: z
    .string()
    .refine(
      (value) => !value || passwordPattern.test(value),
      {
        message: 'Пароль має бути мінімум 8 символів',
      }
    ),
});
