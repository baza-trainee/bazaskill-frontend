import { z } from 'zod';
import isURL from 'validator/lib/isURL';

const emailPattern =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[\w\s`’'!"#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~ҐґЄєІіЇїЄєҐґ]+$/;

const messageMaxLength = 300;

export const registerScheme = z.object({
  name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),

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
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),
  country: z.string(),
  last_name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(50, 'Ім’я повинно бути не більше 50 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
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
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(
          value
        ) && value.length <= messageMaxLength,
      {
        message: `Введіть коректний коментар та не більше ${messageMaxLength} символів`,
      }
    ),

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
  specialist: z.string().nonempty('Це поле обовʼязкове'),
});
