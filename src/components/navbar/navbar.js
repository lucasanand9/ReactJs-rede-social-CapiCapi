import React from 'react';
import './style.scss';
import logoImg from './img/Portfólio.png';
import homeIcon from './icons/home.png';
import userIcon from './icons/user.png';
import searchIcom from './icons/search.png';
import cogIcom from './icons/cog.png';
import facebookIcon from './icons/facebook.png';
import instagramIcon from './icons/instagram.png';
import { NavLink } from 'react-router-dom';

export default function navbar() {
    return (
        <div className="navbar-body">

            <img className='logo-img' src={logoImg}></img>

            {/* linha vertical marcando  */}
            <hr className="line-vertical"></hr>

            {/* home */}
            <NavLink to="/" exact>
            <img className='home-icon' src={homeIcon}></img>
            </NavLink>
            <NavLink to="/" exact>
            <h4 className='feed'>Feed</h4>
            </NavLink>


            {/* perfil */}
            <NavLink to="/perfil" exact>
            <img className='user-icon' src={userIcon}></img>
            </NavLink>
            <NavLink to="/perfil" exact>
            <h4 className='user'>Perfil</h4>
            </NavLink>

            {/* pesquisa */}
            <img className='search-icon' src={searchIcom}></img>
            <h4 className='search'>Pesquisa</h4>

            {/* configuracao */}
            <img className='cog-icon' src={cogIcom}></img>
            <NavLink to="/configuracao" exact>
            <h4 className='cog'>Configuração</h4>
            </NavLink>

            <img className='facebook-icon' src={facebookIcon}></img>
            <img className='instagram-icon' src={instagramIcon}></img>

        </div>
    )
}