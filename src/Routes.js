import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Feed from './pages/Feed/index';
import Login from './pages/Login/login';
import Registrar from './pages/Registrar/registrar';
import Configuracao from './pages/Configuracao/configuracao';
import Perfil from './pages/Perfil/perfil';
import EditarUsuario from './pages/EditarUsuario/editarUsuario';
import Pesquisa from './pages/Pesquisa/pesquisa';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path='/'  element={<Feed/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/registrar'  element={<Registrar/>}/>
          <Route path='/configuracao' element={<Configuracao/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/editarUsuario' element={<EditarUsuario/>}/>
          <Route path='/pesquisa' element={<Pesquisa/>}/>
          
        </Routes>
    </Router>
  );
}


