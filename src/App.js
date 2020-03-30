import React, { Component } from 'react';
import classes from  './App.module.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/header'
import PokemonCardParent from './components/pokedex/pokemon-card-parent';
import Compare from './components/compare/compare';
import HistoryComponent from './components/history/history'
import axios from './instances/axiosInstance';

class  App extends Component {

  state={
    cards:[],
    pokeinfo:[],
    pokemon1:"",
    pokemon2:"",
    currentPokemon:"",
    cardInfo:{
      image:"",
      id:"",
      name:"",
      weight:"",
      height:"",
      types:[]
    }
  }

  componentDidMount () {
    axios.get('/pokemon')
      .then(response => {
        this.getPokemon(response.data.results)
         
        
      })
  }
  
  render(){
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header></Header>
      <Route path ="/" exact render = {() => <PokemonCardParent cards = {this.state.cards} />} />
      <Route path ="/comparar" exact render = {() => <Compare cards = {this.state.cards} nuevoestado={this.newSelect} current={this.state.currentPokemon} single={this.getInfoPokemon} imprimir={this.imprimir } imprimir2={this.imprimir2} pokemon1={this.state.pokemon1} pokemon2={this.state.pokemon2}  />} />
      <Route path ="/historia" exact render = {() => <HistoryComponent title="Principio del universo"></HistoryComponent>} />
    </div>
    </BrowserRouter>
  );
}

  getPokemon = async (url) => {
   console.log(url)
   let pokemondata = await Promise.all(
     url.map(async pokemon => {
        let pokemonRecord = await this.getInfoPokemon(pokemon.name);
        return pokemonRecord;
     })
   );
   const updatedPosts = pokemondata.map(pokemon => {
    return {
      id:pokemon.id,
      name: pokemon.name,
      height:pokemon.height,
      weight:pokemon.weight,
      image:pokemon.sprites.front_default,
      types:pokemon.types
      
    }
  });

  this.setState({cards: updatedPosts})
  console.log(pokemondata)
}
   async getInfoPokemon(url){
     return new Promise ((resolve,reject) => {
       axios.get(`/pokemon/${url}`)
       .then(response => {
         resolve(response.data);
       })
     })
   }

  newSelect = (nuevo) => {
    
    this.setState({
      currentPokemon: nuevo,
    });

    
  }
  imprimir = (nuevo) => {
    
    this.setState({
      pokemon1: nuevo,
    });
  }
  imprimir2 = (nuevo) => {
    
    this.setState({
      pokemon2: nuevo,
    });
  }
  
  }

export default App;
