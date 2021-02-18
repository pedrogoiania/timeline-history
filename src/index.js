const { ApolloServer } = require('apollo-server');

const resolvers = require('./resolvers');
const types = require('./types');
const controllers = require('./controllers');

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
} = require('./dataSources');

const dataSources = () => ({
  AccountAPI: new AccountAPI(),
});

const typeDefs = [
  ...directivesTypesDefs,
  ...types,
];

const context = ({ req }) => ({
  headers: req.headers,
  controllers,
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
