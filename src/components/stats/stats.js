import React from 'react';
import classes from './stats.module.css'
var StatsPokemon = props =>{
    return(
        <div className={classes.values}>
       
        {props.stats.map((stat, statIndex) => {
            return <p key={statIndex}>{stat.stat.name}:{stat.base_stat}</p>
        })}
    </div>
    );
}

export default StatsPokemon;