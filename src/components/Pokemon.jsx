import React, { useState } from 'react'
import Details from '../components/Details'

const Pokemon = (props) => {
    const { pokemon } = props
    const [ isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className="Products-item">
                <img 
                    onClick={togglePopup}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <div className="Products-item-info">
                    <h2>{pokemon.name}
                        <span>{pokemon.id}</span>
                    </h2>
                    Type: {pokemon.types.map((type, index) => {
                            return (
                                <div className="Pokemon-type-text" key={index}>
                                    {type.type.name}
                                </div>
                            )
                        })}
                </div>
            </div>
            {isOpen && <Details 
                handleClose={togglePopup}
                content={                                    
                    <div className="Products-item">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                        <div className="Products-item-info">
                            <h2>{pokemon.name}
                            <span>{pokemon.id}</span>
                        </h2>
                        </div>
                        <div className="Pokemon-type-text">
                            Abilities: {pokemon.abilities.map((ability, index) => {
                            return (
                                <div key={index}>
                                    {ability.ability.name}
                                </div>
                            )
                        })}
                        </div>
                        
                        <div className="Products-item-info">
                            Stats: <h2>
                                <span>
                                    HP: {pokemon.stats[0].base_stat}
                                    {' '}
                                    Atack: {pokemon.stats[1].base_stat}
                                    {' '}
                                    Defense: {pokemon.stats[2].base_stat}
                                    {' '}
                                    Especial: {pokemon.stats[3].base_stat}
                                </span>
                            </h2>
                        </div>
                        
                    </div>
                } 
            />} 
        </div>
    )
}

export default Pokemon