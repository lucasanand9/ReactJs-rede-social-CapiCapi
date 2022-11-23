import React from 'react';
import './style.scss'
import NavBar from '../../components/navbar/navbar'
import Post from '../../components/post/post'

export default function Feed(){
return(
    
    <div className='div-feed'>
        <div className='navbar-feed'>
            <NavBar/>  
        </div>
        <div className='postagem-feed'>
            <div className='div-add-postagem'>
                <button  className='add-postagem'>Adicionar Postagem</button>
            </div>
            <div className='div-post-feed'>
                <Post/>
                <Post/>
                <Post/>
            </div>
            


        </div>
        
     

    </div>
)
}
