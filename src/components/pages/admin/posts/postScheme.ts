import { z } from 'zod';

import { linkValidation } from '@/constants/regex';

export const postScheme = z.object({
  title: z
    .string()
    .min(2, 'Назва статті повинна мати не менше 2 знаків')
    .max(30, 'Назва статті повинна бути не більше 30 знаків')
    .refine((value) => typeof value === 'string', {
      message: 'Введіть коректну назву статті'
    }),
  image: z.any(),
  link: z
    .string()
    .min(2, 'Поле не повинно бути пустим')
    .refine((value) => linkValidation.test(value), {
      message: 'Введіть дійсний URL'
    }),
  text: z
    .string()
    .min(2, 'Введіть опис статті')
    .max(350, 'Опис статті повинен бути не більшим ніж 350 знаків')
});

export type TPostScheme = z.infer<typeof postScheme>;
