const specialities = ['design', 'frontend', 'backend', 'fullstack', 'qa manual', 'pm'];

const countries = [
  'україна',
  'польща',
  'німеччина',
  'ukraine',
  'poland',
  'germany',
  'ukraina',
  'polska',
  'niemcy'
];

export function isSpeciality(item: string) {
  return specialities.includes(item.toLowerCase());
}

export function isCountry(item: string) {
  return countries.includes(item.toLowerCase());
}
