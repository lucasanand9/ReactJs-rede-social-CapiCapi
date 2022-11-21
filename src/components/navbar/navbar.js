import React from 'react';
import './style.scss';
import Logo from './img/Logo.svg'
import homeIcon from './icons/home.png';
import userIcon from './icons/user.png';
import searchIcom from './icons/search.png';
import cogIcom from './icons/cog.png';

import { Link } from 'react-router-dom';


export default function navbar() {
    return (
        
            <div className='div-navBar'>
                <div className='div-logo'>
                    <img className='logo-img' src={Logo}></img>
                </div>
                <div className='div-navegacao'>
                    
                <Link to='/' className='icones-navbar'>  <img src={homeIcon}/>  Feed </Link>
                <Link to='/perfil' className='icones-navbar'>   <img src={userIcon}/>   Perfil </Link>
                <Link to='/pesquisa' className='icones-navbar'>   <img src={searchIcom}/>  Pesquisa </Link>
                <Link to='/configuracao' className='icones-navbar'>   <img src={cogIcom}/>  Configuração </Link>
                    
                   
                </div>
            </div>
         


    )
}