// Archivo que se encarga de la ruta de nuestro proyecto
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (

  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' componente={Login} />
  </BrowserRouter>

);

export default App;
