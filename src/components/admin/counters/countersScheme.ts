import { z } from 'zod';

const countersPattern = /^(?:\+|\d){0,10}$/;

export const countersScheme = z.object({
  live_projects: z
    .string()
    .refine(
      (value) => !value || countersPattern.test(value),
      {
        message: 'Введіть тільки цифри і знак "+"',
      }
    ),
  participants: z
    .string()
    .refine(
      (value) => !value || countersPattern.test(value),
      {
        message: 'Введіть тільки цифри і знак "+"',
      }
    ),
  employed: z
    .string()
    .refine(
      (value) => !value || countersPattern.test(value),
      {
        message: 'Введіть тільки цифри і знак "+"',
      }
    ),
  technologies: z
    .string()
    .refine(
      (value) => !value || countersPattern.test(value),
      {
        message: 'Введіть тільки цифри і знак "+"',
      }
    ),
  libraries: z
    .string()
    .refine(
      (value) => !value || countersPattern.test(value),
      {
        message: 'Введіть тільки цифри і знак "+"',
      }
    ),
});
