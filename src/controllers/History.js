const historyConstants = require('../constants/History');

const historyItemTypes = historyConstants.itemTypes;
const historyCategories = historyConstants.categories;

const getItemType = (origin, category) => {
  const upperCategory = String(category).toUpperCase();
  const itemType = `${origin}_${historyCategories[upperCategory]}`;

  return historyItemTypes[itemType];
};

const formatHistoryCollection = (collection, origin) => {
  const historyCollection = collection
    .map((item) => ({
      ...item,
      type: getItemType(origin, item.category),
      occurDate: new Date(item.created_at),
    }));

  return historyCollection;
};

const sortHistoryCollection = collection =>
  collection
    .sort((a, b) => b.occurDate - a.occurDate);

module.exports = {
  formatHistoryCollection,
  sortHistoryCollection,
};
