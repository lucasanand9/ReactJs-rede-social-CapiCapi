import React from 'react';
import './style.scss';
import imgUsuario from './icons/user (1).png'


export default function post() {
    return (
        <div className='div-postagem'>
            {/* topo postagem */}
            <img className='img-usuario' src={imgUsuario}></img>
            <h5 className='username'>usuario</h5>
            <hr className="line-horizontal-top"></hr>

            {/* corpo postagem */}
            <h3 className='legend-post'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>

            {/* inferior postagem */}
            <hr className="line-horizontal-bottom"></hr>

        </div>
    )
}