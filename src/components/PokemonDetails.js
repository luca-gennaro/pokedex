import React, { useEffect, useState } from 'react'

const PokemonDetails = ({ pokemonResult }) => {

    const [img, setImg] = useState(null)

    useEffect(() => {
        setImg(pokemonResult.sprites.front_default)
    }, [pokemonResult])

    console.log(pokemonResult);



    return (
        <div className='mt-6'>
            <h1 className='text-2xl mb-4 font-bold'>Ecco i risultati per {pokemonResult.name.toUpperCase()}</h1>
            <div className='flex gap-10 border-b border-slate-200 m-b pb-6'>
                <p>Nome: {pokemonResult.name}</p>
                <p>Peso: {pokemonResult.weight}</p>
                <p>Altezza: {pokemonResult.height}</p>
            </div>
            <div className='flex gap-20 pt-10'>
                <div className='flex w-80'>
                    <img src={img} alt="pokemon" />
                    <div className='flex flex-col justify-center gap-1'>
                        <button className='flex items-center justify-center bg-purple-500 rounded-md text-white text-sm uppercase p-2' onClick={() => setImg(pokemonResult.sprites.front_default)}>default</button>
                        <button className='flex items-center justify-center bg-purple-500 rounded-md text-white text-sm uppercase p-2' onClick={() => setImg(pokemonResult.sprites.front_shiny)} > shiny</button>
                </div>
            </div>
            <div>
                <h2 className='font-bold'>Statistiche</h2>
                {pokemonResult.stats.map((stat, id) => (
                    <div key={id} className="flex flex-col">
                        <label htmlFor="stat">{stat.stat.name}</label>
                        <progress id='stat' value={stat.base_stat} max="100"></progress>
                    </div>
                ))}


            </div>
        </div>
        </div >
    )
}

export default PokemonDetails