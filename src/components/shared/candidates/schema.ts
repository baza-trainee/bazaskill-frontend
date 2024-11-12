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
      to: z.string()
    })
    .refine(
      ({ from, to }) => {
        if (from !== '' && to !== '') {
          return Number.parseInt(from) < Number.parseInt(to);
        }
        return true;
      },
      {
        message: 'salary_error.diff'
      }
    )
    .refine(
      ({ from, to }) => {
        if (from !== '' && to !== '') {
          return true;
        }
        return false;
      },
      {
        message: 'salary_error.both_fields'
      }
    )
    .refine(
      ({ from, to }) => {
        const fromNum = Number.parseInt(from);
        const toNum = Number.parseInt(to);
        return (from === '' || fromNum >= 0) && (to === '' || toNum >= 0);
      },
      {
        message: 'salary_error.not_negative'
      }
    )
});

export default schema;
