import { z } from 'zod';

const schema = z.object({
  specialization_id: z
    .string()
    .min(1, { message: 'Required' }),
  title: z
    .string()
    .min(1, { message: 'Required' })
    .refine(
      value => /^[a-z\s\d.,\\/|()@&-]+$/i.test(value),
      {
        message: 'Введіть коректну назву спеціалізації',
      },
    ),
});
export default schema;
