import React from 'react';
import PokemonCardChildSingle from './pokemon-card-child-single'

var  PokemonCardParentSingle = (props) => {
    
        return(
             <PokemonCardChildSingle 
                id={props.pokemon.id} 
                image={props.pokemon.sprites.front_default}
                name={props.pokemon.name}
                weight={props.pokemon.weight}
                height={props.pokemon.height}
                types={props.pokemon.types}
                stats={props.pokemon.stats}
                 />

            


        );
    
}
export default PokemonCardParentSingle;