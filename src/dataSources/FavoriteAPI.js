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
        title: 'Produto A',
        description: 'favorite-product',
        category: 'product',
        created_at: '2020-04-30T03:00:00-03:00',
      },
      {
        id: 1,
        title: 'Blog Post A',
        description: 'favorite-blog',
        category: 'blog-post',
        created_at: '2020-04-15T03:00:00-03:00',
      },
      {
        id: 2,
        title: 'User A',
        description: 'favorite-blog',
        category: 'blog-post',
        created_at: '2020-04-10T03:00:00-03:00',
      },
      {
        id: 3,
        title: 'Blog Post B',
        description: 'favorite-blog',
        category: 'blog-post',
        created_at: '2020-04-16T03:00:00-03:00',
      },
      {
        id: 4,
        title: 'User C',
        description: 'favorite-blog',
        category: 'blog-post',
        created_at: '2020-04-11T03:00:00-03:00',
      },
    ];

    return responseOfCall;
  }
}

module.exports = AccountAPI;
