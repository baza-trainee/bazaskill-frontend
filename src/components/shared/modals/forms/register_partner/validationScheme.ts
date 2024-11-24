import isURL from 'validator/lib/isURL';
import { z } from 'zod';

const emailPattern =
  /^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,}$/i;

const nonRussianLettersPattern =
  /^(?!.*\s{2}|.*[.-]{2})(?!.*[ЁёЫыЭэЪъ])(?!.*\bscript\b)[A-Za-zА-Яа-яІіЇїЄєҐґąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s`’"'.,-]+$/;

const nonRussianLettersWithSymbolsAndDigitsPattern =
  /^(?!.*[ЁёЫыЭэЪъ])(?!.*\bscript\b)[\w\s`’'!"#$№%&()*+,\-–—./:;=?@[\\\]^{|}~А-Яа-яІіЇїЄєҐґąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;

const messageMaxLength = 300;

export const registerScheme = z.object({
  company_name: z
    .string()
    .nonempty('Main.forms.errors.companyname_empty')
    .min(2, 'Main.forms.errors.companyname_min')
    .max(30, 'Main.forms.errors.companyname_max')
    .refine(
      (value) => nonRussianLettersWithSymbolsAndDigitsPattern.test(value),
      { message: 'Main.forms.errors.incorrect_companyname' }
    ),

  company_url: z
    .string()
    .nonempty('Main.forms.errors.required_field')
    .refine((value) => isURL(value, { require_protocol: true }), {
      message: 'Main.forms.errors.website'
    }),

  phone: z
    .string()
    .nonempty('Main.forms.errors.required_field')
    .max(13, 'Main.forms.errors.phone_max')
    .refine((value) => /^\+(?:\d ?){10,}\d$/.test(value), {
      message: 'Main.forms.errors.incorrect_phone'
    }),

  email: z
    .string()
    .nonempty('Main.forms.errors.required_field')
    .regex(emailPattern, {
      message: 'Main.forms.errors.incorrect_email'
    })
    .refine((value) => !/(.ru|.by)$/.test(value.split('@')[1]), {
      message: 'Main.forms.errors.invalid_ru'
    }),

  first_name: z
    .string()
    .nonempty('Main.forms.errors.firstname_empty')
    .min(2, 'Main.forms.errors.firstname_min')
    .max(30, 'Main.forms.errors.firstname_max')
    .refine((value) => nonRussianLettersPattern.test(value), {
      message: 'Main.forms.errors.incorrect_firstname'
    }),

  last_name: z
    .string()
    .nonempty('Main.forms.errors.lastname_empty')
    .min(2, 'Main.forms.errors.lastname_min')
    .max(50, 'Main.forms.errors.lastname_max')
    .refine((value) => nonRussianLettersPattern.test(value), {
      message: 'Main.forms.errors.incorrect_lastname'
    }),

  country: z.string(),

  position: z
    .string()
    .min(2, 'Main.forms.errors.position_min')
    .max(300, 'Main.forms.errors.position_max')
    .nonempty('Main.forms.errors.required_field')
    .refine((value) => /^[a-zA-Z-І-ґʼ\s']+$/.test(value), {
      message: 'Main.forms.errors.position'
    }),

  message: z
    .string()
    .nonempty({
      message: 'Main.forms.errors.required_field'
    })
    .refine(
      (value) =>
        nonRussianLettersWithSymbolsAndDigitsPattern.test(value) &&
        value.length <= messageMaxLength,
      {
        message: `Main.forms.errors.comment`
      }
    ),

  hpot: z.any().refine((value) => {
    return value?.length === 0 || value === undefined;
  }, {
    message: 'Bot Detected', // Error message
  }),

  terms: z.literal(true, {
    errorMap: () => ({
      message: 'Main.forms.errors.agreement'
    })
  }),

  terms_2: z.literal(true, {
    errorMap: () => ({
      message: 'Main.forms.errors.agreement'
    })
  }),

  specialist: z.string().nonempty('Main.forms.errors.required_field')
});
