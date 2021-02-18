const { SchemaDirectiveVisitor, gql } = require('apollo-server');
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
    const originalResolver = field.resolve;

    field.resolve = async (...args) => {
      const [,, ctx] = args;
      const { headers } = ctx;
      const resolver = originalResolver || ctx.graphql.defaultFieldResolver;
      const occurDate = await resolver.apply(this, args);

      return this.formatField(occurDate, headers);
    };
  }
}

module.exports = FormatDate;
