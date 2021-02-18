module.exports = {
  Query: {
    getHistory: async (_, __, { dataSources: { FavoriteAPI, ReviewAPI, VisitAPI } }) => {
      const favoriteItems = await FavoriteAPI.getFavorites();
      const reviewItems = await ReviewAPI.getReviews();
      const visitedItems = await VisitAPI.getVisiteds();

      return [...favoriteItems, ...reviewItems, ...visitedItems];
    },
  },
};
