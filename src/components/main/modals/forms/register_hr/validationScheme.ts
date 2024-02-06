import { z } from 'zod';

export const registerScheme = z.object({
  first_name: z.string(),

  last_name: z.string(),

  phone: z
    .string()
    .length(1, 'Поле має бути заповнене')
    .max(
      9,
      'Номер телефону має містити максимум 9 символів'
    )
    .refine((value) => /^^\d{9}$/.test(value), {
      message: 'Некоректно введений номер телефону',
    }),

  email: z.string(),

  company: z.string(),

  country: z.string(),

  occupation: z.string(),
  specialty: z.string(),

  message: z.string(),
});
