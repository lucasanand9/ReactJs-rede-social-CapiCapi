import React from 'react';
import './style.scss';
import facebookIcon from '../../components/navbar/icons/facebook.png';
import instagramIcon from '../../components/navbar/icons/instagram.png';
import { NavLink } from 'react-router-dom';


export default function Feed() {
    return (
        <div>
            <div className='align'>
                <div className='div-formLogin'>
                    <div className='div-title-login'>
                        <p className='title-login'>Cadastrar</p>
                    </div>
                    <div className='div-form'>
                        <div className='div-campos'>
                            <input placeholder='Usuario' type={'text'}></input>
                            <input placeholder='Email' type={'email'}></input>
                            <input placeholder='Senha' type={'password'}></input>
                        </div>
                        <button className='buttonCadastro'>Registrar-se</button>
                        <p className='telaLogin'>Já tem conta?<NavLink to="/login" exact> logar</NavLink></p>
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