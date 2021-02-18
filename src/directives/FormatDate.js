const { SchemaDirectiveVisitor, gql } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

const headersUtils = require('../utils/headers');

class FormatDate extends SchemaDirectiveVisitor {
  static declaration() {
    return gql`
        directive @formatDate on FIELD_DEFINITION
      `;
  }

  formatts(language) {
    return {
      en: 'YYYY/MM/DD',
      pt: 'DD/MM/YYYY',
    }[language];
  }

  formatField(date, headers) {
    const language = headersUtils.acceptLanguage(headers);
    const newDate = new Date(date);
    return newDate.toLocaleDateString(language);
  }

  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      const [,, ctx] = args;
      const { headers } = ctx;
      const occurDate = await resolve.apply(this, args);

      return this.formatField(occurDate, headers);
    };
  }
}

module.exports = FormatDate;
