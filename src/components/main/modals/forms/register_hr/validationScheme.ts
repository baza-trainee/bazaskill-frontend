import { z } from 'zod';

const emailPattern =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*(?:\.{4,}|.*[ЁёЫыЭэЪъ]))[\w\s`’'!"#$№%&()*+,\-./:;<=>?@[\\\]^_`{|}~A-Za-zА-Яа-яІіЇїЄєҐґ.]+$/;

const messageMaxLength = 300;

export const registerScheme = z.object({
  first_name: z
    .string()
    .nonempty('Main.forms.errors.firstname_empty')
    .min(2, 'Main.forms.errors.firstname_min')
    .max(30, 'Main.forms.errors.firstname_max')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Main.forms.errors.incorrect_firstname' }
    ),

  last_name: z
    .string()
    .nonempty('Main.forms.errors.lastname_empty')
    .min(2, 'Main.forms.errors.lastname_min')
    .max(50, 'Main.forms.errors.lastname_max')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      {
        message: 'Main.forms.errors.incorrect_lastname',
      }
    ),

  phone: z
    .string()
    .nonempty('Main.forms.errors.required_field')
    .max(13, 'Main.forms.errors.phone_max')
    .refine(
      (value) => /^\+(?:[0-9] ?){10,}[0-9]$/.test(value),
      {
        message: 'Main.forms.errors.incorrect_phone',
      }
    ),

  email: z
    .string()
    .nonempty('Main.forms.errors.required_field')
    .regex(emailPattern, {
      message: 'Main.forms.errors.incorrect_email',
    })
    .refine(
      (value) => !/(.ru|.by)$/.test(value.split('@')[1]),
      {
        message: 'Main.forms.errors.invalid_ru',
      }
    ),

  company: z
    .string()
    .min(2, 'Main.forms.errors.company_min')
    .max(50, 'Main.forms.errors.company_max')
    .refine(
      (value: string) =>
        !value || nonRussianLettersPattern.test(value),
      {
        message: 'Main.forms.errors.company',
      }
    )
    .optional(),

  country: z.string(),

  specialization: z
    .string()
    .nonempty('Main.forms.errors.required_field'),

  terms: z.literal(true, {
    errorMap: () => ({
      message: 'Main.forms.errors.agreement',
    }),
  }),

  terms_2: z.literal(true, {
    errorMap: () => ({
      message: 'Main.forms.errors.agreement',
    }),
  }),

  message: z
    .string()
    .nonempty({
      message: 'Main.forms.errors.required_field',
    })
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(
          value
        ) && value.length <= messageMaxLength,
      {
        message: `Main.forms.errors.comment`,
      }
    ),
});
