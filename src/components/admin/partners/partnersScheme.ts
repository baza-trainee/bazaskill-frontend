import { z } from 'zod';

export const partnersScheme = z.object({
  name: z.string(),
  logo: z.any(),
});
