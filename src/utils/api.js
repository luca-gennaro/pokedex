const url = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async (pokemonName) => {
    const res = await fetch(`${url}${pokemonName}`)
    const data = await res.json()
    return data
}