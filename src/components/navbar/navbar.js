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
        <div>
            <div className='div-navBar'>
                <div className='div-logo'>
                    <img className='logo-img' src={logoImg}></img>
                </div>
                <div className='div-navegacao'>
                    <ul>
                        <li>
                            <img src={homeIcon}></img><a className='feed'>Feed</a>
                        </li>
                        <li>
                            <img src={userIcon}></img><a className='user'>Perfil</a>
                        </li>
                        <li>
                            <img src={searchIcom}></img><a className='search'>Pesquisa</a>
                        </li>
                        <li>
                            <img src={cogIcom}></img><a className='cog'>Configuração</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='div-icons'>
                <img src={facebookIcon}></img>
                <img src={instagramIcon}></img>
            </div>
            <hr className='line'></hr>
        </div>


    )
}