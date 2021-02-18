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

  async getFavorites() {
    // return this.get();

    const responseOfCall = [
      {
        id: 0,
        foreing_id: 10,
        title: 'Produto A',
        description: 'favorite-product-message-key',
        category: 'product',
        created_at: '2020-04-30T03:00:00-03:00',
      },
      {
        id: 1,
        foreing_id: 20,
        title: 'Blog Post A',
        description: 'favorite-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-15T03:00:00-03:00',
      },
      {
        id: 2,
        foreing_id: 30,
        title: 'User A',
        description: 'favorite-user-message-key',
        category: 'user',
        created_at: '2020-04-10T03:00:00-03:00',
      },
      {
        id: 3,
        foreing_id: 21,
        title: 'Blog Post B',
        description: 'favorite-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-16T03:00:00-03:00',
      },
      {
        id: 4,
        foreing_id: 31,
        title: 'User C',
        description: 'favorite-user-message-key',
        category: 'user',
        created_at: '2020-04-11T03:00:00-03:00',
      },
    ];

    return responseOfCall;
  }
}

module.exports = AccountAPI;
