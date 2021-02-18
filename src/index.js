const { ApolloServer } = require('apollo-server');

const resolvers = require('./resolvers');
const types = require('./types');

const directives = require('./directives');

const schemaDirectives = {
  ...directives,
};

const directivesTypesDefs = [
  ...Object.values({
    ...directives,
  }).map(item => item.declaration()),
];

const {
  AccountAPI,
  FavoriteAPI,
  ReviewAPI,
  VisitAPI,
} = require('./dataSources');

const dataSources = () => ({
  AccountAPI: new AccountAPI(),
  FavoriteAPI: new FavoriteAPI(),
  ReviewAPI: new ReviewAPI(),
  VisitAPI: new VisitAPI(),
});

const typeDefs = [
  ...directivesTypesDefs,
  ...types,
];

const context = ({ req }) => ({
  headers: req.headers,
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
  tracing: true, // @todo configure using .env
  playground: true,
  introspection: true,
  context,
  dataSources,
  schemaDirectives,
});

const running = ({ url }) => {
  console.info(`Server running on ${url}`);
};

server
  .listen({ port: 5000 })
  .then(running);

module.exports = {
  server,
  running,
};
