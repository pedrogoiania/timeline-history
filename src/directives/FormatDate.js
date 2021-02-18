const { SchemaDirectiveVisitor, gql } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

const headersUtils = require('../utils/headers');
const intlUtils = require('../utils/intlDate');

class FormatDate extends SchemaDirectiveVisitor {
  static declaration() {
    return gql`
        directive @formatDate on FIELD_DEFINITION
      `;
  }

  formatField(date, headers) {
    const language = headersUtils.acceptLanguage(headers);
    return intlUtils.formatDate(language, date);
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
