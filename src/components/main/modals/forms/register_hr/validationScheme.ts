import { z } from 'zod';

const emailPattern =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[\w\s`’'!"#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~ҐґЄєІіЇїЄєҐґ]+$/;

const messageMaxLength = 300;

export const registerScheme = z.object({
  first_name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),

  last_name: z
    .string()
    .nonempty('Введіть прізвище')
    .min(2, 'Прізвище повинно мати не менше 2 знаків')
    .max(50, 'Прізвище повинно бути не більше 50 знаків”')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      {
        message: 'Введіть коректне ім’я',
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

  company: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value || nonRussianLettersPattern.test(value),
      {
        message:
          'Введіть коректну назву або залиште поле порожнім',
      }
    ),

  country: z.string(),

  specialist: z.string().nonempty('Це поле обовʼязкове'),

  terms: z.literal(true, {
    errorMap: () => ({
      message:
        'Надайте згоду на обробку персональних даних',
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
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(
          value
        ) && value.length <= messageMaxLength,
      {
        message: `Введіть коректний коментар та не більше ${messageMaxLength} символів`,
      }
    ),
});
