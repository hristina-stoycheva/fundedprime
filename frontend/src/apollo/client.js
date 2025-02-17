import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://woocommerce-1293743-5267124.cloudwaysapps.com/graphql', // Replace with your WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
