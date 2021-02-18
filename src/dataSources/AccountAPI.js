const { RESTDataSource } = require('apollo-datasource-rest');

class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'http://link.to.api';
  }

  async userTransactions() {
    // return this.get();

    const responseOfCall = [
      {
        title: 'transferencia entre contas',
        description: 'grana do aluguel',
        value: 2000,
        category: {
          title: 'TIB',
          icon: 'bank_icon',
        },
        icon: 'money_icon',
        occur_date: '2020-04-30T03:00:00-03:00',
      },
      {
        title: 'transferencia entre contas',
        description: 'grana do aluguel',
        value: 2000,
        category: {
          title: 'TIB',
          icon: 'bank_icon',
        },
        icon: 'money_icon',
        occur_date: '2020-04-30T03:00:00-03:00',
      },
      {
        title: 'transferencia entre contas',
        description: 'grana do aluguel',
        value: 2000,
        category: {
          title: 'TIB',
          icon: 'bank_icon',
        },
        icon: 'money_icon',
        occur_date: '2020-04-30T03:00:00-03:00',
      },
    ];

    return responseOfCall;
  }
}

module.exports = AccountAPI;
