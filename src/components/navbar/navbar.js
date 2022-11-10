import React from 'react';
import './style.scss';
import logoImg from './img/Portfólio.png';
import homeIcon from './icons/home.png';
import userIcon from './icons/user.png';
import searchIcom from './icons/search.png';
import cogIcom from './icons/cog.png';
import facebookIcon from './icons/facebook.png';
import instagramIcon from './icons/instagram.png';

export default function navbar() {
    return (
        <div className="navbar-body">

            <img className='logo-img' src={logoImg}></img>

            {/* linha vertical marcando  */}
            <hr className="line-vertical"></hr>

            {/* home */}
            <img className='home-icon' src={homeIcon}></img>
            <h4 className='feed'>Feed</h4>

            {/* perfil */}
            <img className='user-icon' src={userIcon}></img>
            <h4 className='user'>Perfil</h4>

            {/* pesquisa */}
            <img className='search-icon' src={searchIcom}></img>
            <h4 className='search'>Pesquisa</h4>

            {/* configuracao */}
            <img className='cog-icon' src={cogIcom}></img>
            <h4 className='cog'>Configuração</h4>

            <img className='facebook-icon' src={facebookIcon}></img>
            <img className='instagram-icon' src={instagramIcon}></img>

        </div>
    )
}