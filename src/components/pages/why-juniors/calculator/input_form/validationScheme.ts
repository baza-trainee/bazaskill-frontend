import { z } from 'zod';

export const formSchema = z.object({
  salary: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом'),
  profit: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом'),
  educationCost: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом'),
  menthorShipTime: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом'),
  middleSalary: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом'),
  profitLoss: z
    .string()
    .min(1, "Це поле є обов'язковим")
    .regex(/^\d+$/, 'Значення має бути цілим числом')
});

export type FormValues = z.infer<typeof formSchema>;

export const initialValues: FormValues = {
  salary: '',
  profit: '',
  educationCost: '',
  menthorShipTime: '',
  middleSalary: '',
  profitLoss: ''
};
