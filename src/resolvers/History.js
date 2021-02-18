const historyItemType = require('../constants/HistoryItemType');

module.exports = {
  Query: {
    getHistory: async (_, __, { dataSources: { FavoriteAPI } }) => {

      const favoriteItems = await FavoriteAPI.getFavorites()

      return favoriteItems
    },
  },
};
