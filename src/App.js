import React, { useEffect, useState } from 'react'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import SearchBar from './components/SearchBar'
import { getPokemon } from './utils/api'

const App = () => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(()=>{
    searchPokemon("charmander")
  }, [])

  const searchPokemon = async (pokemonName) => {
    const pokemonResult = await getPokemon(pokemonName)
    setPokemon(pokemonResult)
  }

  return (
    <div className='flex flex-col h-[100vh] p-12 text-slate-500'>
      <SearchBar search={searchPokemon}/>
      {pokemon !== null && <PokemonDetails pokemonResult={pokemon}/>}
      <Pokedex />
    </div>
  )
}

export default App