import React from 'react';
import Navbar from '../../components/navbar/navbar'
import './perfil.scss'
import Postagen from "../../components/post/post"


export default function perfil() {
    return (
        <div className='container'>
            <div className='Navbar-pefil'>
                <Navbar />
            </div>

            <div className='conteudo-perfil'>
                <div className='card-perfil'>
                    <div className='nome-perfil'><h2>AAAAAAAA</h2></div>
                    <div className='img-perfil'></div>
                </div>

                <div className="postagens-perfil">
                    <div className="filtro-perfil">
                        <select className="filtro-dropdown-perfil">
                            <option>Todas as materias</option>
                            <option>Matematica</option>
                            <option>Tecnico</option>
                            <option>Linguagens</option>
                            <option>Humanas</option>
                            <option>Natureza</option>
                        </select>
                    </div>
                    <div className="trabalhos-perfil">
                            {/* <Postagen/> */}
                    </div>
                </div>



            </div>

        </div>

    );
}