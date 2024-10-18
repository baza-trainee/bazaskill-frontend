export function formatDate(str: string) {
  const date = str
    .split('T')[0]
    .split('-')
    .reverse()
    .join('.');

  return date;
}
