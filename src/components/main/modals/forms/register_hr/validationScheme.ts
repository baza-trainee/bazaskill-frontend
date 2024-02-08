import { z } from 'zod';

export const registerScheme = z.object({
  first_name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  last_name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  phone: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .min(9, 'Номер телефону має містити мінімум 9 символів' )
    .max(
      10,
      'Номер телефону має містити максимум 10 символів'
    )
    .refine((value) => /^\+\d{9,10}$/.test(value), {
      message: 'Некоректно введений номер телефону, повинен почнатися з +',
    }),

  email: z.string().nonempty('Це поле обовʼязкове').email({
    message: 'Неправильний формат Email',
  }),

  company: z.string(),

  country: z.string(),

  specialist: z.string(),

  message: z.string(),
});
