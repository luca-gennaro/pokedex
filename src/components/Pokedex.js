import React from 'react'

const Pokedex = ({pokedex, removePokemon, setPokemon}) => {

  return (
    <div className='flex flex-col p-4 justify-center- items-center md:border-l border-slate-200'>
      <h2 className='text-2xl mb-4 font-bold text-center'>Il tuo Pokedex:</h2>
      {pokedex.length === 0 && <h1>Il tuo Pokedex è vuoto</h1>}
      <div className='flex gap-2 flex-wrap'>
        {pokedex.map((pokemon, id) => (
          <div key={id} className='flex flex-col items-center justify-center border-solid border-2 border-slate-500 p-2 rounded-md'>
            <h2 className='uppercase'>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="" />
            <button onClick={() => setPokemon(pokemon)}>Mostra</button>
            <button onClick={() => removePokemon(pokemon.id)}>Elimina</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokedex