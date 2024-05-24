import { z } from 'zod';

const schema = z.object({
  specialization_id: z
    .string()
    .min(1, { message: 'Required' }),
  title: z
    .string()
    .min(1, { message: 'Required' })
    .refine(
      (value) => /^[a-zA-Z\s\d-.,\\/|()@&]+$/.test(value),
      {
        message: 'Введіть коректну назву спеціалізації',
      }
    ),
});
export default schema;
