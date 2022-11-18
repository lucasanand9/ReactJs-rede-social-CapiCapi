import React from 'react';
import './style.scss';
import facebookIcon from '../../components/navbar/icons/facebook.png';
import instagramIcon from '../../components/navbar/icons/instagram.png';
import postUsuarioLogin from './postUsuario';
import { NavLink } from 'react-router-dom';

export default function Feed() {
    return (
        <div>
            <div className='align'>
                <div className='div-formLogin'>
                    <div className='div-title-login'>
                        <p className='title-login'>Login</p>
                    </div>
                    <div className='div-form'>
                        <div className='div-campos'>
                            <input className='input1' placeholder='Email' type={'email'}></input>
                            <input className='input2' placeholder='Senha' type={'password'}></input>
                        </div>
                        <button className='buttonSubmit'>Entrar</button>
                        <p className='telaRegistrar'>Não tem conta?<NavLink to="/registrar" exact> Registrar-se</NavLink></p>
                    </div>

                </div>
            </div>
            <div className='div-iconsLogin'>
                <img src={facebookIcon}></img>
                <img src={instagramIcon}></img>
            </div>
        </div>

    );
}