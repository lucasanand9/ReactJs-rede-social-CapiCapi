import React from 'react';
import Navbar from '../../components/navbar/navbar'
import './perfil.scss'


export default function perfil(){
return(
    <div className='container'>
        <div className='Navbar-pefil'>
            <Navbar/>
        </div>

        <div className='conteudo-perfil'>
            <div className='card-perfil'>
                <div className='img-perfil'>

                </div>
                <span className='nome-perfil'> Anand </span>
            </div>
        </div>

    </div>

);
}