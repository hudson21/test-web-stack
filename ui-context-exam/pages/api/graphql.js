import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import { connectDatabase } from '../../helpers/db';

import { typeDefs } from '../../graphql/typeDefs';
import { resolvers } from '../../graphql/resolvers';

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const client = await connectDatabase();
    return { client };
  },
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
