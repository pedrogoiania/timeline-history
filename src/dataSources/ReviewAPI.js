const { RESTDataSource } = require('apollo-datasource-rest');

class ReviewAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'http://link.to.api';
  }

  async getReviews() {
    // return this.get();

    const responseOfCall = [
      {
        id: 0,
        foreing_id: 10,
        message: 'produto legal A',
        description: 'revised-product-message-key',
        category: 'product',
        created_at: '2020-04-28T03:00:00-03:00',
      },
      {
        id: 1,
        foreing_id: 20,
        message: 'blog legal A',
        description: 'revised-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-23T03:00:00-03:00',
      },
      {
        id: 2,
        foreing_id: 30,
        message: 'usuario legal A',
        description: 'revised-user-message-key',
        category: 'user',
        created_at: '2020-04-17T03:00:00-03:00',
      },
      {
        id: 3,
        foreing_id: 21,
        message: 'blog legal B',
        description: 'revised-blog-message-key',
        category: 'blog-post',
        created_at: '2020-04-12T03:00:00-03:00',
      },
      {
        id: 4,
        foreing_id: 31,
        message: 'User C',
        description: 'revised-blog-message-key',
        category: 'user',
        created_at: '2020-04-03T03:00:00-03:00',
      },
    ];

    return responseOfCall;
  }
}

module.exports = ReviewAPI;
