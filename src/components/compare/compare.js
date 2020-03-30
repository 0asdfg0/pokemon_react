import React, { useRef } from 'react'
import PokemonCardParentSingle from './pokemon-card-parent-single';
import StatsPokemon from '../stats/stats'
import classes from './compare.module.css';

var Compare = (props) =>{
    var poke ="";
   
    const refe1 = useRef(); 
    const refe2 = useRef();  
        return(
            <div className={classes.battle}>
                 <div>
                           {imprimir('uno')}    
                    </div>
                <div>
                <select id="pokemon" ref={refe1} onChange={(e) => {selectPokemon('uno');}}>
                    {props.cards.map((nombre,nombreIndex) => {
                        return <option value={nombre.name} key={nombreIndex}>{nombre.name}</option>
                    })}      
                </select>
                    
                </div>
                    {stats('uno')}
                    {stats('dos')}
                <div>
                <select id="pokemon" ref={refe2} onChange={(e) => {selectPokemon('dos');}}>
                    {props.cards.map((nombre,nombreIndex) => {
                        return <option value={nombre.name} key={nombreIndex}>{nombre.name}</option>
                    })}      
                </select>
                    
                </div>
                <div>
                           {imprimir('dos')}    
                    </div>

            </div>
        )
        function selectPokemon(condition){
            if(condition == 'uno'){
                props.nuevoestado(refe1.current.value);
                findPokemon('uno');
            }
            else if(condition == 'dos'){
                props.nuevoestado(refe2.current.value);
                findPokemon('dos');
            }
            
                
        } 
        async function findPokemon(condition){
                if(condition == 'uno'){
                console.log(refe1.current.value); 
                poke = await props.single(refe1.current.value);  
                     
                    if(poke){  
                        props.imprimir(poke);  ;
                        
                    }
            }
            else if(condition =='dos'){
                console.log(refe2.current.value); 
                poke = await props.single(refe2.current.value);  
                     
                    if(poke){  
                        props.imprimir2(poke);  ;
                        
                    }

            }

            
            
        }  
        
        function imprimir(condition){
            if(props.pokemon1 || props.pokemon2){
                if(condition == 'uno'){
                    const pr = props.pokemon1;
                    console.log(pr);
                    return <PokemonCardParentSingle pokemon={pr}></PokemonCardParentSingle>
                }
                else if(condition == 'dos'){
                    const pr = props.pokemon2;
                    console.log(pr);
                    if(pr){
                        return <PokemonCardParentSingle pokemon={pr}></PokemonCardParentSingle>
                    }
                }
                
            }
           
        }

        function stats(condition){
            if(condition == 'uno'){
                if(props.pokemon1){
                    return <StatsPokemon stats={props.pokemon1.stats} ></StatsPokemon>
                    
                }
            }
            else if(condition == 'dos'){

            if(props.pokemon2){
                return <StatsPokemon stats={props.pokemon2.stats} ></StatsPokemon>
                
            }
        }
        }
        
}

export default Compare;