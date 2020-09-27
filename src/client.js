import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/2c36d7c2404fea0df27adaa2bb40785c',
  cache: new InMemoryCache(),
});

export default client;
