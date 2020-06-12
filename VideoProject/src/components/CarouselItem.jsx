import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playBoton from '../assets/static/playboton.png';
import plusBoton from '../assets/static/plusboton.png';
import Cover from '../assets/static/holidays1.jpeg';

const CarouselItem = () => (

  <div className='carousel-item'>
    <img className='carousel-item__img' src={Cover} alt='People' />
    <div className='carousel-item__details'>
      <div>
        <img src={playBoton} alt='Play' />
        <img src={plusBoton} alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114minutos</p>
    </div>
  </div>

);

export default CarouselItem;
