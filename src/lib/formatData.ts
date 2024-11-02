
export const formatDate = (timestamp: string | number, locale: string): string => {
	const date = new Date(Number(timestamp));
	const currentLocale = locale === 'ua' ? 'uk-UA' : locale

	const formattedDate = new Intl.DateTimeFormat(currentLocale, {
		month: 'long',
		year: 'numeric'
	}).format(date);

	return formattedDate
}