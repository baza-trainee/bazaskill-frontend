import { z } from 'zod';

const schema = z.object({
  stack: z.string().array(),
  projects: z.string().array(),
  occupation: z.string().array(),
  language: z.string().array(),
  graduate: z.string().array(),
  status: z.string().array(),
  sallary: z
    .object({
      from: z.string(),
      to: z.string(),
    })
    .refine(
      ({ from, to }) => {
        if (from !== '' && to !== '') {
          return Number.parseInt(from) < Number.parseInt(to);
        }
        return true;
      },
      {
        message:
          'Значення Від не повинно бути більшим ніж значення До',
      },
    ),
});

export default schema;
