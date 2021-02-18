const timelineResolver = require('./Transaction');
const accountResolver = require('./AccountTransaction');
const creditCardResolver = require('./CreditCardTransaction');

module.exports = [
  timelineResolver,
  accountResolver,
  creditCardResolver,
];
