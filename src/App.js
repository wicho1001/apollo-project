import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const getPokemons = gql`
  query{
    pokemon(name: "Pikachu") {
      id
      number
      name
    }
  }
`

function App() {
  return (
    <Query query={getPokemons}>
      {({loading, error, data}) => {
        console.log(data)
        if (loading) return <div>loading...</div>
        if (error) return <div>error</div>
        return(
          <div>{data.pokemon.name}</div>
        )
      }}
    </Query>
  );
}

export default App;
