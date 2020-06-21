import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form); // => enviar la informacion que capturamos del estado de login
    console.log(form);
    props.history.push('/'); // => para que una vez que se registtre el usuario pueda irse directamente al home
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>

          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />

          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />

          <button type='submit' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='first_checkbox'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );

};

const mapDispatchToProps = { // => para enviar la informacion al estado general
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
