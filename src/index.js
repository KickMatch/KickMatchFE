import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from, networkErrors } from '@apollo/client';
import {onError } from '@apollo/client/link/error'

const errorLink = onError(( {graphqlErrors, networkErrors }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL Error: ${message}`)
    })
  }
})

// const link = from([
//   new HttpLink({uri: "https://frozen-waters-94259.herokuapp.com/graphql"})
// ])

const client = new ApolloClient({
  uri: "https://frozen-waters-94259.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloClient client={client}>
      <React.StrictMode>
          <App />
        </React.StrictMode>
    </ApolloClient>
  </BrowserRouter>,
  document.getElementById('root')
);
