const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // If it is development mode
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      async rewrites() {
        return [
          {
            source: '/',
            destination: '/1',
          },
        ];
      },
      env: {
        MONGODB_USERNAME: 'hudson21',
        MONGODB_PASSWORD: 'xD6yVkQejkE3kTaG',
        MONGODB_CLUSTER_NAME: 'cluster0',
        MONGODB_DATABASE_NAME: 'superformula-exam-dev',
        GRAPHQL_URL: 'http://localhost:3000/api/graphql',
      },
    };
  }

  return {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/1',
        },
      ];
    },
    env: {
      MONGODB_USERNAME: 'hudson21',
      MONGODB_PASSWORD: 'xD6yVkQejkE3kTaG',
      MONGODB_CLUSTER_NAME: 'cluster0',
      MONGODB_DATABASE_NAME: 'superformula-exam-production',
      GRAPHQL_URL:
        'https://carlos-hudson-superformula-exam.vercel.app/api/graphql',
    },
  };
};
