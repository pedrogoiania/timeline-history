const { SchemaDirectiveVisitor, gql } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

const translationService = require('../services/translations');

const headersUtils = require('../utils/headers');

class TranslateDirective extends SchemaDirectiveVisitor {
  static declaration() {
    return gql`
        directive @translate(isNullable: Boolean! = false) on FIELD_DEFINITION
      `;
  }

  translatedValue(translationKey, headers) {
    const acceptLanguage = headersUtils.acceptLanguage(headers);
    return translationService.getTranslationByKey(translationKey, acceptLanguage);
  }

  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { isNullable } = this.args;

    field.resolve = async (...args) => {
      const [,, ctx] = args;
      const { headers } = ctx;

      const translationKey = await resolve.apply(this, args);

      if (!translationKey && isNullable) return undefined;

      return this.translatedValue(translationKey, headers);
    };
  }
}

module.exports = TranslateDirective;
