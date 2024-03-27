import { z } from 'zod';

const schema = z.object({
  name_ua: z.string().min(1, { message: 'Required' }),
  surname_ua: z.string().min(1, { message: 'Required' }),
  name: z.string().min(1, { message: 'Required' }),
  surname: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  phone: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  linkedin: z.string().min(1, { message: 'Required' }),
  discord: z.string().min(1, { message: 'Required' }),
  telegram: z.string().min(1, { message: 'Required' }),
});

export default schema;
