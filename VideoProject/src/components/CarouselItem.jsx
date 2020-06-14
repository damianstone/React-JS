import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playBoton from '../assets/static/playboton.png';
import plusBoton from '../assets/static/plusboton.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (

  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img src={playBoton} alt='Play' />
        <img src={plusBoton} alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>

);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
