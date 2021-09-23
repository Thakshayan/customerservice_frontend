import { Route, Switch } from "react-router-dom";

import Pages from "./pages/"

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

import { InMemoryCache } from "apollo-cache-inmemory";



// configure our API URI & cache  
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// return the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

// create the Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

// check for a local token
const data = {
  isLoggedIn: !!localStorage.getItem('token')
};

// write the cache data on initial load
cache.writeData({ data });
// write the cache data after cache is reset
client.onResetStore(() => cache.writeData({ data }));


function App() {

  
  return (
    <ApolloProvider client={client}>
      <Pages/>
     </ApolloProvider>    
    
  );
}

export default App;
