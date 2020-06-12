import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CategoriesTitle from '../components/CategoriesTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <CategoriesTitle title='My List'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CategoriesTitle>

    <CategoriesTitle title='Recommended for you'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CategoriesTitle>

    <CategoriesTitle title='Trends'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CategoriesTitle>

    <Footer />

  </div>
);

export default App;

