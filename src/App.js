import { Route, Switch } from "react-router-dom";

import Pages from "./pages/"

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import {setContext} from "apollo-link-context";
import { ToastProvider } from "react-toast-notifications";
const uri = process.env.API_URI;
const httpLink = createHttpLink({uri});
const cache = new InMemoryCache();
const authLink = setContext((_,{headers})=>{
  return{
    headers:{
      ...headers,
      authorization:localStorage.getItem('token')||''
    }
  }
})
const client = new ApolloClient({
  link:authLink.concat(httpLink),
  cache,
  resolvers:{},
  connectToDevTools:true
})

const data = {
  isLoggedIn: !!localStorage.getItem('token')
}
cache.writeData({data});
client.onResetStore(()=>cache.writeData({data}))


function App() {

  
  return (
    <ApolloProvider client={client}>
      <ToastProvider>
          
          <Pages />
        </ToastProvider>
     </ApolloProvider>    
    
  );
}

export default App;
