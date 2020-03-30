import React from 'react';
import PokemonCardChild from './pokemon-card-child'
import classes from './pokemon-card-parent.module.css'



var  PokemonCardParent = (props) => {
    return(
    <section className = {classes.content}>
        {props.cards.map((post, postIndex) => {
            return (
                <PokemonCardChild
                key={postIndex} 
                id={post.id} 
                image={post.image} 
                name={post.name}
                weight={post.weight}
                height={post.height}
                types={post.types} 
                />
            )
        })}
    </section>
);
    
}

export default PokemonCardParent;
