import { z } from 'zod';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024;

export const testimonialValidation = z.object({
  name_ua: z.string(),
  name_en: z.string(),
  name_pl: z.string(),
  date: z.string() /* .refine(
    (value) => {
      const parts = value
        .split('.')
        .map((part) => part.trim());
      if (parts.length !== 3) return false; // Перевірка на наявність трьох частин дати
      const [day, month, year] = parts;
      if (
        !/^\d{1,2}$/.test(day) ||
        !/^\d{1,2}$/.test(month) ||
        !/^\d{4}$/.test(year)
      )
        return false; // Перевірка формату чисел
      const numericDay = parseInt(day, 10);
      const numericMonth = parseInt(month, 10);
      const numericYear = parseInt(year, 10);
      if (
        numericDay < 1 ||
        numericDay > 31 ||
        numericMonth < 1 ||
        numericMonth > 12
      )
        return false; // Перевірка коректності числових значень
      const date = new Date(
        numericYear,
        numericMonth - 1,
        numericDay
      ); // Місяці у JavaScript починаються з 0
      if (isNaN(date.getTime())) return false; // Перевірка на існування дати
      return true;
    } ,
    {
      message:
        "Неправильний формат дати. Використовуйте формат 'DD, MM, YYYY'",
    }
  ),*/,
  position: z.string(),
  /*   image: z.any().refine(
    (value) => {
      const file = value?.[0];
      return (
        file?.size <= MAX_FILE_SIZE &&
        /\.(jpg|jpeg)$/i.test(file?.name)
      );
    },

    {
      message: `Документ має бути зображенням у форматі JPEG або JPG та не перевищувати розмір ${formatBytes(MAX_FILE_SIZE)}`,
    }
  ), */
  review_ua: z.string(),
  review_en: z.string(),
  review_pl: z.string(),
  image_url: z.string(),
  file:z.any(),
});
