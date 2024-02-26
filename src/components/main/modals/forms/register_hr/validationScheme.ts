import { z } from 'zod';

const emailPattern =
  /^(?!^\.)[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+@(?!.*\.)[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+\.[a-zA-Z]{2,}$/;

export const registerScheme = z.object({
  first_name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(50, 'Ім’я повинно бути не більше 50 знаків”')
    .refine(
      (value) =>
        /^(?!^\s+$)[a-zA-Zа-яА-ЯҐґЄєІіЇїąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s`’-]+$/.test(
          value
        ),
      {
        message: 'Введіть коректне ім’я',
      }
    ),

  last_name: z
    .string()
    .nonempty('Введіть прізвище')
    .min(2, 'Прізвище повинно мати не менше 2 знаків')
    .max(50, 'Прізвище повинно бути не більше 50 знаків”')
    .refine(
      (value) =>
        /^(?!^\s+$)[a-zA-Zа-яА-ЯҐґЄєІіЇїąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s`’-]+$/.test(
          value
        ),
      {
        message: 'Введіть коректне прізвище',
      }
    ),

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^\+(?:[0-9] ?){6,14}[0-9]$/.test(value),
      {
        message:
          'Введіть коректний номер телефону в міжнародному форматі',
      }
    ),

  email: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .regex(emailPattern, {
      message: 'Введіть коректний email',
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
    .nonempty({ message: 'Це поле обовʼязкове' })
    .max(300, { message: 'Не більше 300 символів' }),
});
