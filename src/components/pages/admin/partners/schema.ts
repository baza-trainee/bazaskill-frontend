import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, linkValidation, nonRussianLettersPattern } from '@/constants/regex';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_IMAGE_SIZE = 1024 * 1024 * 2;

export const partnersScheme = z.object({
  name: z
    .string()
    .nonempty('Введіть ім’я')
    .min(2, 'Назва повинна мати не менше 2 знаків')
    .max(30, 'Назва повинно бути не більше 30 знаків')
    .refine((value) => nonRussianLettersPattern.test(value), {
      message: 'Введіть коректне ім’я'
    }),
  logo: z
    .any()
    .refine(
      (value) => {
        if (!value || !value.length) {
          return true;
        }

        const fileSize = value[0]?.size;
        console.log('File Size:', fileSize);

        const maxSizeInBytes = MAX_IMAGE_SIZE;

        if (fileSize && fileSize <= maxSizeInBytes) {
          return true;
        } else {
          return false;
        }
      },
      `Максимальний розмір файлу ${formatBytes(MAX_IMAGE_SIZE)}`
    )
    .refine((value) => {
      if (!value || !value.length) {
        return true;
      }

      const fileType = value[0]?.type;
      console.log('File Type:', fileType);

      if (fileType && ACCEPTED_IMAGE_TYPES.includes(fileType)) {
        return true;
      } else {
        return false;
      }
    }, 'Невалідний формат зображення'),
  partner_url: z
    .string()
    .min(2, 'Ви не заповнили всі дані.')
    .refine((value) => linkValidation.test(value), {
      message: 'Введіть дійсний URL'
    })
});
