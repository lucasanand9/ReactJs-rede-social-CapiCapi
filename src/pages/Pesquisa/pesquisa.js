import React from 'react';
import './pesquisa.scss'
import Navbar from "../../components/navbar/navbar"

export default function pesquisa(){
return(
    <div className='pesquisa-container'>
        <div className='navbar-pesquisa'>
            <Navbar/>
        </div>
        <div className='conteudo-pesquisa'>
        <div className='campo-de-pesquisa'></div>

        </div>


    </div>

)

}