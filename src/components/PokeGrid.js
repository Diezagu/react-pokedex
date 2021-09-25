import React, { useEffect, useState } from 'react'

export const PokeGrid = ({ pokemon }) => {
  const [poke, setPoke] = useState({
    name: pokemon,
    back_default: '',
    front_default: ''
  });

  const getPokemon = async() =>{
    console.log( `una vez` );
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
      console.log( `no se ecnontró la imagen` );
    }
  }

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <hr></hr>
      <h3>{poke.name.replace(poke.name.charAt(0), poke.name.charAt(0).toUpperCase())}</h3>
      <img alt="Poke back" src={poke.back_default}/>
      <img alt="Poke front" src={poke.front_default}/>
    </>
  )
}
