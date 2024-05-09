export const translateCountryName = (name: string) => {
  if (
    name === 'україна' ||
    name === 'ukraine' ||
    name === 'ukraina'
  )
    return 'україна';
  if (
    name === 'польща' ||
    name === 'poland' ||
    name === 'polska'
  )
    return 'польща';
  if (
    name === 'німеччина' ||
    name === 'germany' ||
    name === 'niemcy'
  )
    return 'німеччина';
};
