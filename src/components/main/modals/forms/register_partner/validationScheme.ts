import { z } from 'zod';

export const registerScheme = z.object({
  name: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  link: z
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

  email: z.string().nonempty('Це поле обовʼязкове').email({
    message: 'Неправильний формат Email',
  }),

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

  position: z
    .string()
    .nonempty('Це поле обовʼязкове')
    .refine(
      (value) => /^[a-zA-Zа-яА-Я-їЇ-іІ-ґҐʼ']+$/.test(value),
      {
        message:
          'Тільки букви (без пробілів та спеціальних символів)',
      }
    ),

  company: z.string(),

  country: z.string(),

  speciality: z.string(),

  message: z.string(),
});
