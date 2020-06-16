import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (

  <section className='login'>
    <section className='login__container'>
      <h2>Inicia Sesion</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar Sesion</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' name='' id='cbox1' value='checkbos' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia Sesion con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          Inicia Sesion con Twitter
        </div>

      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <a href='/'>Registrate</a>
      </p>
    </section>
  </section>

);

export default Login;
