import React from 'react'
import '../styles/components/Products.css'
import Pokemon from '../components/Pokemon'

const Pokemons = (props) => {
    const { pokemons } = props
    
    return (
        <div className="Products">
            <div className="Products-items">
                {pokemons.map((pokemon) =>{
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemons