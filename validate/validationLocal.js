const keys = {
  required: 'Name is required',
  minLength: 'Name is too short',
  maxLength: 'Name is too long',
  emailRequired: 'Email is required',
  email: 'Email is invalid',
  integer: 'Value should be a number',
  tel: 'Phone number is invalid',
  name: 'Name is invalid',
  ageMin: 'Min age is invalid',
  ageMax: 'Max age is invalid',
}

const dictLocale = [
  {
    key: keys.required,
    dict: {
      ru: 'Поле обязательно для заполнения',
      en: 'The field is required',
    },
  },
  {
    key: keys.name,
    dict: {
      ru: 'Некорректное значение',
      en: 'Incorrect value',
    },
  },
  {
    key: keys.ageMin,
    dict: {
      ru: 'Возраст не менее :value лет',
      en: 'Incorrect value',
    },
  },
  {
    key: keys.ageMax,
    dict: {
      ru: 'Возраст не более :value лет',
      en: 'Incorrect value',
    },
  },
  {
    key: keys.minLength,
    dict: {
      ru: 'Поле должно содержать минимум :value символа',
      en: 'The field must contain a minimum of :value characters',
    },
  },
  {
    key: keys.maxLength,
    dict: {
      ru: 'Поле должно содержать максимум :value символа',
      en: 'The field must contain a maximum of :value characters',
    },
  },
  {
    key: keys.emailRequired,
    dict: {
      ru: 'Электронная почта обязательна',
      en: 'Email is required',
    },
  },
  {
    key: keys.email,
    dict: {
      ru: 'Электронная почта недействительна',
      en: 'Email has invalid format',
    },
  },
  {
    key: keys.integer,
    dict: {
      ru: 'Значение должно быть числом',
      en: 'Value should be a number',
    },
  },
  {
    key: keys.tel,
    dict: {
      ru: 'Номер телефона недействителен',
      en: 'Phone number has invalid format',
    },
  },
];

export default {
  dictLocale,
  keys,
}