import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/zorroverde.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (

  <header className='header'>
    <img className='header__img' src={logo} alt='Logo UV' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Crear cuenta' />
        <p>Profile</p>
      </div>
      <ul>
        <li><a href='http://www.ultravaper.cl'>Account</a></li>
        <li><a href='http://www.ultravaper.cl'>Sing Off</a></li>
      </ul>
    </div>
  </header>

);

export default Header;
