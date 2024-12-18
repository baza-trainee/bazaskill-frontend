import { z } from 'zod';

const passwordPattern = /^(?!.*\\)[\w!\-.(),]{8,14}$/;

export const settingsScheme = z
  .object({
    oldPassword: z
      .string()
      .min(8, {
        message: 'Пароль має містити мінімум 8 символів'
      })
      .max(14, {
        message: 'Пароль має містити максимум 14 символів'
      })
      .refine((value) => passwordPattern.test(value), {
        message: 'Введіть дійсний символ'
      }),
    newPassword: z
      .string()
      .min(8, {
        message: 'Пароль має містити мінімум 8 символів'
      })
      .max(14, {
        message: 'Пароль має містити максимум 14 символів'
      })
      .refine((value) => passwordPattern.test(value), {
        message: 'Введіть дійсний символ'
      }),
    repeatPassword: z
      .string()
      .min(8, {
        message: 'Пароль має містити мінімум 8 символів'
      })
      .max(14, {
        message: 'Пароль має містити максимум 14 символів'
      })
      .refine((value) => passwordPattern.test(value), {
        message: 'Введіть дійсний символ'
      })
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: 'Новий пароль не співпадає',
    path: ['repeatPassword']
  });
