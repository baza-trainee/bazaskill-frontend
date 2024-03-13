import { z } from 'zod';

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;
const dateFormat =
  /^(0[1-9]|[12][0-9]|3[01])\s+(січня|лютого|березня|квітня|травня|червня|липня|серпня|вересня|жовтня|листопада|грудня)\s+\d{4}$/i;

export const testimonialValidation = z.object({
  name_ua: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),
  name_en: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),
  name_pl: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),
  position: z
    .string()
    .nonempty('Введіть Спеціальність')
    .min(2, 'Спеціальність повинно мати не менше 2 знаків')
    .max(
      30,
      'Спеціальність повинно бути не більше 30 знаків'
    )
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректну спеціальність' }
    ),
  date: z
    .string()
    .refine((value) => dateFormat.test(value), {
      message:
        'Дата має бути у форматі "день місяць рік", наприклад, "12 березня 2024"',
    }),
  review_ua: z.string().min(10, {
    message: 'Мінімальна довжина відгуку - 10 символів',
  }),
  review_en: z.string().min(10, {
    message: 'Мінімальна довжина відгуку - 10 символів',
  }),
  review_pl: z.string().min(10, {
    message: 'Мінімальна довжина відгуку - 10 символів',
  }),
  file: z.any(),
});
