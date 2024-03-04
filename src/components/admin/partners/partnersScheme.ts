import { z } from 'zod';

export const partnersScheme = z.object({
  name: z
    .string({
      required_error: 'Поле повинно бути заповнене',
    })
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(25, 'Ім’я має містити максимум 25 символів')
    .refine(
      (value) =>
        /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d$&+,=_@#Nº№'<>^*()%'’`.,:;"()!?/+-]+$/.test(
          value
        ),
      {
        message: 'Введіть коректне ім’я',
      }
    ),
  logo: z.string(),
});
