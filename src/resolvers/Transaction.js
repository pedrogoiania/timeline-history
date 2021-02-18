module.exports = {
  Query: {
    getAllItems: async (_, __, { dataSources: { AccountAPI } }) => {
      const userAccountTransactions = await AccountAPI.userTransactions();
      return userAccountTransactions;
    },
  },
  Transaction: {
    __resolveType: (obj) => {
      if (obj.category && obj.category.type === 'creditCard') {
        return 'CreditCardTransaction';
      }

      return 'AccountTransaction'; // GraphQLError is thrown
    },
  },
};
