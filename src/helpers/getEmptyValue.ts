export const getEmptyValue = (value?: string) => {
  if (
    value === '' ||
    value === null ||
    value === undefined
  ) {
    return 'Не зазначено';
  }
  return value;
};
