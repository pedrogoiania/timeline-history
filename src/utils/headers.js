const acceptLanguage = (headers) => {
  const language = String(headers['accept-language']).toLowerCase();
  return language.split('-')[0];
};

module.exports = {
  acceptLanguage,
};
