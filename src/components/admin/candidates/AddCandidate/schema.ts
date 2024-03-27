import { z } from 'zod';

const schema = z.object({
  name_ua: z.string().min(1),
  surname_ua: z.string().min(1),
  country: z.string().min(1),
});

export default schema;
