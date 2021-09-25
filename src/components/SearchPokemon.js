import React, { useState } from 'react'

export const SearchPokemon = ({ setPokemon }) => {
  const [poke, setPoke] = useState('');

  const handleChange = ({ target }) =>{
    setPoke(target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setPokemon(poke);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Ej. Pikachu" 
        value={ poke }
        onChange= { handleChange }
      />
    </form>
  )
}
