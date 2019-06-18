import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export const phoneMask = createTextMask({
  pattern: '8 (999) 999-9999',
  stripMask: false,
});

export const snilsMask = createTextMask({
  pattern: '999-999-999 99',
  stripMask: false,
});

export const ogrnMask = createTextMask({
  pattern: '9999999999999',
  stripMask: false,
});

export const yearMask = createTextMask({
  pattern: '9999',
  stripMask: false,
});
