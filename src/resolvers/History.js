const historyConstants = require('../constants/History');
const historyController = require('../controllers/History');

const historyOrigins = historyConstants.origin;

module.exports = {
  Query: {
    getHistory: async (_, __, { dataSources: { FavoriteAPI, ReviewAPI, VisitAPI } }) => {
      const favoriteItems = await FavoriteAPI.getFavorites();
      const reviewItems = await ReviewAPI.getReviews();
      const visitedItems = await VisitAPI.getVisiteds();

      const favoriteCollection = historyController
        .formatHistoryCollection(favoriteItems, historyOrigins.FAVORITE);
      const reviewCollection = historyController
        .formatHistoryCollection(reviewItems, historyOrigins.REVIEW);
      const visitedCollection = historyController
        .formatHistoryCollection(visitedItems, historyOrigins.VISIT);

      const fullCollection = [
        ...favoriteCollection,
        ...reviewCollection,
        ...visitedCollection,
      ];

      return historyController.sortHistoryCollection(fullCollection);
    },
  },
  HistoryItem: {
    label: parent => parent.title || parent.message || parent.item_description,
  },
};
