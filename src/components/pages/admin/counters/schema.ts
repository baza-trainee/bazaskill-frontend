import { z } from 'zod';

const countersPattern = /^\d{0,10}$/;

export const countersScheme = z.object({
  liveProject: z.string().refine((value) => !value || countersPattern.test(value), {
    message: 'Введіть тільки цифри'
  }),
  members: z.string().refine((value) => !value || countersPattern.test(value), {
    message: 'Введіть тільки цифри'
  }),
  employed: z.string().refine((value) => !value || countersPattern.test(value), {
    message: 'Введіть тільки цифри'
  }),
  technologies: z.string().refine((value) => !value || countersPattern.test(value), {
    message: 'Введіть тільки цифри'
  }),
  libraries: z.string().refine((value) => !value || countersPattern.test(value), {
    message: 'Введіть тільки цифри"'
  })
});
