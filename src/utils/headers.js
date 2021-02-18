const acceptLanguage = (headers) => String(headers['accept-language']).toLowerCase();

module.exports = {
  acceptLanguage,
};
