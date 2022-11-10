import React from 'react';
import './style.scss';
import facebookIcon from '../../components/navbar/icons/facebook.png';
import instagramIcon from '../../components/navbar/icons/instagram.png';


export default function Feed() {
    return (
        <div className='div-registrar'>
            <h3 className='text-registrar'>
                Cadastrar-se
            </h3>

            <div className='div-campos'>
                <input id='usuario' type={"text"} placeholder='Usuario' className='usuario'></input>
                <input id='email' type={"email"} placeholder='Email' className='email'></input>
                <input id='senha' type={"password"} placeholder='Senha' className='senha'></input>
            </div>


        </div>
    );
}