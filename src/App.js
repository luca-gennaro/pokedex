import React, { useEffect, useState } from 'react'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import SearchBar from './components/SearchBar'
import { getPokemon } from './utils/api'

const App = () => {

  const [pokemon, setPokemon] = useState(null)
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    searchPokemon("charmander")
  }, [])

  const addToPokedex = () => {
    if(pokedex.includes(pokemon)){
      alert("Questo Pokemon è già presente nel tuo Pokedex")
      return
    }
    setPokedex([...pokedex, pokemon])
  }

  const removePokemon = (id) => {
    const newPokedex = pokedex.filter(item => item.id !== id)
    setPokedex(newPokedex)
  }

  const searchPokemon = async (pokemonName) => {
    const pokemonResult = await getPokemon(pokemonName)
    setPokemon(pokemonResult)
  }

  return (
    <div className='flex flex-col h-[100vh] sm:p-12 p-4 text-slate-500'>
      <SearchBar search={searchPokemon} />
      <div className='md:flex gap-10'>
        {pokemon !== null && <PokemonDetails pokemonResult={pokemon} addHandler={addToPokedex} />}
        <Pokedex pokedex={pokedex} removePokemon={removePokemon} setPokemon={setPokemon}/>
      </div>
    </div>
  )
}

export default App