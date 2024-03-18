import { z } from 'zod';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024 * 2;

const ACCEPTED_FILE_TYPES = ['application/pdf', 'for-url'];

export const documentsScheme = z.object({
  privacy_policy: z
    .any()
    .refine(
      (value) => {
        if (!value || !value.length) {
          return true;
        } else {
          return value[0]?.size <= MAX_FILE_SIZE;
        }
      },
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine((value) => {
      if (!value || !value.length) {
        return true;
      } else {
        return ACCEPTED_FILE_TYPES.includes(
          value?.[0]?.type
        );
      }
    }, 'Документ має бути в форматі .pdf'),

  terms_of_use: z
    .any()
    .refine(
      (value) => {
        if (!value || !value.length) {
          return true;
        } else {
          return value[0]?.size <= MAX_FILE_SIZE;
        }
      },
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine((value) => {
      if (!value || !value.length) {
        return true;
      } else {
        return ACCEPTED_FILE_TYPES.includes(
          value?.[0]?.type
        );
      }
    }, 'Документ має бути в форматі .pdf'),
});
