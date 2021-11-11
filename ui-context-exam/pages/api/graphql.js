import Cors from 'micro-cors';
import { gql, ApolloServer } from 'apollo-server-micro';
import { connectDatabase, getAllDocuments } from '../../helpers/db';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    dob: String!
    address: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users(limit: Int = 6): [User!]!
  }

  type Mutation {
    
  }
`;

const resolvers = {
  Query: {
    users: async (_parent, args, _context) => {
      const client = await connectDatabase();

      const documents = await getAllDocuments(
        client,
        'users',
        { _id: -1 }, // Descending Order
        {},
        args.limit
      );

      return documents;
    },
  },

  User: {
    id: (user, _args, _context) => user.id,
  },
};

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = apolloServer.start();

// We dont want to parse the request body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startApolloServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
