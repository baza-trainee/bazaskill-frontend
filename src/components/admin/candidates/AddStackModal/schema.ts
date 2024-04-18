import { z } from 'zod';

const schema = z.object({
  specialization_id: z
    .string()
    .min(1, { message: 'Required' }),
  title: z.string().min(1, { message: 'Required' }),
});
export default schema;
