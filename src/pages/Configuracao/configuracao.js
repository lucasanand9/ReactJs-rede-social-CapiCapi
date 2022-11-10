import React from "react";
import './style.scss';
import NavBar from '../../components/navbar/navbar';
import Logout from './script';

export default function configuracao() {
    return (
        <div>
            <NavBar />

            {/* titulo da pagina */}
            <h3 className="title-configuracao">Configuração</h3>

            {/* habilitar e dasabilitar usuario */}
            <h3 className="usuarioHabilitado">Usuario habilitado</h3>
            <div className="div-switch">
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>

            {/* editar usuario */}
            <h3 className="editar-usuario">Editar usuario</h3>


            <button onClick={() => Logout()} className="logout-button">Sair</button>
        </div>
    )
}