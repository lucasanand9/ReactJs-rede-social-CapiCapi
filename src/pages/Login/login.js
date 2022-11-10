import React from 'react';
import './style.scss';
import facebookIcon from '../../components/navbar/icons/facebook.png';
import instagramIcon from '../../components/navbar/icons/instagram.png';
import postUsuarioLogin from './postUsuario';

export default function Feed() {
    return (

        <div className='div-login'>
            <h3 className='text-login'>
                Login
            </h3>

            <input id='email' type={"email"} placeholder='Email' className='input-email'></input>
            <input id='senha' type={"password"} placeholder='Senha' className='input-senha'></input>

            <button  onClick={postUsuarioLogin} className='button-submit' type={"submit"}>Entrar</button>


            <img className='facebook-icon' src={facebookIcon}></img>
            <img className='instagram-icon' src={instagramIcon}></img>
        </div>

    );
}