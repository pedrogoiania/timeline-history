const historyItemType = require('../constants/HistoryItemType');

module.exports = {
  Query: {
    getHistory: async (_, __, { dataSources: { AccountAPI } }) => [
      {
        title: 'asdfasdfas',
        description: 'asdfsf',
        type: historyItemType.COMMENTED_BLOG_POST,
        occurDate: new Date(),
      },
    ],
  },
};
