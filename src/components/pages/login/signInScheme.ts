import { z } from 'zod';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

const passwordPattern = /^(?!.*\\)[\w!@#$&*()\-.,]{8,14}$/;

export const signInScheme = z.object({
  email: z
    .string()
    .nonempty({
      message: 'Поле email не може бути порожнім'
    })
    .email({ message: 'Введіть дійсний email' })
    .refine((value) => !value || emailPattern.test(value), {
      message: 'Введіть дійсний email'
    })
    .refine((value) => !value || !/(.ru|.by)$/.test(value.split('@')[1]), {
      message: 'Домени .ru і .by не допускаються'
    }),
  password: z
    .string()
    .nonempty({
      message: 'Поле пароль не може бути порожнім'
    })
    .min(8, {
      message: 'Пароль має містити мінімум 8 символів'
    })
    .max(14, {
      message: 'Пароль має містити максимум 14 символів'
    })
    .refine((value) => passwordPattern.test(value), {
      message: 'Введіть дійсний символ'
    }),
  rememberMe: z.any()
});

export const emailScheme = z.object({
  email: z
    .string()
    .nonempty({
      message: 'Поле email не може бути порожнім'
    })
    .email({ message: 'Введіть дійсний email' })
    .refine((value) => !value || emailPattern.test(value), {
      message: 'Введіть дійсний email'
    })
    .refine((value) => !value || !/(.ru|.by)$/.test(value.split('@')[1]), {
      message: 'Домени .ru і .by не допускаються'
    })
});

export const passwordScheme = z
  .object({
    password: z
      .string()
      .nonempty({
        message: 'Поле новий пароль не може бути порожнім'
      })
      .min(8, {
        message: 'Пароль має містити мінімум 8 символів'
      })
      .max(14, {
        message: 'Пароль має містити максимум 14 символів'
      })
      .refine((value) => passwordPattern.test(value), {
        message: 'Введіть дійсний символ'
      }),
    passwordAccept: z
      .string()
      .nonempty({
        message: 'Поле підтвердіть пароль не може бути порожнім'
      })
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
  .refine((data) => data.password === data.passwordAccept, {
    message: 'Новий пароль не співпадає',
    path: ['passwordAccept']
  });
