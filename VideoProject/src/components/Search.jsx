import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  return (
    <section className='main'>
      <h2 className='main__titulo'>Video Project With REACTJS</h2>
      <input className={inputStyle} type='text' placeholder='Search...' />
    </section>
  );

};

export default Search;

// RETO 1 => Conectar el buscador con toda la app, trabajar con actions, reducers, stados, presentaciones de UA
// RETO 2 => Actualizar todos los propsTypes en todos los componentes

