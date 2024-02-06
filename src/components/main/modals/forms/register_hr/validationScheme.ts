import { z } from 'zod';

export const registerScheme = z.object({
  first_name: z.string(),

  last_name: z.string(),

  phone: z
    .string()
    .max(
      17,
      'Номер телефону має містити максимум 17 символів'
    )
    .refine(
      (value) =>
        /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value),
      {
        message: 'Некоректно введений номер телефону',
      }
    ),

  email: z.string(),

  company: z.string(),

  country: z.string(),

  speciality: z.string(),

  message: z.string(),
});
