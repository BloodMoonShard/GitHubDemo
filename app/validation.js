export const required = value => {
  if ((typeof value === 'object' && Object.keys(value).length > 0) || value > 0) return undefined;
  return value && value.length > 0 || value.indexOf('_') !== -1 ? undefined : 'Обязательно для заполнения';
};
export const number = value => value && isNaN(Number(value)) ? 'Значение должно быть числом' : undefined;
