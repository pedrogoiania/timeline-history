const transactionResolver = require('./Transaction');
const accountResolver = require('./AccountTransaction');
const creditCardResolver = require('./CreditCardTransaction');
const history = require('./History');

module.exports = [
  transactionResolver,
  accountResolver,
  creditCardResolver,
  history,
];
