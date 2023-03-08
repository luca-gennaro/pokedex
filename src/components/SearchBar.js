import React, { useState } from 'react'

const SearchBar = ({search}) => {

    const [pokemon, setPokemon] = useState("")

    const handleInputChange = (event) => {
        setPokemon(event.target.value)
    }

    return (
        <div>
            <h1 className='text-4xl font-bold'>Cerca un Pokemon</h1>
            <div className='flex justify-between h-12 my-4'>
                <input className='border-solid border-2 w-full px-2 rounded-l-md' type="text" placeholder='e.g. charmander' value={pokemon} onChange={handleInputChange}/>
                <button className='flex items-center justify-center w-32 bg-purple-500 rounded-r-md text-white uppercase' type="submit" onClick={()=>{search(pokemon); setPokemon("")}}>Cerca</button>
            </div>

        </div>
    )
}

export default SearchBar