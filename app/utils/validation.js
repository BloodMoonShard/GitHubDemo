export const required = value => {
  return value ? undefined : 'Required field';
};

export const requiredBoolean = value => {
  return value !== undefined && value.length === 0 ? 'Обязательное поле' : undefined;
};

export const phone = value => {
  return value && /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g ? undefined : 'Неверный телефон';
};

export const email = value => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value)
    .toLowerCase()) ? undefined : 'Неверный формат Email';
};


export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);

export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;
export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined;
