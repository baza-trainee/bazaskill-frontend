const specialities = [
  'design',
  'frontend',
  'backend',
  'fullstack',
  'qa manual',
  'pm',
];

const countries = [
  'україна',
  'польща',
  'німеччина',
  'ukraine',
  'poland',
  'germany',
  'ukraina',
  'polska',
  'niemcy',
];

export const isSpeciality = (item: string) =>
  specialities.includes(item.toLowerCase());

export const isCountry = (item: string) =>
  countries.includes(item.toLowerCase());
