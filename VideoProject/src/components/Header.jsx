import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/uv.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Logo UV' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='Crear cuenta' />}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='/' onClick={handleLogout}>Cerrar Sesion</a></li> :
            <li><Link to='/login'>Iniciar Sesion</Link></li>}
        </ul>
      </div>
    </header>
  );

};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
