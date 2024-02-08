import { z } from 'zod';

const emailPattern =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerScheme = z.object({
  first_name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  last_name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .min(9, 'Номер телефону має містити мінімум 9 символів')
    .max(
      10,
      'Номер телефону має містити максимум 10 символів'
    )
    .refine((value) => /^\+\d{9,10}$/.test(value), {
      message:
        'Некоректно введений номер телефону, повинен почнатися з +',
    }),

  email: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .regex(emailPattern, {
      message: 'Введіть дійсний email',
    })
    .refine(
      (value) => !/(.ru|.by)$/.test(value.split('@')[1]),
      {
        message: 'Домени .ru і .by не допускаються',
      }
    ),

  company: z.string(),

  country: z.string().nonempty('Це поле обовʼязкове'),

  speciality: z.string().nonempty('Це поле обовʼязкове'),

  specialist: z.string(),

  message: z
    .string()
    .max(
      300,
      'Максимальна довжина повідомлення - 300 символів'
    ),
});
