import React, { useState, useEffect } from 'react'
import Pokemons from '../components/Pokemons';
import  { getPokemons, getPokemonData } from '../apiState'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
        
    setTimeout(() => {
        this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
        });
    }, 1500);

    const fetchPokemons = async () => {
        try {
            const data = await getPokemons()
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        } catch (err) {}
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div>
            <Pokemons pokemons={pokemons} />
        </div>
    )
}

export default Home