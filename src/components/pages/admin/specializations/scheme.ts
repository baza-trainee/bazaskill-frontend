import { z } from 'zod';

export const specializationScheme = z.object({
  title: z
    .string()
    .min(
      2,
      'Назва спеціалізації повинна мати не менше 2 знаків',
    )
    .max(
      30,
      'Назва спеціалізації повинна бути не більше 30 знаків',
    )
    .refine(
      value => /^[a-z\s'’,-:;"()!?]+$/i.test(value),
      {
        message: 'Введіть коректну назву спеціалізації',
      },
    ),
});

export type TSpecializationScheme = z.infer<
  typeof specializationScheme
>;
