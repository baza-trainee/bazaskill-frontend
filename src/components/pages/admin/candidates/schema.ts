import { z } from 'zod';

import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'for-url'
];

const ACCEPTED_CERTIFICATE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf',
  'for-url'
];

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*[ЁёЫыЭэЪъ])[\w\s`’'!"#$№%&()*+,\-–—./:;<=>?@[\\\]^{|}~А-Яа-яІіЇїЄєҐґ]+$/;

const emailSchema = z.string().refine(
  (value) => {
    if (!value) return true; // Allow empty values
    return /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(value); // Check for valid email format
  },
  {
    message: 'Invalid email'
  }
);

const messageMaxLength = 2500;
const schema = z.object({
  name_ua: z.string().min(1, { message: 'Required' }),
  surname_ua: z.string().min(1, { message: 'Required' }),
  name: z.string().min(1, { message: 'Required' }),
  surname: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  phone: z.string().optional(),
  email: emailSchema.optional(),
  linkedin: z.string().optional(),
  discord: z.string().optional(),
  telegram: z.string().optional(),
  languages: z.array(
    z.object({
      language: z.string().min(1, { message: 'Required' }),
      level: z.string().min(1, { message: 'Required' })
    })
  ),
  work_format: z.string().min(1, { message: 'Required' }),
  salary_from: z.string().min(1, { message: 'Required' }),
  salary_to: z.string().min(1, { message: 'Required' }),

  about: z.string().optional(),
  specialization: z.string().min(1, { message: 'Required' }),

  cv: z
    .any()
    .nullable()
    .refine((value) => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => !value || value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => !value || ACCEPTED_CV_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf або .docx'
    ),

  graduate: z.array(
    z.object({
      university: z.string().optional(),
      university_specializaton: z.string().optional(),
      university_grade: z.string().optional(),
      graduate_start: z.string().optional(),
      graduate_end: z.string().optional(),
      graduate_sertificate: z
        .any()
        .nullable()
        .refine((value) => {
          value && value[0]?.size === 0 && value[0]?.type === 'for-url';
          return true;
        })
        .refine(
          (value) => !value || value?.[0]?.size <= MAX_FILE_SIZE,
          `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
        )
        .refine(
          (value) =>
            !value || ACCEPTED_CERTIFICATE_TYPES.includes(value?.[0]?.type),
          'Сертифікат має бути в форматі .pdf, .png, .jpg або .webp'
        )
    })
  ),
  cources: z.array(
    z.object({
      cources_name: z.string().optional(),
      cources_specializaton: z.string().optional(),
      cources_start: z.string().optional(),
      cources_end: z.string().optional(),
      cources_sertificate: z
        .any()
        .nullable()
        .refine((value) => {
          value && value[0]?.size === 0 && value[0]?.type === 'for-url';
          return true;
        })
        .refine(
          (value) => !value || value?.[0]?.size <= MAX_FILE_SIZE,
          `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
        )
        .refine(
          (value) =>
            !value || ACCEPTED_CERTIFICATE_TYPES.includes(value?.[0]?.type),
          'Сертифікат має бути в форматі .pdf, .png, .jpg або .webp'
        )
    })
  ),
  baza_experience: z.array(
    z.object({
      role: z.string().min(1, { message: 'Required' }),
      project_name: z.string().min(1, { message: 'Required' }),
      project_duration: z.string().min(1, { message: 'Required' })
    })
  ),
  baza_recomendation: z
    .string()
    .nonempty({
      message: 'Поле не повинно бути пустим'
    })
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(value) &&
        value.length <= messageMaxLength,
      {
        message: `Введіть коректні рекомендації не більше 2500 символів`
      }
    ),
  status: z.string().min(1, { message: 'Required' })
});

export default schema;
