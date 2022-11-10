
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';

import Feed from './pages/Feed/index'
import Login from './pages/Login/login'
import Registrar from './pages/Registrar/registrar'
import Configuracao from './pages/Configuracao/configuracao'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path='/'  element={<Feed/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/registrar'  element={<Registrar/>}/>
          <Route path='/configuracao' element={<Configuracao/>}/>
        </Routes>
    </Router>
  );
}


