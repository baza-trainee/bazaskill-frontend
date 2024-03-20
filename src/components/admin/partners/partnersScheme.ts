import { z } from 'zod';

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;

export const partnersScheme = z.object({
  name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Назва повинна мати не менше 2 знаків')
    .max(30, 'Назва повинно бути не більше 30 знаків')
    .refine(
      (value) => nonRussianLettersPattern.test(value),
      { message: 'Введіть коректне ім’я' }
    ),
  logo: z.any(),
  partner_url: z
    .string()
    .refine(
      (value) =>
        !value ||
        /^(https?:\/\/)?(www\.)?((?!.*\.ru)[\w-]+\.[a-z]{2,})(:\d{1,5})?(\/.*)?$/i.test(
          value
        ),
      {
        message:
          'Введіть дійсний URL, який не містить домен .ru',
      }
    ),
});
