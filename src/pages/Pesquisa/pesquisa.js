import React from 'react';
import './pesquisa.scss'
import Navbar from "../../components/navbar/navbar"
import Lupa from "./img/Lupa.svg"
import PerfilPesquisa from '../../components/perfil/perfilPesquisa';

export default function pesquisa(){
return(
    <div className='pesquisa-container'>
        <div className='navbar-pesquisa'>
            <Navbar/>
        </div>
        <div className='conteudo-pesquisa'>
            <div className='campo-de-pesquisa'>
                <input className='barra-de-pesquisa' id="barra-de-pesquisa" type="text"/>
                <label className='label-barra-de-pesquisa' for="barra-de-pesquisa"><img src={Lupa}></img></label>
            </div>
                <PerfilPesquisa/>
        </div>


    </div>

)

}