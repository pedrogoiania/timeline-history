const translations = require('./translations.json');

const contentLanguages = ['en-us', 'pt-br', 'es-es'];

/**
 * @description can do or use a real translation service
 */
const getTranslationByKey = (key, acceptLanguage = 'en-us') => {
  if (!contentLanguages.includes(acceptLanguage)) {
    acceptLanguage = 'en-us';
  }

  const keys = translations[acceptLanguage];

  const translation = keys.find((item) => item.key === key);

  if (!translation) {
    return key;
  }

  return translation.value;
};

module.exports = {
  getTranslationByKey,
};
