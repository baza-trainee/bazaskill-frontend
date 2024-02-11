import { z } from 'zod';
import isURL from 'validator/lib/isURL';

const emailPattern =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerScheme = z.object({
  name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  link: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => isURL(value, { require_protocol: true }),
      {
        message:
          'Будь ласка, введіть дійсний URL сайту компанії',
      }
    ),

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .min(9, 'Номер телефону має містити мінімум 9 символів')
    .max(
      13,
      'Номер телефону має містити максимум 13 символів'
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

  position: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),
  agreement: z
    .boolean()
    .optional()
    .refine(
      (value) => value === undefined || value === true,
      {
        message:
          'Надайте згоду на обробку персональних даних',
      }
    ),

  company: z.string(),

  country: z.string(),

  speciality: z.string().nonempty('Це поле обовʼязкове'),

  message: z
    .string()
    .max(
      300,
      'Максимальна довжина повідомлення - 300 символів'
    ),
});
