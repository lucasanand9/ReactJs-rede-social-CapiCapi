import React from 'react';
import './style.scss';
import imgUsuario from './icons/user (1).png'
import imgPost from './img/img.png';
import iconLike from './icons/likeNot.png';
import iconComment from './icons/comment.png';


export default function post() {
    return (
        <div className='div-postagem-margin'>

            <div className='div-post-body'>

                <div className='div-imgPerfil-nome'>
                    <div className='div-imgPerfil'>
                        <img className='imgPerfil' src={imgUsuario}></img>
                    </div>
                    <div className='div-titlePerfil'>
                        <p className='titlePerfil'>Mauricio Batista Gabriel</p>
                    </div>
                </div>

                <div className='div-imgPost'>
                    <img className='img-post' src={imgPost}></img>
                </div>

                <div className='div-textPost'>
                    <div className='div-text'>
                        <p className='text-legend'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>

                <div className='div-likeCommentPost'>
                    <div className='div-likeCurtir'>
                        <div className='div-iconLike'>
                            <img className='iconLike' src={iconLike}></img>
                        </div>
                        <div className='divCurtir'>
                            <p className='curtir'>Curtir</p>
                        </div>
                    </div>
                    <div className='div-commentComentar'>
                        <div className='div-iconComment'>
                            <img className='iconComentar' src={iconComment}></img>
                        </div>
                        <div className='div-comentar'>
                            <p className='comentar'>Comentar</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}