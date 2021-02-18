const { RESTDataSource } = require('apollo-datasource-rest');

class VisitAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'http://link.to.api';
  }

  async getVisiteds() {
    // return this.get();

    const responseOfCall = [
      {
        id: 0,
        foreing_id: 10,
        item_description: 'produto legal A',
        description: 'visited-product-message-key',
        category: 'product',
        created_at: '2020-04-26T03:00:00-03:00',
      },
      {
        id: 1,
        foreing_id: 20,
        item_description: 'blog legal A',
        description: 'visited-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-17T03:00:00-03:00',
      },
      {
        id: 2,
        foreing_id: 30,
        item_description: 'usuario legal A',
        description: 'visited-user-message-key',
        category: 'user',
        created_at: '2020-04-14T03:00:00-03:00',
      },
      {
        id: 3,
        foreing_id: 21,
        item_description: 'blog legal B',
        description: 'visited-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-08T03:00:00-03:00',
      },
      {
        id: 4,
        foreing_id: 31,
        item_description: 'User C',
        description: 'visited-blog-message-key',
        category: 'user',
        created_at: '2020-04-22T03:00:00-03:00',
      },
    ];

    return responseOfCall;
  }
}

module.exports = VisitAPI;
