import { nonRussianLettersPattern } from '@/constants/regex';
import { z } from 'zod';


export const storyScheme = z.object({
  name_ua: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я має мати не менше 2 знаків')
    .max(30, 'Ім’я має бути не більше 30 знаків')
    .refine(
      value => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' },
    ),

  name_en: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я має мати не менше 2 знаків')
    .max(30, 'Ім’я має бути не більше 30 знаків')
    .refine(
      value => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' },
    ),

  name_pl: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Ім’я має мати не менше 2 знаків')
    .max(30, 'Ім’я має бути не більше 30 знаків')
    .refine(
      value => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' },
    ),

  text_ua: z
    .string()
    .min(10, {
      message: 'Мінімальна довжина тексту - 10 символів',
    })
    .max(300, {
      message:
        'Просимо скоротити текст до 500 знаків',
    }),

  text_en: z
    .string()
    .min(10, {
      message: 'Мінімальна довжина тексту - 10 символів',
    })
    .max(300, {
      message:
        'Просимо скоротити текст до 500 знаків',
    }),

  text_pl: z
    .string()
    .min(10, {
      message: 'Мінімальна довжина тексту - 10 символів',
    })
    .max(300, {
      message:
        'Просимо скоротити текст до 500 знаків',
    }),

  role: z
    .string()
    .nonempty('Поле має бути заповнене')
    .min(2, 'Найменування ролі має мати не менше 2 знаків')
    .max(
      30,
      'Найменування ролі має бути не більше 30 знаків',
    )
    .refine(
      value => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне найменування ролі' },
    ),

  speciality: z
    .string()
    .nonempty('Поле має бути заповнене')
    .min(2, 'Назва спеціальності має мати не менше 2 знаків')
    .max(
      30,
      'Назва спеціальності має бути не більше 30 знаків',
    )
    .refine(
      value => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректну спеціальність' },
    ),

  image: z
    .any()
});

export type TStoryScheme = z.infer<typeof storyScheme>;
