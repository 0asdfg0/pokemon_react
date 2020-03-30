import React from 'react';
import classes from './pokemon-card-child-single.module.css'; 
var PokemonCardChildSingle = props =>{
    
    return(
        <div className={classes.pokemonCard}>
        <img className={classes.pokemonCardImage} src={props.image}></img>
        <div className={classes.pokemonCardInfo}>
            <p className={classes.pokemonCardId}>{props.id}</p>
            <h2 className={classes.pokemonCardTitle}>{props.name}</h2>
            <div className={classes.pokemonCardFeatures}>
                <p>Peso: {props.weight}</p>
                <p>Altura: {props.height}</p>                
            </div>
            <ul className={classes.pokemonCardType}>
                       {props.types.map((pok,pokIndex) => {
                           const key=pokIndex;
                       return <li className={classes[`${pok.type.name}`]} key={key}>{pok.type.name}</li>
                       })}
                    </ul>   
        </div>
    </div>
    );
}

export default PokemonCardChildSingle;