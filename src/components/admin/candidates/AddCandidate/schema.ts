import { formatBytes } from '@/helpers/formatBytes';
import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const ACCEPTED_CV_TYPES = ['application/pdf', 'for-url'];

const ACCEPTED_CERTIFICATE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf',
  'for-url',
];

const emailPattern =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

const nonRussianLettersPattern =
  /^(?!.*\s{2,}|.*[.-]{2,})(?!.*[ЁёЫыЭэЪъ])[A-Za-zА-Яа-яІіЇїЄєҐґ\s`’'-]+$/;

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*[ЁёЫыЭэЪъ])[\w\s`’'!"#$№%&()*+,\-–—./:;<=>?@[\\\]^_`{|}~A-Za-zА-Яа-яІіЇїЄєҐґ.]+$/;

const messageMaxLength = 2500;
const schema = z.object({
  name_ua: z.string().min(1, { message: 'Required' }),
  surname_ua: z.string().min(1, { message: 'Required' }),
  name: z.string().min(1, { message: 'Required' }),
  surname: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  phone: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  linkedin: z.string().min(1, { message: 'Required' }),
  discord: z.string().min(1, { message: 'Required' }),
  telegram: z.string().min(1, { message: 'Required' }),
  languages: z.array(
    z.object({
      language: z.string().min(1, { message: 'Required' }),
      level: z.string().min(1, { message: 'Required' }),
    })
  ),
  work_format: z.string().min(1, { message: 'Required' }),
  salary_from: z.string().min(1, { message: 'Required' }),
  salary_to: z.string().min(1, { message: 'Required' }),

  about: z.string().min(1, { message: 'Required' }),
  specialization: z
    .string()
    .min(1, { message: 'Required' }),

  cv: z
    .any()
    .refine((value) => value?.length > 0, {
      message: 'Required',
    })
    .refine((value) => {
      value &&
        value[0]?.size === 0 &&
        value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) =>
        ACCEPTED_CV_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf'
    ),

  graduate: z.array(
    z.object({
      university: z
        .string()
        .min(1, { message: 'Required' }),
      university_specializaton: z
        .string()
        .min(1, { message: 'Required' }),
      university_grade: z.string(),
      graduate_start: z
        .string()
        .min(1, { message: 'Required' }),
      graduate_end: z
        .string()
        .min(1, { message: 'Required' }),
      graduate_sertificate: z
        .any()
        .nullable()
        .refine((value) => {
          value &&
            value[0]?.size === 0 &&
            value[0]?.type === 'for-url';
          return true;
        })
        .refine(
          (value) =>
            !value || value?.[0]?.size <= MAX_FILE_SIZE,
          `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
        )
        .refine(
          (value) =>
            !value ||
            ACCEPTED_CERTIFICATE_TYPES.includes(
              value?.[0]?.type
            ),
          'Сертифікат має бути в форматі .pdf, .png, .jpg або .webp'
        ),
    })
  ),
  cources: z.array(
    z.object({
      cources_name: z
        .string()
        .min(1, { message: 'Required' }),
      cources_specializaton: z
        .string()
        .min(1, { message: 'Required' }),
      cources_start: z
        .string()
        .min(1, { message: 'Required' }),
      cources_end: z
        .string()
        .min(1, { message: 'Required' }),
      cources_sertificate: z
        .any()
        .nullable()
        .refine((value) => {
          value &&
            value[0]?.size === 0 &&
            value[0]?.type === 'for-url';
          return true;
        })
        .refine(
          (value) =>
            !value || value?.[0]?.size <= MAX_FILE_SIZE,
          `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
        )
        .refine(
          (value) =>
            !value ||
            ACCEPTED_CERTIFICATE_TYPES.includes(
              value?.[0]?.type
            ),
          'Сертифікат має бути в форматі .pdf, .png, .jpg або .webp'
        ),
    })
  ),
  baza_experience: z.array(
    z.object({
      role: z.string().min(1, { message: 'Required' }),
      project_name: z
        .string()
        .min(1, { message: 'Required' }),
      project_duration: z
        .string()
        .min(1, { message: 'Required' }),
    })
  ),
  baza_recomendation: z
    .string()
    .nonempty({
      message: 'Поле не повинно бути пустим',
    })
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(
          value
        ) && value.length <= messageMaxLength,
      {
        message: `Введіть коректні рекомендації не більше 2500 символів`,
      }
    ),
  status: z.string().min(1, { message: 'Required' }),
});

export default schema;
