import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchRequest } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const { isHome } = props;
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      props.searchRequest(event.target.value);
    }
  };

  return (
    <section className='main'>
      <h2 className='main__titulo'>Video Project With REACTJS</h2>
      <input
        className={inputStyle}
        type='text'
        placeholder='Search...'
        onKeyUp={handleSearch}
      />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };

};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// RETO 1 => Conectar el buscador con toda la app, trabajar con actions, reducers, stados, presentaciones de UA

