import { z } from 'zod';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordPattern =
  /^(?!.*[!_\-)\\(.,])[\w\-\\(\\).,]{8,14}$/;

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
    .min(8, {
      message: 'Пароль має містити мінімум 8 символів',
    })
    .max(14, {
      message: 'Пароль має містити максимум 14 символів',
    })
    .refine((value) => passwordPattern.test(value), {
      message: 'Введіть дійсний символ',
    }),
});
