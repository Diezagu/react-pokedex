import React, { useEffect, useState } from 'react'

export const PokeGrid = ({ pokemon }) => {
  const [poke, setPoke] = useState({
    name: pokemon,
    back_default: '',
    front_default: '',
    error: ''
  });

  const getPokemon = async() =>{
    try {
      const url =`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
      const resp = await fetch( url );
      const data = await resp.json();
      const {name, sprites} = data;
      setPoke({
        name: name,
        back_default: sprites.back_default,
        front_default: sprites.front_default
      });
    } catch (error) {
      setPoke({
        name: '',
        back_default: '',
        front_default: '',
        error: 'No se encontró el pokemon'
      });
    }
  }

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <hr></hr>
      <h3>{poke.name.replace(poke.name.charAt(0), poke.name.charAt(0).toUpperCase())}</h3>
      {poke.error ? <h2>No se encontró el pokemon</h2> : <div><img alt="Poke back" src={poke.back_default}/><img alt="Poke front" src={poke.front_default}/></div>}

    </>
  )
}
