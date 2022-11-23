import React from 'react';
import './style.scss';
import imgUsuario from './icons/user (1).png'
import imgPost from './img/img.png';
import iconLike from './icons/likeNot.png';
import iconComment from './icons/comment.png';


export default function post() {
    return (

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
                        <p className='text-legend'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className='div-likeCommentPost'>
                
                        <div className='div-Like'>
                            <img className='iconLike' src={iconLike}></img>
                        </div>

                        <div className='div-Comentar'>
                            <img className='iconComentar' src={iconComment}></img>

                        </div>
                </div>

            </div>

      
    )
}