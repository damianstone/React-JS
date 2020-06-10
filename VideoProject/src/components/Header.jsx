import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (

  <header className='header'>
    <img className='header__img' src='zorroverde.png.png' alt='Logo UV' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='user-icon.png' alt='Crear cuenta' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='http://www.ultravaper.cl'>Cuenta</a></li>
        <li><a href='http://www.ultravaper.cl'>Cerrar Sesion</a></li>
      </ul>
    </div>
  </header>

);

export default Header;
