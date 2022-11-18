import React from "react";
import './style.scss';
import NavBar from '../../components/navbar/navbar';
import editPerfil from './icons/editPerfil.png';

export default function editarUsuario() {
    return (
        <div>
            <NavBar />

            {/* Titulo de editar usuario */}
            <h3 className="title-editarUsuario">Editar usuario</h3>

            {/* edição de imagem de perfil */}
            <h3 className="title-imagem">Foto de perfil</h3>
            <img className="img-perfil-editar"></img>
            <div class="image-upload">
                <label for="file-input">
                    <img src={editPerfil}/>
                </label>

                <input id="file-input" type="file" />
            </div>

            {/* edição de usuario */}
            <h3 className="title-usuario">Usuario</h3>
            <input className="input-usuario" type={"text"} placeholder='nome do usuario'></input>

            {/* edição de senha */}
            <h3 className="title-senha">Senha</h3>
            <input className="input-senha" type={"password"} placeholder='********'></input>

            {/* botão salvar alteracões */}
            <button className="button-alteracoes">Salvar alterações</button>

            {/* botão excluir conta */}
            <button className="button-excluir">Excluir conta</button>
        </div>
    )
}