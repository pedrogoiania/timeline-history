const { SchemaDirectiveVisitor, gql } = require('apollo-server');

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
    const originalResolver = field.resolve;
    const { isNullable } = this.args;

    field.resolve = async (...args) => {
      const [,, ctx] = args;
      const { headers } = ctx;
      const resolver = originalResolver || ctx.graphql.defaultFieldResolver;
      const translationKey = await resolver.apply(this, args);

      if (!translationKey && isNullable) return undefined;

      return this.translatedValue(translationKey, headers);
    };
  }
}

module.exports = TranslateDirective;
