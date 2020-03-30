import React from 'react';
import logo from '../../images/Pokemon-logo.png'
import {Link} from 'react-router-dom';
import classes from './header.module.css'

export default class Header extends React.Component{
    
    
    
    render(){
        return(
            <header className={classes.header}>
                <div className={classes.headerLogo}>
                    <img src={logo} ></img>
                </div>
                <ul className={classes.headerNavbar}>
                    
                    <li><Link to="/">Pokedex</Link></li>
                    <li><Link to="/comparar">Comparar</Link></li>
                    <li><Link to="/historia">Historia</Link></li>
                   
                </ul>
            </header>
            )
    }
}