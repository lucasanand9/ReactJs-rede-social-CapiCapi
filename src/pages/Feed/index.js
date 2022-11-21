import React from 'react';
import NavBar from '../../components/navbar/navbar'
import Post from '../../components/post/post'

export default function Feed(){
return(
    <div>
        <div className='nav-bar-feed'><NavBar/></div>
        <div className='div-postagem-margin'>
            <Post/>
        </div>

    </div>
)
}
