import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CategoriesTitle from '../components/CategoriesTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist?.length > 0 && (
        <CategoriesTitle title='My List'>
          <Carousel>
            {initialState.mylist?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </CategoriesTitle>
      )}

      <CategoriesTitle title='Trends'>
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>

      <CategoriesTitle title='Recommended for you'>
        <Carousel>
          {initialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>

      <Footer />

    </div>
  );
};
export default Home;

