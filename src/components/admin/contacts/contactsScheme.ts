import { z } from 'zod';

const phonePattern = /^\+380 \d{2} \d{3} \d{4}$/;

const emailPattern
  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

export const contactsScheme = z.object({
  phone: z
    .string()
    .refine(value => !value || phonePattern.test(value), {
      message:
        'Введіть коректний номер телефону в міжнародному форматі',
    }),
  secondPhone: z
    .string()
    .refine(value => !value || phonePattern.test(value), {
      message:
        'Введіть коректний номер телефону в міжнародному форматі',
    }),
  email: z
    .string()
    .refine(value => !value || emailPattern.test(value), {
      message: 'Введіть дійсний email',
    })
    .refine(
      value =>
        !value || !/(.ru|.by)$/.test(value.split('@')[1]),
      {
        message: 'Домени .ru і .by не допускаються',
      },
    ),
  telegram: z
    .string()
    .refine(
      value =>
        !value
        || /^(https?:\/\/)?(www\.)?t\.me\/(?:joinchat\/[\w-]+|\+[\w-]+|\w{5,32})$/.test(
          value,
        ),
      {
        message: 'Введіть дійсний URL Telegram',
      },
    ),
  linkedin: z
    .string()
    .refine(
      value =>
        !value
        || /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/(in|pub|company|public-profile)\/[a-zA-Z0-9-]{3,100}(\/)?(\?.*)?\/?$/.test(
          value,
        ),
      {
        message: 'Введіть дійсний URL LinkedIn',
      },
    ),
  facebook: z
    .string()
    .refine(
      value =>
        !value
        || /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9./-]{5,}(\?.*)?$/.test(
          value,
        ),
      {
        message: 'Введіть дійсний URL Facebook',
      },
    ),
  discord: z.string(),
  instagram: z
    .string()
    .refine(
      value =>
        !value
        || /^(https?:\/\/)?(www\.)?instagram\.com\/[\w.]{1,30}\/?$/.test(
          value,
        ),
      {
        message: 'Введіть дійсний URL Instagram',
      },
    ),
});
