export function translateCountry(country?: string) {
  if (country === 'ukraine') {
    return 'Україна';
  }
  if (country === 'poland') {
    return 'Польща';
  }
  return country;
}
