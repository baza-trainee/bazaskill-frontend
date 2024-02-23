import { z } from 'zod';

const emailPattern =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerScheme = z.object({
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

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове')
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

  country: z.string(),

  specialist: z.string().nonempty('Це поле обовʼязкове'),
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
  message: z
    .string()
    .max(
      300,
      'Максимальна довжина повідомлення - 300 символів'
    ),
});
