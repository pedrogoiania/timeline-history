module.exports = {
  AccountTransaction: {
    title: (parent) => parent.title,
    occur_date: () => '2020-04-30T03:00:00-03:00',
    category: (parent) => parent.category,
  },

};
