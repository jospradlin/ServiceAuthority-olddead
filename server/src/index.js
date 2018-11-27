require('./config/config');
const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const AuthPayload = require('./resolvers/AuthPayload');
// const Subscription = require('./resolvers/Subscription')
//const VirtualMachine= require('./resolvers/VirtualMachine');



const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  //VirtualMachine
  // Subscription,
  // VMWare,
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  // context: req => ({
  //   ...req,
  //   db: new Prisma({
  //     typeDefs: 'src/generated/prisma.graphql',
  //     endpoint: 'https://us1.prisma.sh/public-navyrider-858/test-api/dev',
  //     secret: 'mysecret123',
  //     debug: true,
  //   }),
  // }),
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4467/SA-primary-ds/demo',
      secret: 'S3rv1c3Auth0r1ty!123!',
      debug: true,
    }),
  }),
})

const port = process.env.PORT || 6000;
console.log('port: ', port);
server.start({
  port
}, () => console.log(`Server is running on http://localhost:${port}`));
