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
      from: z
        .string()
        .min(1, { message: 'Required' })
        .max(5),
      to: z.string().min(1, { message: 'Required' }).max(5),
    })
    .refine(
      ({ from, to }) => {
        return parseInt(from) < parseInt(to);
      },
      {
        message:
          'Значення Від не повинно бути більшим ніж значення До',
      }
    ),
});

export default schema;
