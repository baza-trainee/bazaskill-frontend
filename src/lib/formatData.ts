export const formatDate = (
  value: string | number | Date,
  locale: string
): string => {
  const date = new Date(value);
  const currentLocale = locale === 'ua' ? 'uk-UA' : locale;

  const formattedDate = new Intl.DateTimeFormat(currentLocale, {
    month: 'long',
    year: 'numeric'
  }).format(date);

  return formattedDate;
};
