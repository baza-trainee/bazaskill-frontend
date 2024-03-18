import { z } from 'zod';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = ['application/pdf', 'for-url'];

export const documentsScheme = z.object({
  privacy_policy: z.any(),
  // .refine(
  //   (value) => value?.[0]?.size <= MAX_FILE_SIZE,
  //   `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
  // )
  // .refine(
  //   (value) =>
  //     ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
  //   'Документ має бути в форматі .pdf'
  // ),
  terms_of_use: z.any(),
  // .refine(
  //   (value) => value?.[0]?.size <= MAX_FILE_SIZE,
  //   `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
  // )
  // .refine(
  //   (value) =>
  //     ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
  //   'Документ має бути в форматі .pdf'
  // ),
});
