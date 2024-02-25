import { z } from 'zod';
import isURL from 'validator/lib/isURL';

const emailPattern =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerScheme = z.object({
  name: z
    .string()
    .nonempty('Це поле обовʼязкове для заповнення'),

  link: z
    .string()
    .nonempty('Це поле обовʼязкове для заповнення')
    .refine(
      (value) => isURL(value, { require_protocol: true }),
      {
        message:
          'Будь ласка, введіть дійсний URL сайту компанії',
      }
    ),

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове для заповнення')
    .min(9, 'Номер телефону має містити мінімум 9 символів')
    .max(
      13,
      'Номер телефону має містити максимум 13 символів'
    )
    .refine((value) => /^\+\d{9,13}$/.test(value), {
      message:
        'Некоректно введений номер телефону, повинен почнатися з +',
    }),

  email: z
    .string()
    .nonempty('Це поле обовʼязкове для заповнення')
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
    .nonempty('Це поле обовʼязкове для заповнення')
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(30, 'Ім’я має містити максимум 30 символів')
    .refine(
      (value) =>
        /^[a-zA-Zа-яА-ЯҐґЄєІіЇїąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s.-]+$/.test(
          value
        ),
      {
        message: 'Введіть коректне ім’я',
      }
    ),

  last_name: z
    .string()
    .nonempty('Це поле обовʼязкове для заповнення')
    .min(2, 'Прізвище має містити мінімум 2 символи')
    .max(30, 'Прізвище має містити максимум 30 символів')
    .refine(
      (value) =>
        /^[a-zA-Zа-яА-ЯҐґЄєІіЇїąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s.-]+$/.test(
          value
        ),
      {
        message: 'Введіть коректне прізвище',
      }
    ),

  position: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) =>
        /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ\s']+$/u.test(value),
      {
        message:
          'Тільки букви та пробіли (без спеціальних символів)',
      }
    ),
  message: z
    .string()
    .nonempty({ message: 'Це поле обовʼязкове' })
    .max(300, { message: 'Не більше 300 символів' })
    .refine(
      (value) =>
        /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ\s']+$/u.test(value),
      {
        message:
          'Тільки букви та пробіли (без спеціальних символів)',
      }
    ),

  terms: z.literal(true, {
    errorMap: () => ({
      message: '',
    }),
  }),
  terms_2: z.literal(true, {
    errorMap: () => ({
      message:
        'Надайте згоду на обробку персональних даних',
    }),
  }),
  specialist: z.string().nonempty('Це поле обовʼязкове'),
});
