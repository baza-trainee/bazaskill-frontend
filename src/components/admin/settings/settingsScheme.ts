import { z } from 'zod';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordPattern = /^(.{8,})$/;

export const settingsScheme = z.object({
  email: z
    .string()
    .email({ message: 'Введіть дійсний email' })
    .refine((value) => !value || emailPattern.test(value), {
      message: 'Введіть дійсний email',
    })
    .refine(
      (value) =>
        !value || !/(.ru|.by)$/.test(value.split('@')[1]),
      {
        message: 'Домени .ru і .by не допускаються',
      }
    ),
  password: z
    .string()
    .refine(
      (value) => !value || passwordPattern.test(value),
      {
        message: 'Пароль має бути мінімум 8 символів',
      }
    ),
});
