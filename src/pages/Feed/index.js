import React from 'react';
import './style.scss'
import NavBar from '../../components/navbar/navbar'
import Post from '../../components/post/post'

export default function Feed(){
return(
    
    <div className='div-feed'>
        <div>
            <NavBar/>  
        </div>
        <div className='postagem-feed'>
            <div className='div-add-postagem'>
                <button  className='add-postagem'>Adicionar Postagem</button>
            </div>

            <Post/>


        </div>
        
     

    </div>
)
}
