const moment = require('moment');

const formats = (language) => ({
  en: 'YYYY/MM/DD',
  pt: 'DD/MM/YYYY',
}[language]);

const formatDate = (language, date) => {
  const format = formats(language) || formats('en');
  return moment(date).format(format);
};

module.exports = {
  formatDate,
};
