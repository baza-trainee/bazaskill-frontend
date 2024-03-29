import { z, ZodType } from 'zod';

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
  cv: z
    .any()
    .refine((value) => value?.length > 0, {
      message: 'Required',
    })
    .refine(
      (value) => value?.[0]?.size <= 500000,
      `Max file size is 5MB.`
    ),
  graduate: z.array(
    z.object({
      universiry: z
        .string()
        .min(1, { message: 'Required' }),
      universiry_specializaton: z
        .string()
        .min(1, { message: 'Required' }),
      universiry_grade: z
        .string()
        .min(1, { message: 'Required' }),
      graduate_start: z
        .string()
        .min(1, { message: 'Required' }),
      graduate_end: z
        .string()
        .min(1, { message: 'Required' }),
      graduate_sertificate: z
        .any()
        .refine((value) => value?.length > 0, {
          message: 'Required',
        })
        .refine(
          (value) => value?.[0]?.size <= 500000,
          `Max file size is 5MB.`
        ),
    })
  ),
});

export default schema;
