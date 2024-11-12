import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES } from '@/constants/regex';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024 * 3;

export const cardValidation = z.object({
  name: z
    .string()
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків')
    .refine((value) => typeof value === 'string', {
      message: 'Введіть коректне ім’я'
    }),
  specialization: z.string().min(1, { message: 'Required' }),
  image: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте зображення')
    .refine((value) => {
      value && value?.[0]?.size === 0 && value?.[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Оберіть фото в форматі .jpg, .jpeg, .png або .webp.'
    )
});

export type TCardScheme = z.infer<typeof cardValidation>;
