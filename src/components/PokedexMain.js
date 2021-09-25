import { SearchPokemon } from './SearchPokemon'

import './pokes.css';
import { useState } from 'react';
import { PokeGrid } from './PokeGrid';

export const PokedexMain = () => {
  const [pokemon, setPokemon] = useState('ditto');

  return (
    <>
      <h1>Pokemon</h1>
      <hr></hr>
      <SearchPokemon setPokemon = {setPokemon}></SearchPokemon>
      
      <PokeGrid pokemon={ pokemon } ></PokeGrid>
    </>
  )
}
